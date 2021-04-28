


var moboCost
var cpuCost
var gpuCost
var ramCost
var storageCost
var psuCost
var caseCost
var coolerCost
var total 

document.getElementById('buildInfo').addEventListener('click', post)
let moboName 
let cpuName
let ramName
let caseName
let coolerName
let psuName 
let gpuName
let storageName
let totalCost
let motherboardImg
let cpuImg
let ramImg
let caseImg
let coolerImg
let psuImg
let gpuImg
let storageImg
 
function saved( currentMoboName, currentCpuName, currentRamName , currentCaseName, currentCoolerName, currentPsuName, currentGpuName, currentStorageName ,moboImg, cpuImg, ramImg, storageImg, psuImg, caseImg, coolerImg, gpuImg){
 total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  
  moboName = currentMoboName
  cpuName = currentCpuName
  ramName = currentRamName
  caseName = currentCaseName
  coolerName = currentCoolerName
  psuName = currentPsuName
  gpuName = currentGpuName
  storageName = currentStorageName
  motherboardImg = moboImg
  cpuImg = cpuImg
  ramImg =ramImg
  caseImg =caseImg
 coolerImg =coolerImg
 psuImg =psuImg
 gpuImg =gpuImg
 storageImg= storageImg
 console.log('this is the storage name',storageName);
  // post(total ,currentMoboName , currentCpuName ,currentRamName)
  // console.log('from saved', totalCost);
  document.getElementById('priceSpan').innerText= total
  // console.log('this is the name and cost', moboImg, cpuImg, ramImg, storageImg, psuImg, caseImg, coolerImg, gpuImg);
}
function post(){
  console.log(moboName, cpuName, ramName, caseName, coolerName, psuName, gpuName, storageName,totalCost);
    fetch('buildInfo', {
    method: 'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({ moboName: moboName , cpuName: cpuName, ramName: ramName, caseName: caseName, coolerName:coolerName, psuName:psuName, gpuName:gpuName, totalCost:total , cpuImg:cpuImg , gpuImg: gpuImg ,ramImg:ramImg ,moboImg:moboImg , storageImg:storageImg , psuImg:psuImg, caseImg:caseImg, coolerImg:coolerImg })
  }).then(() => { window.location.reload() })  
}
// function post(){



  var cpu = []
  var gpu =[]
  var mobo = []
  var ram = []
  var storage = []
  var power = []
  var pcCase = []
  var cooler = []
  const mapPcParts = (parts)=>{
    // const gpu 
    // const mobo
    // const ram 
    // const storage 
    // const powerSupply
    // const pcCase
  const allPcBuildParts = Object.values(parts).forEach((pc) => {
  cpu.push(pc.filter((part) => part.type === "CPU"));
  gpu.push(pc.filter((part) => part.type === "GPU"));
  mobo.push(pc.filter((part) => part.type === "mobo"));
  ram.push(pc.filter((part) => part.type === "RAM"));
  storage.push(pc.filter((part) => part.type === "storage"));
  power.push(pc.filter((part) => part.type === "powerSupply"));
  pcCase.push(pc.filter((part) => part.type === "case"));
  cooler.push(pc.filter((part) => part.type === "cpuCooler"));
  })
  }
function moboAOption4(){
  cpuName = cpu[0][1].product
  cpuCost = cpu[0][1].cost
  cpuImg = cpu[0][1].img
  moboName = mobo[0][1].product
  moboImg = mobo[0][1].img
  moboCost = mobo[0][1].cost
  document.querySelector('.cpuBrand').innerText =cpu[0][1].brand
  document.querySelector('.cpuProduct').innerText =cpuName
  document.querySelector('.clock').innerText = cpu[0][1].clockSpeed
  document.querySelector('.cpuCost').innerText = cpuCost
  document.getElementById('cpuImg').src = `assets/css/${cpuImg}`
  document.querySelector('.moboBrand').innerText =mobo[0][1].brand
  document.querySelector('.moboProduct').innerText =moboName
  document.querySelector('.moboCost').innerText = moboCost
  document.getElementById('moboImg').src = `assets/css/${moboImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
  console.log(moboName , moboImg, cpuName , moboCost, total);
  

}
function cpuBOption4(){
  console.log(cpu[1][0]);
  cpuName = cpu[1][0].product
  cpuCost = cpu[1][0].cost
  cpuImg = cpu[1][0].img
  moboName = mobo[0][0].product
  moboImg = mobo[0][0].img
  moboCost = mobo[0][0].cost
  console.log(mobo);
  document.querySelector('.cpuBrand').innerText =cpu[1][0].brand
  document.querySelector('.cpuProduct').innerText =cpu[1][0].product
  document.querySelector('.clock').innerText = cpu[1][0].clockSpeed
  document.querySelector('.cpuCost').innerText = cpu[1][0].cost
  document.querySelector('.moboBrand').innerText =mobo[0][0].brand
  document.querySelector('.moboProduct').innerText =moboName
  document.querySelector('.moboCost').innerText = moboCost
  document.getElementById('moboImg').src = `assets/css/${moboImg}`
  cpuCost = cpu[1][0].cost
  document.getElementById('cpuImg').src = `assets/css/${cpu[1][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function gpuAOption4(){
  
  gpuCost = gpu[0][1].cost
  gpuName= gpu[0][1].product
  gpuImg = gpu[0][1].img
  document.querySelector('.gpuBrand').innerText =gpu[0][1].brand
  document.querySelector('.gpuProduct').innerText =gpuName
  document.querySelector('.gpuCost').innerText = gpuCost
  document.getElementById('gpuImg').src = `assets/css/${gpuImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function gpuBOption4(){
  
  gpuCost = gpu[2][0].cost
  gpuName= gpu[2][0].product
  gpuImg = gpu[2][0].img
  document.querySelector('.gpuBrand').innerText =gpu[2][0].brand
  document.querySelector('.gpuProduct').innerText =gpuName
  document.querySelector('.gpuCost').innerText = gpuCost
  document.getElementById('gpuImg').src = `assets/css/${gpuImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function gpuCOption4(){
  
  gpuCost = gpu[3][0].cost
  gpuName= gpu[3][0].product
  gpuImg = gpu[3][0].img
  document.querySelector('.gpuBrand').innerText =gpu[3][0].brand
  document.querySelector('.gpuProduct').innerText =gpuName
  document.querySelector('.gpuCost').innerText = gpuCost
  document.getElementById('gpuImg').src = `assets/css/${gpuImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function ramAOption4(){
  ramCost = ram[3][0].cost
  ramName = ram[3][0].product
  ramImg = ram[3][0].img
  document.querySelector('.ramBrand').innerText =ram[3][0].brand
  document.querySelector('.ramProduct').innerText =ramName
  document.querySelector('.ramCost').innerText = ramCost
  document.querySelector('.ramClock').innerText=ram[3][0].clockSpeed
  document.getElementById('ramImg').src = `assets/css/${ramImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function storageAOption4(){
  console.log(storage[0][1]);
  storageCost = storage[0][1].cost
  storageName = storage[0][1].product
  storageImg = storage[0][1].img
  document.querySelector('.storageBrand').innerText =storage[0][1].brand
  document.querySelector('.storageProduct').innerText =storageName
  document.querySelector('.storageCost').innerText = storageCost

  document.getElementById('storageImg').src = `assets/css/${storageImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function storageBOption4(){
  storageCost = storage[0][2].cost
  storageName = storage[0][2].product
  storageImg = storage[0][2].img
  document.querySelector('.storageBrand').innerText =storage[0][2].brand
  document.querySelector('.storageProduct').innerText =storageName
  document.querySelector('.storageCost').innerText = storageCost
  document.getElementById('storageImg').src = `assets/css/${storageImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function storageCOption4(){
  storageCost = storage[0][3].cost
  storageName = storage[0][3].product
  storageImg = storage[0][3].img
  document.querySelector('.storageBrand').innerText =storage[0][3].brand
  document.querySelector('.storageProduct').innerText =storageName
  document.querySelector('.storageCost').innerText = storageCost
  console.log(storageImg);
  document.getElementById('storageImg').src = `assets/css/${storageImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function psuAOption4(){
  psuName= power[0][1].product
  psuCost= power[0][1].cost
  psuImg = power[0][1].img
  document.querySelector('.psuBrand').innerText =power[0][1].brand
  document.querySelector('.psuProduct').innerText =power[0][1].product
  document.querySelector('.psuCost').innerText = power[0][1].cost
  document.getElementById('psuImg').src = `assets/css/${power[0][1].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function caseAOption4(){
  console.log(pcCase[2][0]);
  caseName= pcCase[2][0].product
  caseCost= pcCase[2][0].cost
  caseImg = pcCase[2][0].img
  document.querySelector('.caseBrand').innerText =pcCase[2][0].brand
  document.querySelector('.caseProduct').innerText =pcCase[2][0].product
  document.querySelector('.caseCost').innerText = pcCase[2][0].cost
  document.getElementById('caseImg').src = `assets/css/${pcCase[2][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function caseBOption4(){
  console.log(pcCase[2][0]);
  caseName= pcCase[3][0].product
  caseCost= pcCase[3][0].cost
  caseImg = pcCase[3][0].img
  document.querySelector('.caseBrand').innerText =pcCase[3][0].brand
  document.querySelector('.caseProduct').innerText =pcCase[3][0].product
  document.querySelector('.caseCost').innerText = pcCase[3][0].cost
  caseCost =pcCase[3][0].cost
  document.getElementById('caseImg').src = `assets/css/${pcCase[3][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

  
}
function coolerAOption4() {
  coolerName= cooler[3][0].product
  coolerCost= cooler[3][0].cost
  coolerImg = cooler[3][0].img
  document.querySelector('.coolerBrand').innerText =cooler[3][0].brand
  document.querySelector('.coolerProduct').innerText =cooler[3][0].product
  document.querySelector('.coolerCost').innerText = cooler[3][0].cost
  document.getElementById('coolerImg').src = `assets/css/${cooler[3][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function coolerBOption4() {
  coolerName= cooler[0][2].product
  coolerCost= cooler[0][2].cost
  coolerImg = cooler[0][2].img
  document.querySelector('.coolerBrand').innerText =cooler[0][2].brand
  document.querySelector('.coolerProduct').innerText =cooler[0][2].product
  document.querySelector('.coolerCost').innerText = cooler[0][2].cost
  coolerCost = cooler[0][2].cost
  document.getElementById('coolerImg').src = `assets/css/${cooler[0][2].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function coolerCOption4() {
  coolerName= cooler[0][1].product
  coolerCost= cooler[0][1].cost
  coolerImg = cooler[0][1].img
  document.querySelector('.coolerBrand').innerText =cooler[0][1].brand
  document.querySelector('.coolerProduct').innerText =cooler[0][1].product
  document.querySelector('.coolerCost').innerText = cooler[0][1].cost
  coolerCost = cooler[0][1].cost
  document.getElementById('coolerImg').src = `assets/css/${cooler[0][1].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}









function moboAOption5(){
  cpuName = cpu[3][0].product
  cpuCost = cpu[3][0].cost
  cpuImg = cpu[3][0].img
  moboName = mobo[3][0].product
  moboImg = mobo[3][0].img
  moboCost = mobo[3][0].cost
  document.querySelector('.cpuBrand').innerText =cpu[3][0].brand
  document.querySelector('.cpuProduct').innerText =cpuName
  document.querySelector('.clock').innerText = cpu[3][0].clockSpeed
  document.querySelector('.cpuCost').innerText = cpuCost
  document.getElementById('cpuImg').src = `assets/css/${cpuImg}`
  document.querySelector('.moboBrand').innerText =mobo[3][0].brand
  document.querySelector('.moboProduct').innerText =moboName
  document.querySelector('.moboCost').innerText = moboCost
  document.getElementById('moboImg').src = `assets/css/${moboImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
  console.log(moboName , moboImg, cpuName , moboCost, total);
  

}
function cpuBOption5(){
  console.log(cpu[1][0]);
  cpuName = cpu[1][0].product
  cpuCost = cpu[1][0].cost
  cpuImg = cpu[1][0].img
  moboName = mobo[0][0].product
  moboImg = mobo[0][0].img
  moboCost = mobo[0][0].cost
  console.log(mobo);
  document.querySelector('.cpuBrand').innerText =cpu[1][0].brand
  document.querySelector('.cpuProduct').innerText =cpu[1][0].product
  document.querySelector('.clock').innerText = cpu[1][0].clockSpeed
  document.querySelector('.cpuCost').innerText = cpu[1][0].cost
  document.querySelector('.moboBrand').innerText =mobo[0][0].brand
  document.querySelector('.moboProduct').innerText =moboName
  document.querySelector('.moboCost').innerText = moboCost
  document.getElementById('moboImg').src = `assets/css/${moboImg}`
  cpuCost = cpu[1][0].cost
  document.getElementById('cpuImg').src = `assets/css/${cpu[1][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function gpuAOption5(){
  gpuCost = gpu[0][1].cost
  gpuName= gpu[0][1].product
  gpuImg = gpu[0][1].img
  document.querySelector('.gpuBrand').innerText =gpu[0][1].brand
  document.querySelector('.gpuProduct').innerText =gpuName
  document.querySelector('.gpuCost').innerText = gpuCost
  document.getElementById('gpuImg').src = `assets/css/${gpuImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function gpuBOption5(){
  console.log(gpu[1][1]);
  gpuCost = gpu[1][1].cost
  gpuName= gpu[1][1].product
  gpuImg = gpu[1][1].img
  document.querySelector('.gpuBrand').innerText =gpu[1][1].brand
  document.querySelector('.gpuProduct').innerText =gpuName
  document.querySelector('.gpuCost').innerText = gpuCost
  document.getElementById('gpuImg').src = `assets/css/${gpuImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function gpuCOption5(){
  
  gpuCost = gpu[3][0].cost
  gpuName= gpu[3][0].product
  gpuImg = gpu[3][0].img
  document.querySelector('.gpuBrand').innerText =gpu[3][0].brand
  document.querySelector('.gpuProduct').innerText =gpuName
  document.querySelector('.gpuCost').innerText = gpuCost
  document.getElementById('gpuImg').src = `assets/css/${gpuImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function ramAOption5(){
  ramCost = ram[4][0].cost
  ramName = ram[4][0].product
  ramImg = ram[4][0].img
  document.querySelector('.ramBrand').innerText =ram[4][0].brand
  document.querySelector('.ramProduct').innerText =ramName
  document.querySelector('.ramCost').innerText = ramCost
  document.querySelector('.ramClock').innerText=ram[4][0].clockSpeed
  document.getElementById('ramImg').src = `assets/css/${ramImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function storageAOption5(){
  console.log(storage[0][1]);
  storageCost = storage[0][1].cost
  storageName = storage[0][1].product
  storageImg = storage[0][1].img
  document.querySelector('.storageBrand').innerText =storage[0][1].brand
  document.querySelector('.storageProduct').innerText =storageName
  document.querySelector('.storageCost').innerText = storageCost

  document.getElementById('storageImg').src = `assets/css/${storageImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function storageBOption5(){
  storageCost = storage[0][2].cost
  storageName = storage[0][2].product
  storageImg = storage[0][2].img
  document.querySelector('.storageBrand').innerText =storage[0][2].brand
  document.querySelector('.storageProduct').innerText =storageName
  document.querySelector('.storageCost').innerText = storageCost
  document.getElementById('storageImg').src = `assets/css/${storageImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function storageCOption5(){
  storageCost = storage[0][3].cost
  storageName = storage[0][3].product
  storageImg = storage[0][3].img
  document.querySelector('.storageBrand').innerText =storage[0][3].brand
  document.querySelector('.storageProduct').innerText =storageName
  document.querySelector('.storageCost').innerText = storageCost
  console.log(storageImg);
  document.getElementById('storageImg').src = `assets/css/${storageImg}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function psuAOption5(){
  psuName= cooler[0][2].product
  psuCost= cooler[0][2].cost
  psuImg = cooler[0][2].img
  document.querySelector('.psuBrand').innerText =power[0][1].brand
  document.querySelector('.psuProduct').innerText =power[0][1].product
  document.querySelector('.psuCost').innerText = power[0][1].cost
  document.getElementById('psuImg').src = `assets/css/${power[0][1].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total
}
function caseAOption5(){
  caseName= pcCase[2][0].product
  caseCost= pcCase[2][0].cost
  caseImg = pcCase[2][0].img
  document.querySelector('.caseBrand').innerText =pcCase[2][0].brand
  document.querySelector('.caseProduct').innerText =pcCase[2][0].product
  document.querySelector('.caseCost').innerText = pcCase[2][0].cost
  document.getElementById('caseImg').src = `assets/css/${pcCase[2][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

  
}
function caseBOption5(){
  caseName= pcCase[3][0].product
  caseCost= pcCase[3][0].cost
  caseImg = pcCase[3][0].img
  document.querySelector('.caseBrand').innerText =pcCase[3][0].brand
  document.querySelector('.caseProduct').innerText =pcCase[3][0].product
  document.querySelector('.caseCost').innerText = pcCase[3][0].cost
  document.getElementById('caseImg').src = `assets/css/${pcCase[3][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

  
}
function coolerAOption5() {
  coolerName= cooler[3][0].product
  coolerCost= cooler[3][0].cost
  coolerImg = cooler[3][0].img
  document.querySelector('.coolerBrand').innerText =cooler[3][0].brand
  document.querySelector('.coolerProduct').innerText =cooler[3][0].product
  document.querySelector('.coolerCost').innerText = cooler[3][0].cost
  coolerCost = cooler[3][0].cost
  document.getElementById('coolerImg').src = `assets/css/${cooler[3][0].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function coolerBOption5() {
  coolerName= cooler[0][2].product
  coolerCost= cooler[0][2].cost
  coolerImg = cooler[0][2].img
  document.querySelector('.coolerBrand').innerText =cooler[0][2].brand
  document.querySelector('.coolerProduct').innerText =cooler[0][2].product
  document.querySelector('.coolerCost').innerText = cooler[0][2].cost
  coolerCost = cooler[0][2].cost
  document.getElementById('coolerImg').src = `assets/css/${cooler[0][2].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}
function coolerCOption5() {
  coolerName= cooler[0][1].product
  coolerCost= cooler[0][1].cost
  coolerImg = cooler[0][1].img
  document.querySelector('.coolerBrand').innerText =cooler[0][1].brand
  document.querySelector('.coolerProduct').innerText =cooler[0][1].product
  document.querySelector('.coolerCost').innerText = cooler[0][1].cost
  coolerCost = cooler[0][1].cost
  document.getElementById('coolerImg').src = `assets/css/${cooler[0][1].img}`
  total = moboCost + cpuCost + gpuCost + ramCost + storageCost + psuCost + caseCost + coolerCost
  document.getElementById('priceSpan').innerText= total

}



































document.querySelectorAll('.sug').forEach(option =>{
  option.addEventListener('click', start =>{
    console.log(option.getAttribute('data'));
    if(dataAttribute ==='400'){
      if((option.getAttribute('data')==='moboA' )|| (option.getAttribute('data')==='cpuA' )){
        console.log(dataAttribute);
        moboAOption4()
      }else if(option.getAttribute('data')==='gpuA' ){
        gpuAOption4()
      }else if(option.getAttribute('data')==='cpuB' ){
        cpuBOption4()
      }else if(option.getAttribute('data')==='gpuB' ){
        gpuBOption4()
      }else if(option.getAttribute('data')==='gpuC' ){
        gpuCOption4()
      }else if(option.getAttribute('data')==='ramA' ){
        ramAOption4()
      }else if(option.getAttribute('data')==='storageA'){
        storageAOption4()
      }else if(option.getAttribute('data')==='storageB'){
        storageBOption4()
      }else if(option.getAttribute('data')==='storageC'){
        storageCOption4()
      }else if(option.getAttribute('data')==='psuA'){
        psuAOption4()
      }else if(option.getAttribute('data')==='caseA'){
        caseAOption4()
      }else if(option.getAttribute('data')==='caseB'){
        caseBOption4()
      }else if(option.getAttribute('data')==='coolerA'){
        coolerAOption4()
      }else if(option.getAttribute('data')==='coolerB'){
        coolerBOption4()
      }else if(option.getAttribute('data')==='coolerC'){
        coolerCOption4()
      }

    }else if(dataAttribute ==='500'){
      if((option.getAttribute('data')==='moboA' )|| (option.getAttribute('data')==='cpuA' )){
        console.log(dataAttribute);
        moboAOption5()
      }else if(option.getAttribute('data')==='gpuA' ){
        gpuAOption5()
      }else if(option.getAttribute('data')==='cpuB' ){
        cpuBOption5()
      }else if(option.getAttribute('data')==='gpuB' ){
        gpuBOption5()
      }else if(option.getAttribute('data')==='gpuC' ){
        gpuCOption5()
      }else if(option.getAttribute('data')==='ramA' ){
        ramAOption5()
      }else if(option.getAttribute('data')==='storageA'){
        storageAOption5()
      }else if(option.getAttribute('data')==='storageB'){
        storageBOption5()
      }else if(option.getAttribute('data')==='storageC'){
        storageCOption5()
      }else if(option.getAttribute('data')==='psuA'){
        psuAOption5()
      }else if(option.getAttribute('data')==='caseA'){
        caseAOption5()
      }else if(option.getAttribute('data')==='caseB'){
        caseBOption5()
      }else if(option.getAttribute('data')==='coolerA'){
        coolerAOption5()
      }else if(option.getAttribute('data')==='coolerB'){
        coolerBOption5()
      }else if(option.getAttribute('data')==='coolerC'){
        coolerCOption5()
      }





    }
  })

    

    // console.log(option.getAttribute('data'));

})








// function totalBuildCost(){
//   total = moboCost + cpuCost  + ramCost + storageCost + psuCost + caseCost + coolerCost
//   console.log('this is the mobo cost',moboCost , cpuCost , ramCost , storageCost , psuCost, caseCost , coolerCost );
//   console.log('this is the total', total);
// }




// } 
var dataAttribute 
document.querySelectorAll('li').forEach(item =>{
  item.addEventListener('click', event => {
    var total = 0
   
    console.log(item.getAttribute('data'));
    if (item.getAttribute('data')==400 ){
      dataAttribute = item.getAttribute('data')
      // let total = 0
      console.log('joe malon')
      fetch('/computerAPI.json')
        .then(res=>res.json())
        .then(data =>{
          mapPcParts(data)
          document.querySelector('.motherOne').innerText = data.buildCost400[9].product
          let moboOneCost = data.buildCost400[9].cost
          document.querySelector('.motherOneCost').innerText = `$${moboOneCost}`

          document.querySelector('.cpuOne').innerText = data.buildCost400[8].product
          let cpuOneCost = data.buildCost400[8].cost
          document.querySelector('.cpuOneCost').innerText = `$${cpuOneCost}`

          document.querySelector('.cpuTwo').innerText = data.buildCost500[0].product
          document.querySelector('.cpuTwoCost').innerText = `$${data.buildCost500[0].cost}`

          document.querySelector('.gpuOne').innerText = data.buildCost400[10].product
          let gpuOneCost = data.buildCost400[10].cost
          document.querySelector('.gpuOneCost').innerText = `$${gpuOneCost}`
         
          document.querySelector('.gpuTwo').innerText = gpu[2][0].product
          document.querySelector('.gpuTwoCost').innerText = `$${gpu[2][0].cost}`
          document.querySelector('.gpuThree').innerText = gpu[3][0].product
          document.querySelector('.gpuThreeCost').innerText = `$${gpu[3][0].cost}`
        
          document.querySelector('.ramOne').innerText = ram[3][0].product
          document.querySelector('.ramOneCost').innerText =`$${ram[3][0].cost}`
       
          document.querySelector('.storageOne').innerText = storage[0][1].product 
          document.querySelector('.storageOneCost').innerText =`$${storage[0][1].cost}` 
          document.querySelector('.storageTwo').innerText = storage[0][2].product 
          document.querySelector('.storageTwoCost').innerText = `$${storage[0][2].cost}`
          document.querySelector('.storageThree').innerText = storage[0][3].product 
          document.querySelector('.storageThreeCost').innerText = `$${storage[0][3].cost}`
        
          document.querySelector('.psuOne').innerText = power[0][1].product
          document.querySelector('.psuOneCost').innerText =`$${power[0][1].cost}` 

          document.querySelector('.caseOne').innerText = pcCase[2][0].product
          document.querySelector('.caseOneCost').innerText = `$${pcCase[2][0].cost}`
          document.querySelector('.caseTwo').innerText = pcCase[3][0].product
          document.querySelector('.caseTwoCost').innerText = `$${pcCase[3][0].cost}`
          console.log(cooler[0]);
          document.querySelector('.coolerOne').innerText = cooler[3][0].product
          document.querySelector('.coolerOneCost').innerText = `$${cooler[3][0].cost}`
          document.querySelector('.coolerTwo').innerText = cooler[0][2].product
          document.querySelector('.coolerTwoCost').innerText = `$${cooler[0][2].cost}`
          document.querySelector('.coolerThree').innerText = cooler[0][1].product
          document.querySelector('.coolerThreeCost').innerText = `$${cooler[0][1].cost}`







          document.querySelector('.moboBrand').innerText =data.buildCost400[2].brand
          document.querySelector('.moboProduct').innerText =data.buildCost400[2].product
          document.querySelector('.moboCost').innerText = data.buildCost400[2].cost
          let currentMoboName = data.buildCost400[2].product
          let currentMoboPrice = data.buildCost400[2].cost
          // total(data.buildCost400[2].cost)
              moboCost =data.buildCost400[2].cost
          let moboImg= data.buildCost400[2].img
          document.getElementById('moboImg').src = `assets/css/${moboImg}`


          document.querySelector('.cpuBrand').innerText =data.buildCost400[0].brand
          document.querySelector('.cpuProduct').innerText =data.buildCost400[0].product
          document.querySelector('.clock').innerText = data.buildCost400[0].clockSpeed
          document.querySelector('.cpuCost').innerText = data.buildCost400[0].cost
          let currentCpuName = data.buildCost400[0].product
          let currentCpuPrice = data.buildCost400[0].cost
          cpuCost = data.buildCost400[0].cost
          // total(data.buildCost400[0].cost)
          let cpuImg= data.buildCost400[0].img
          document.getElementById('cpuImg').src = `assets/css/${cpuImg}`

          document.querySelector('.gpuBrand').innerText =data.buildCost400[1].brand
          document.querySelector('.gpuProduct').innerText =data.buildCost400[1].product
          document.querySelector('.gpuCost').innerText = data.buildCost400[1].cost
          let currentGpuName = data.buildCost400[1].product
          let currentGpuPrice = data.buildCost400[1].cost
          gpuCost = data.buildCost400[1].cost
          let gpuImg= data.buildCost400[1].img
          document.getElementById('gpuImg').src = `assets/css/${gpuImg}`


          document.querySelector('.ramBrand').innerText =data.buildCost400[3].brand
          document.querySelector('.ramProduct').innerText =data.buildCost400[3].product
          document.querySelector('.ramCost').innerText = data.buildCost400[3].cost
          document.querySelector('.ramClock').innerText=data.buildCost400[3].clockSpeed
          let currentRamName = data.buildCost400[3].product
          let currentRamPrice = data.buildCost400[3].cost
          ramCost =  data.buildCost400[3].cost
          let ramImg= data.buildCost400[3].img
          document.getElementById('ramImg').src = `assets/css/${ramImg}`


          document.querySelector('.storageBrand').innerText =data.buildCost400[4].brand
          document.querySelector('.storageProduct').innerText =data.buildCost400[4].product
          document.querySelector('.storageCost').innerText = data.buildCost400[4].cost
          let currentStorageName = data.buildCost400[4].product
          let currentStoragePrice = data.buildCost400[4].cost
          console.log(currentStorageName);
          storageCost = data.buildCost400[4].cost
          let storageImg= data.buildCost400[4].img
          document.getElementById('storageImg').src = `assets/css/${storageImg}`

          
          document.querySelector('.psuBrand').innerText =data.buildCost400[5].brand
          document.querySelector('.psuProduct').innerText =data.buildCost400[5].product
          document.querySelector('.psuCost').innerText = data.buildCost400[5].cost
          let currentPsuName = data.buildCost400[5].product
          let currentPsuPrice = data.buildCost400[5].cost
          psuCost = data.buildCost400[5].cost
          let psuImg= data.buildCost400[5].img
          document.getElementById('psuImg').src = `assets/css/${psuImg}`

          
          document.querySelector('.caseBrand').innerText =data.buildCost400[6].brand
          document.querySelector('.caseProduct').innerText =data.buildCost400[6].product
          document.querySelector('.caseCost').innerText = data.buildCost400[6].cost
          let currentCaseName = data.buildCost400[6].product
          let currentCasePrice = data.buildCost400[6].cost
          let caseImg= data.buildCost400[6].img
          caseCost =data.buildCost400[6].cost
          document.getElementById('caseImg').src = `assets/css/${caseImg}`

          document.querySelector('.coolerBrand').innerText =data.buildCost400[7].brand
          document.querySelector('.coolerProduct').innerText =data.buildCost400[7].product
          document.querySelector('.coolerCost').innerText = data.buildCost400[7].cost
          let currentCoolerName = data.buildCost400[7].product
          let currentCoolerPrice = data.buildCost400[7].cost
          coolerCost = data.buildCost400[7].cost
          let coolerImg= data.buildCost400[7].img
          document.getElementById('coolerImg').src = `assets/css/${coolerImg}`
          
       document.getElementById('priceSpan').innerText= total
       console.log(moboImg);
      //  totalBuildCost()
       saved( currentMoboName, currentCpuName, currentRamName , currentCaseName, currentCoolerName, currentPsuName, currentGpuName, currentStorageName ,moboImg, cpuImg, ramImg, storageImg, psuImg, caseImg, coolerImg, gpuImg )
       
        })
    }
    if (item.getAttribute('data')==500 ){
      dataAttribute = item.getAttribute('data')
      // let total = 0
      console.log('joe malon')
      fetch('/computerAPI.json')
        .then(res=>res.json())
        .then(data =>{
          mapPcParts(data)
          document.querySelector('.motherOne').innerText = data.buildCost400[9].product
          let moboOneCost = data.buildCost400[9].cost
          document.querySelector('.motherOneCost').innerText = `$${moboOneCost}`
          console.log(cpu, 'this is the cpu list');
          document.querySelector('.cpuOne').innerText = data.buildCost400[8].product
          let cpuOneCost = data.buildCost400[8].cost
          document.querySelector('.cpuOneCost').innerText = `$${cpuOneCost}`
          document.querySelector('.cpuTwo').innerText = cpu[0][1].product
          document.querySelector('.cpuTwoCost').innerText = `$${ cpu[0][1].cost}`

          // document.querySelector('.gpuOne').innerText=
          document.querySelector('.gpuOne').innerText = data.buildCost400[10].product
          let gpuOneCost = data.buildCost400[10].cost
          document.querySelector('.gpuOneCost').innerText = `$${gpuOneCost}`
         
          document.querySelector('.gpuTwo').innerText = gpu[2][0].product
          document.querySelector('.gpuTwoCost').innerText = `$${gpu[2][0].cost}`
          document.querySelector('.gpuThree').innerText = gpu[3][0].product
          document.querySelector('.gpuThreeCost').innerText = `$${gpu[3][0].cost}`
        
          document.querySelector('.ramOne').innerText = ram[3][0].product
          document.querySelector('.ramOneCost').innerText =`$${ram[3][0].cost}`
       
          document.querySelector('.storageOne').innerText = storage[0][1].product 
          document.querySelector('.storageOneCost').innerText =`$${storage[0][1].cost}` 
          document.querySelector('.storageTwo').innerText = storage[0][2].product 
          document.querySelector('.storageTwoCost').innerText = `$${storage[0][2].cost}`
          document.querySelector('.storageThree').innerText = storage[0][3].product 
          document.querySelector('.storageThreeCost').innerText = `$${storage[0][3].cost}`
        
          document.querySelector('.psuOne').innerText = power[0][1].product
          document.querySelector('.psuOneCost').innerText =`$${power[0][1].cost}` 

          document.querySelector('.caseOne').innerText = pcCase[2][0].product
          document.querySelector('.caseOneCost').innerText = `$${pcCase[2][0].cost}`
          document.querySelector('.caseTwo').innerText = pcCase[3][0].product
          document.querySelector('.caseTwoCost').innerText = `$${pcCase[3][0].cost}`
          console.log(cooler[0]);
          document.querySelector('.coolerOne').innerText = cooler[3][0].product
          document.querySelector('.coolerOneCost').innerText = `$${cooler[3][0].cost}`
          document.querySelector('.coolerTwo').innerText = cooler[0][2].product
          document.querySelector('.coolerTwoCost').innerText = `$${cooler[0][2].cost}`
          document.querySelector('.coolerThree').innerText = cooler[0][1].product
          document.querySelector('.coolerThreeCost').innerText = `$${cooler[0][1].cost}`














          document.querySelector('.moboBrand').innerText =data.buildCost500[2].brand
          document.querySelector('.moboProduct').innerText =data.buildCost500[2].product
          document.querySelector('.moboCost').innerText = data.buildCost500[2].cost
          let currentMoboName = data.buildCost500[2].product
          let currentMoboPrice = data.buildCost500[2].cost
          // total(data.buildCost400[2].cost)
          moboCost =data.buildCost500[2].cost
          let moboImg= data.buildCost500[2].img
          document.getElementById('moboImg').src = `assets/css/${moboImg}`



          document.querySelector('.cpuBrand').innerText =data.buildCost500[0].brand
          document.querySelector('.cpuProduct').innerText =data.buildCost500[0].product
          document.querySelector('.cpuCost').innerText = data.buildCost500[0].cost
          document.querySelector('.clock').innerText = data.buildCost500[0].clockSpeed
          console.log(data.buildCost500[0].cost);
          let currentCpuName = data.buildCost500[0].product
          let currentCpuPrice = data.buildCost500[0].cost
          cpuCost = data.buildCost500[0].cost
          // total(data.buildCost400[0].cost)
          let cpuImg= data.buildCost500[0].img
          document.getElementById('cpuImg').src = `assets/css/${cpuImg}`


          document.querySelector('.gpuBrand').innerText =data.buildCost500[1].brand
          document.querySelector('.gpuProduct').innerText =data.buildCost500[1].product
          document.querySelector('.gpuCost').innerText = data.buildCost500[1].cost
          let currentGpuName = data.buildCost500[1].product
          let currentGpuPrice = data.buildCost500[1].cost
          gpuCost = data.buildCost500[1].cost
          let gpuImg= data.buildCost500[1].img
          document.getElementById('gpuImg').src = `assets/css/${gpuImg}`


          document.querySelector('.ramBrand').innerText =data.buildCost500[3].brand
          document.querySelector('.ramProduct').innerText =data.buildCost500[3].product
          document.querySelector('.ramCost').innerText = data.buildCost500[3].cost
          document.querySelector('.ramClock').innerText=data.buildCost500[3].clockSpeed
          let currentRamName = data.buildCost500[3].product
          let currentRamPrice = data.buildCost500[3].cost
          ramCost =  data.buildCost500[3].cost
          let ramImg= data.buildCost500[3].img
          document.getElementById('ramImg').src = `assets/css/${ramImg}`


          document.querySelector('.storageBrand').innerText =data.buildCost500[4].brand
          document.querySelector('.storageProduct').innerText =data.buildCost500[4].product
          document.querySelector('.storageCost').innerText = data.buildCost500[4].cost
          let currentStorageName = data.buildCost500[4].product
          let currentStoragePrice = data.buildCost500[4].cost
          storageCost = data.buildCost500[4].cost
          let storageImg= data.buildCost500[4].img
          document.getElementById('storageImg').src = `assets/css/${storageImg}`

          
          document.querySelector('.psuBrand').innerText =data.buildCost500[5].brand
          document.querySelector('.psuProduct').innerText =data.buildCost500[5].product
          document.querySelector('.psuCost').innerText = data.buildCost500[5].cost
          let currentPsuName = data.buildCost500[5].product
          let currentPsuPrice = data.buildCost500[5].cost
          psuCost = data.buildCost500[5].cost
          let psuImg= data.buildCost500[5].img
          document.getElementById('psuImg').src = `assets/css/${psuImg}`

          
          document.querySelector('.caseBrand').innerText =data.buildCost500[6].brand
          document.querySelector('.caseProduct').innerText =data.buildCost500[6].product
          document.querySelector('.caseCost').innerText = data.buildCost500[6].cost
          let currentCaseName = data.buildCost500[6].product
          let currentCasePrice = data.buildCost500[6].cost
          let caseImg= data.buildCost500[6].img
          caseCost = data.buildCost500[6].cost
          document.getElementById('caseImg').src = `assets/css/${caseImg}`

          document.querySelector('.coolerBrand').innerText =data.buildCost500[7].brand
          document.querySelector('.coolerProduct').innerText =data.buildCost500[7].product
          document.querySelector('.coolerCost').innerText = data.buildCost500[7].cost
          let currentCoolerName = data.buildCost500[7].product
          let currentCoolerPrice = data.buildCost500[7].cost
          coolerCost = data.buildCost500[7].cost
          let coolerImg= data.buildCost500[7].img
          document.getElementById('coolerImg').src = `assets/css/${coolerImg}`



          saved(total,currentMoboName,currentCpuName,currentRamName , currentCaseName, currentCoolerName, currentPsuName, moboImg, cpuImg, ramImg, storageImg, psuImg, caseImg, coolerImg )
        
          console.log(total);
        })
  
    }
    if (item.getAttribute('data')==600 ){
      dataAttribute = item.getAttribute('data')
      fetch('/computerAPI.json')
        .then(res=>res.json())
        .then(data =>{
          mapPcParts(data)
          
          document.querySelector('.moboBrand').innerText =data.buildCost600[2].brand
          document.querySelector('.moboProduct').innerText =data.buildCost600[2].product
          document.querySelector('.moboCost').innerText = data.buildCost600[2].cost
          let currentMoboName = data.buildCost600[2].product
          let currentMoboPrice = data.buildCost600[2].cost
          // total(data.buildCost400[2].cost)
          moboCost = data.buildCost600[2].cost
          let moboImg= data.buildCost600[2].img
          document.getElementById('moboImg').src = `assets/css/${moboImg}`



          document.querySelector('.cpuBrand').innerText =data.buildCost600[0].brand
          document.querySelector('.cpuProduct').innerText =data.buildCost600[0].product
          document.querySelector('.cpuCost').innerText = data.buildCost600[0].cost
          document.querySelector('.clock').innerText = data.buildCost600[0].clockSpeed
    
          let currentCpuName = data.buildCost600[0].product
          let currentCpuPrice = data.buildCost600[0].cost
          cpuCost = data.buildCost600[0].cost
          // total(data.buildCost400[0].cost)
          let cpuImg= data.buildCost600[0].img
          document.getElementById('cpuImg').src = `assets/css/${cpuImg}`

          document.querySelector('.gpuBrand').innerText =data.buildCost600[1].brand
          document.querySelector('.gpuProduct').innerText =data.buildCost600[1].product
          document.querySelector('.gpuCost').innerText = data.buildCost600[1].cost
          let currentGpuName = data.buildCost600[1].product
          let currentGpuPrice = data.buildCost600[1].cost
          gpuCost =data.buildCost600[1].cost
          let gpuImg= data.buildCost600[1].img
          document.getElementById('gpuImg').src = `assets/css/${gpuImg}`





          document.querySelector('.ramBrand').innerText =data.buildCost600[3].brand
          document.querySelector('.ramProduct').innerText =data.buildCost600[3].product
          document.querySelector('.ramCost').innerText = data.buildCost600[3].cost
          document.querySelector('.ramClock').innerText=data.buildCost600[3].clockSpeed
          
          let currentRamName = data.buildCost600[3].product
          let currentRamPrice = data.buildCost600[3].cost
          ramCost = data.buildCost600[3].cost
          let ramImg= data.buildCost600[3].img
          document.getElementById('ramImg').src = `assets/css/${ramImg}`


          document.querySelector('.storageBrand').innerText =data.buildCost600[4].brand
          document.querySelector('.storageProduct').innerText =data.buildCost600[4].product
          document.querySelector('.storageCost').innerText = data.buildCost600[4].cost
          let currentStorageName = data.buildCost600[4].product
          let currentStoragePrice = data.buildCost600[4].cost
          storageCost =data.buildCost600[4].cost
          let storageImg= data.buildCost600[4].img
          document.getElementById('storageImg').src = `assets/css/${storageImg}`

          
          document.querySelector('.psuBrand').innerText =data.buildCost600[5].brand
          document.querySelector('.psuProduct').innerText =data.buildCost600[5].product
          document.querySelector('.psuCost').innerText = data.buildCost600[5].cost
          let currentPsuName = data.buildCost600[5].product
          let currentPsuPrice = data.buildCost600[5].cost
          psuCost = data.buildCost600[5].cost
          let psuImg= data.buildCost600[5].img
          document.getElementById('psuImg').src = `assets/css/${psuImg}`

          
          document.querySelector('.caseBrand').innerText =data.buildCost600[6].brand
          document.querySelector('.caseProduct').innerText =data.buildCost600[6].product
          document.querySelector('.caseCost').innerText = data.buildCost600[6].cost
          let currentCaseName = data.buildCost600[6].product
          let currentCasePrice = data.buildCost600[6].cost
          let caseImg= data.buildCost600[6].img
          caseCost =data.buildCost600[6].cost
          document.getElementById('caseImg').src = `assets/css/${caseImg}`

          document.querySelector('.coolerBrand').innerText =data.buildCost600[7].brand
          document.querySelector('.coolerProduct').innerText =data.buildCost600[7].product
          document.querySelector('.coolerCost').innerText = data.buildCost600[7].cost
          let currentCoolerName = data.buildCost600[7].product
          let currentCoolerPrice = data.buildCost600[7].cost
          coolerCost = data.buildCost600[7].cost
          let coolerImg= data.buildCost600[7].img
          document.getElementById('coolerImg').src = `assets/css/${coolerImg}`
          saved(total,currentMoboName,currentCpuName,currentRamName , currentCaseName, currentCoolerName, currentPsuName, moboImg, cpuImg, ramImg, storageImg, psuImg, caseImg, coolerImg )
          console.log(total);
        })
  
    }
    if (item.getAttribute('data')==700 ){
      dataAttribute = item.getAttribute('data')
      // let total = 0
      console.log('joe malon')
      fetch('/computerAPI.json')
        .then(res=>res.json())
        .then(data =>{
          mapPcParts(data)
          
          document.querySelector('.moboBrand').innerText =data.buildCost700[2].brand
          document.querySelector('.moboProduct').innerText =data.buildCost700[2].product
          document.querySelector('.moboCost').innerText = data.buildCost700[2].cost
          let currentMoboName = data.buildCost700[2].product
          let currentMoboPrice = data.buildCost700[2].cost
          // total(data.buildCost400[2].cost)
          moboCost =data.buildCost700[2].cost
          let moboImg= data.buildCost700[2].img
          document.getElementById('moboImg').src = `assets/css/${moboImg}`



          document.querySelector('.cpuBrand').innerText =data.buildCost700[0].brand
          document.querySelector('.cpuProduct').innerText =data.buildCost700[0].product
          document.querySelector('.cpuCost').innerText = data.buildCost700[0].cost
          document.querySelector('.clock').innerText = data.buildCost700[0].clockSpeed
          let currentCpuName = data.buildCost700[0].product
          let currentCpuPrice = data.buildCost700[0].cost
          cpuCost = data.buildCost700[0].cost
          // total(data.buildCost400[0].cost)
          let cpuImg= data.buildCost700[0].img
          document.getElementById('cpuImg').src = `assets/css/${cpuImg}`

          document.querySelector('.gpuBrand').innerText =data.buildCost700[1].brand
          document.querySelector('.gpuProduct').innerText =data.buildCost700[1].product
          document.querySelector('.gpuCost').innerText = data.buildCost700[1].cost
          let currentGpuName = data.buildCost700[1].product
          let currentGpuPrice = data.buildCost700[1].cost
          gpuCost = data.buildCost700[1].cost
          let gpuImg= data.buildCost700[1].img
          document.getElementById('gpuImg').src = `assets/css/${gpuImg}`





          document.querySelector('.ramBrand').innerText =data.buildCost700[3].brand
          document.querySelector('.ramProduct').innerText =data.buildCost700[3].product
          document.querySelector('.ramCost').innerText = data.buildCost700[3].cost
          document.querySelector('.ramClock').innerText=data.buildCost700[3].clockSpeed
          let currentRamName = data.buildCost700[3].product
          let currentRamPrice = data.buildCost700[3].cost
          ramCost = data.buildCost700[3].cost
          let ramImg= data.buildCost700[3].img
          document.getElementById('ramImg').src = `assets/css/${ramImg}`


          document.querySelector('.storageBrand').innerText =data.buildCost700[4].brand
          document.querySelector('.storageProduct').innerText =data.buildCost700[4].product
          document.querySelector('.storageCost').innerText = data.buildCost700[4].cost
          let currentStorageName = data.buildCost700[4].product
          let currentStoragePrice = data.buildCost700[4].cost
          storageCost = data.buildCost700[4].cost
          let storageImg= data.buildCost700[4].img
          document.getElementById('storageImg').src = `assets/css/${storageImg}`

          
          document.querySelector('.psuBrand').innerText =data.buildCost700[5].brand
          document.querySelector('.psuProduct').innerText =data.buildCost700[5].product
          document.querySelector('.psuCost').innerText = data.buildCost700[5].cost
          let currentPsuName = data.buildCost700[5].product
          let currentPsuPrice = data.buildCost700[5].cost
          psuCost = data.buildCost700[5].cost
          let psuImg= data.buildCost700[5].img
          document.getElementById('psuImg').src = `assets/css/${psuImg}`

          
          document.querySelector('.caseBrand').innerText =data.buildCost700[6].brand
          document.querySelector('.caseProduct').innerText =data.buildCost700[6].product
          document.querySelector('.caseCost').innerText = data.buildCost700[6].cost
          let currentCaseName = data.buildCost700[6].product
          let currentCasePrice = data.buildCost700[6].cost
          let caseImg= data.buildCost700[6].img
          caseCost = data.buildCost700[6].cost
          document.getElementById('caseImg').src = `assets/css/${caseImg}`

          document.querySelector('.coolerBrand').innerText =data.buildCost700[7].brand
          document.querySelector('.coolerProduct').innerText =data.buildCost700[7].product
          document.querySelector('.coolerCost').innerText = data.buildCost700[7].cost
          let currentCoolerName = data.buildCost700[7].product
          let currentCoolerPrice = data.buildCost700[7].cost
          coolerCost = data.buildCost700[7].cost
          let coolerImg= data.buildCost700[7].img
          document.getElementById('coolerImg').src = `assets/css/${coolerImg}`
          saved(total,currentMoboName,currentCpuName,currentRamName , currentCaseName, currentCoolerName, currentPsuName, moboImg, cpuImg, ramImg, storageImg, psuImg, caseImg, coolerImg )
        })
   
    }
    if (item.getAttribute('data')==800 ){
      dataAttribute = item.getAttribute('data')
      fetch('/computerAPI.json')
        .then(res=>res.json())
        .then(data =>{
          mapPcParts(data)
          
          document.querySelector('.moboBrand').innerText =data.buildCost800[2].brand
          document.querySelector('.moboProduct').innerText =data.buildCost800[2].product
          document.querySelector('.moboCost').innerText = data.buildCost800[2].cost
          let currentMoboName = data.buildCost800[2].product
          let currentMoboPrice = data.buildCost800[2].cost
          // total(data.buildCost400[2].cost)
          moboCost = data.buildCost800[2].cost
          let moboImg= data.buildCost800[2].img
          document.getElementById('moboImg').src = `assets/css/${moboImg}`



          document.querySelector('.cpuBrand').innerText =data.buildCost800[0].brand
          document.querySelector('.cpuProduct').innerText =data.buildCost800[0].product
          document.querySelector('.cpuCost').innerText = data.buildCost800[0].cost
          document.querySelector('.clock').innerText = data.buildCost800[0].clockSpeed
          let currentCpuName = data.buildCost800[0].product
          let currentCpuPrice = data.buildCost800[0].cost
          cpuCost = data.buildCost800[0].cost
          // total(data.buildCost400[0].cost)
          let cpuImg= data.buildCost800[0].img
          document.getElementById('cpuImg').src = `assets/css/${cpuImg}`

          document.querySelector('.gpuBrand').innerText =data.buildCost800[1].brand
          document.querySelector('.gpuProduct').innerText =data.buildCost800[1].product
          document.querySelector('.gpuCost').innerText = data.buildCost800[1].cost
          let currentGpuName = data.buildCost800[1].product
          let currentGpuPrice = data.buildCost800[1].cost
          gpuCost = data.buildCost800[1].cost
          let gpuImg= data.buildCost800[1].img
          document.getElementById('gpuImg').src = `assets/css/${gpuImg}`





          document.querySelector('.ramBrand').innerText =data.buildCost800[3].brand
          document.querySelector('.ramProduct').innerText =data.buildCost800[3].product
          document.querySelector('.ramCost').innerText = data.buildCost800[3].cost
          document.querySelector('.ramClock').innerText=data.buildCost800[3].clockSpeed
          let currentRamName = data.buildCost800[3].product
          let currentRamPrice = data.buildCost800[3].cost
          ramCost = data.buildCost800[3].cost
          let ramImg= data.buildCost800[3].img
          document.getElementById('ramImg').src = `assets/css/${ramImg}`


          document.querySelector('.storageBrand').innerText =data.buildCost800[4].brand
          document.querySelector('.storageProduct').innerText =data.buildCost800[4].product
          document.querySelector('.storageCost').innerText = data.buildCost800[4].cost
          let currentStorageName = data.buildCost800[4].product
          let currentStoragePrice = data.buildCost800[4].cost
          storageCost = data.buildCost800[4].cost
          let storageImg= data.buildCost800[4].img
          document.getElementById('storageImg').src = `assets/css/${storageImg}`

          
          document.querySelector('.psuBrand').innerText =data.buildCost800[5].brand
          document.querySelector('.psuProduct').innerText =data.buildCost800[5].product
          document.querySelector('.psuCost').innerText = data.buildCost800[5].cost

          let currentPsuName = data.buildCost800[5].product
          let currentPsuPrice = data.buildCost800[5].cost
          psuCost = data.buildCost800[5].cost
          let psuImg= data.buildCost800[5].img
          document.getElementById('psuImg').src = `assets/css/${psuImg}`

          
          document.querySelector('.caseBrand').innerText =data.buildCost800[6].brand
          document.querySelector('.caseProduct').innerText =data.buildCost800[6].product
          document.querySelector('.caseCost').innerText = data.buildCost800[6].cost
          let currentCaseName = data.buildCost800[6].product
          let currentCasePrice = data.buildCost800[6].cost
          let caseImg= data.buildCost800[6].img
          caseCost = data.buildCost800[6].cost
          document.getElementById('caseImg').src = `assets/css/${caseImg}`

          document.querySelector('.coolerBrand').innerText =data.buildCost800[7].brand
          document.querySelector('.coolerProduct').innerText =data.buildCost800[7].product
          document.querySelector('.coolerCost').innerText = data.buildCost800[7].cost
          let currentCoolerName = data.buildCost800[7].product
          let currentCoolerPrice = data.buildCost800[7].cost
          coolerCost = data.buildCost800[7].cost
          let coolerImg= data.buildCost800[7].img
          document.getElementById('coolerImg').src = `assets/css/${coolerImg}`



          saved(currentMoboName,currentCpuName,currentRamName , currentCaseName, currentCoolerName, currentPsuName, currentGpuName)
        })

    }
  })
})