function getPincode(citycode){
    return new Promise((resolve,reject)=>{
        console.log("pincode of "+citycode);
        setTimeout(()=>{
            resolve({
               citycode:"Hyd",
               pincode:500060
            });
        },1000)
    })
}

function getCityname(pin){
    return new Promise((resolve,reject)=>{
        console.log("get city name");
        setTimeout(()=>{
            resolve("hyderabad");
        },2000)
    });
}

function getWeather(cityname){
    return new Promise((resolve,reject)=>{
        console.log("get weather details ");
        setTimeout(()=>{
            resolve("Sunny with temperature=35 C"); 
        },3000)
    });

}
async function myFunction(code) {
    pin=await getPincode(code)
    console.log(pin)
    name=await getCityname(pin)
    w=await getWeather(name)
    console.log("weather of "+name+" is "+w);
  }
  myFunction("Hyd")