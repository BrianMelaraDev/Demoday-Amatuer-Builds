

const { ObjectId } = require("bson");
const mappers = require("./mappers.js")
module.exports = function(app, passport, db, ObjectID, multer, storage , upload) {

    app.get('/', function(req, res) {
        res.render('index.ejs');
        //the res will render the index.ejs file
    });
    app.get('/indexAcc', isLoggedIn,function(req, res) {
      res.render('indexAcc.ejs');
   
  });
    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
      let uId = ObjectId(req.session.passport.user)
      console.log("User Name:",req.user.local.userName);
        db.collection('buildPost').find({'postID': uId}).sort({ _id: -1}).toArray((err, result) => {
          db.collection('likes').find({'likerId':uId}).sort({_id:-1}).toArray((err,result1)=>{
            if (err) return console.log(err)
            let likesArr= []
            for (let i = 0; i < result1.length; i++){
             let postId= result1[i].postId
            
              likesArr.push(ObjectID(postId))
            }
            db.collection('buildPost').find({'_id': { "$in" : likesArr}}).sort({ _id: -1}).toArray((err, resultLike) =>{
              if (err) return console.log(err)
              console.log('this is my resultlike',resultLike);
              res.render('profile.ejs', {
                likedPost:resultLike,
                userName:req.user.local.userName,
                userPost: result
              })

            })
            // console.log(likesArr);
          })
          if (err) return console.log(err)
        })
    });

    app.get('/builds', isLoggedIn, function(req, res) {
      db.collection('buildPost').find().sort({ _id: -1}).toArray((err, result) => {
        db.collection('comments').find().sort({ _id: -1}).toArray((err, result1) => {
            const posts = result
            const comments = result1
           let mapPosts = mappers.mapPostsAndComments(posts,comments)
          if (err) return console.log(err)
          res.render('builds.ejs',{
            buildPost:mapPosts,
            userName:req.user.local.userName
          })

        })
        if (err) return console.log(err)
      })
    });
    app.get('/post', function(req,res){
      // console.log(req.query.id);
      let postId =  ObjectID(req.query.id)
      db.collection('buildPost').find({_id: postId}).toArray((err, result) =>{
        db.collection('comments').find({postID:postId}).sort({ _id: -1}).toArray((err, result1) => {
          // console.log(result1);
          if (err) return console.log(err)
          res.render('post.ejs', {
            buildPost:result,
            comments:result1,
            userName:req.user.local.userName
          })

        })
      // res.render('builds.ejs')

      }) 
    })


    // })

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        //will log user out and redirect to index page
        req.logout();
        res.redirect('/');
    });

// message board routes ===============================================================
    // express will create a message in thr database and save it as a object that contains the inforamtion in the save()
    app.post('/submissionPost', isLoggedIn ,(req, res) => { 
      upload(req,res, (err) => {
        if(err) {
          res.render('builds',{
            msg:err
          })
          // console.log("file upload fail", err);
        }else {
          if(req.file == undefined){
            res.render('index', {
              msg: 'Error: No File Selected!'
            });
          } else{

            // console.log("success", req.file);
          
            let uId = ObjectId(req.session.passport.user)
            db.collection('buildPost').save({caption: req.body.caption, postID:uId, userIMG:req.file, userName: req.user.local.userName, likes:0}, (err, result) => {
              //return err
              if (err) return console.log(err)
              console.log('saved to database')
 
            console.log('this is my post ID',result.ops[0].postID);
     
              res.redirect('/builds')
         
            })
          }
          // console.log(req);
        }
      })
    })
app.post('/commentPost/:id', (req, res) =>{
  let postId= ObjectId(req.params.id)
  let uId = ObjectId(req.session.passport.user)
  db.collection('comments').save({postID: postId, posterId:req.user._id, comment:req.body.comment, commentName: req.user.local.userName }, (err, result) =>{
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/builds')
  } )

})
app.put('/updateLike', (req,res)=>{
  console.log('this is the id',req.body.postId);
  console.log('this is the number of likes',req.body.likes);
  let uId = ObjectId(req.session.passport.user)
  console.log('this is the user id' , uId);
  db.collection('buildPost').updateOne({_id:ObjectId(req.body.postId)}, {
    $set:{
      likes: req.body.likes + 1
    }
  },
  {
    upsert: true
    //upsert - update is true
  },(err,result)=>{
    db.collection('likes').save({likerId:uId, postId:ObjectId(req.body.postId)}, (err, result) =>{
      if (err) return res.send(err)
      
    } )
    if (err) return res.send(err)
    // console.log('this is the result', result);
    res.send(result)
  } )
  //
})

app.delete('/delPost', (req,res) =>{
  console.log(req.body.id);
  db.collection('buildPost').findOneAndDelete({_id: ObjectId(req.body.id)}, (err, result) => {

    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })



})

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        
        // process the signup form
        //local-signup is the method that passes returns the data
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
