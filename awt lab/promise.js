

var p1=new Promise((resolve,reject)=>
{
    setTimeout(resolve(2),2000)
})
function firstProm(value){
    console.log(value)
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(value*2),2000)
    })

}
function secondProm(value){
    console.log(value)
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(value*2),2000)
    })

}
function thirdProm(value){
    console.log(value)
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(value*2),2000)
    })

}

p1.then((value)=>firstProm(value)).then((value)=>secondProm(value)).then((value)=>thirdProm(value)).then((value)=>{
    console.log(value)
})