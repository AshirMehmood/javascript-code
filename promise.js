// let p1=new Promise(function(resolve,reject){
// console.log("i am an promise1 in promise")
// setTimeout(function(){
//     console.log("Hello in 5 seconds");
// },5000)
// resolve(56)
// })

// // these two promises will run in paraller

// let p2 = new Promise((resolve,reject)=>{
// console.log("promise is pending");
//     setTimeout(()=>{
//         console.log("I am a promise and I am rejected");
//         // resolve(true)
//         reject(new Error("I am rejected"))
//     },5000)
// })

// p1.then((value)=>{
//     console.log(value);
// })
// // p2.catch((error)=>{
// //     console.log("some error occured in p2");
// // })
// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })


// // promise chaining
// let pr1=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("Resolved after 2 seconds");
// resolve(56);
// },2000)
// })
// pr1.then((value)=>{
//     console.log(value);
//     //* upon pr1 completion pr2 will run which is inside pr1 then statement
//     let pr2=new Promise((resolve,reject)=>{
//  resolve("Promise pr2")
 
//     })
//     return pr2; 
// }).then((value)=>{
//     console.log(value,"we are done")
// })
 
//* re writing loadScript function using promises 
const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
let script=document.createElement("script");
script.type="text/javascript"
script.src="https://www.youtube.com/iframe_api"
document.body.appendChild(script)
script.onload=()=>{
    resolve(1)
}
script.onerror=()=>{
    reject(0)
}
})
}
//* calling loadScript and using then to see if error occurs or not
let p1=loadScript("https://localhost:3000/promise.js")
p1.then((value)=>{
    console.log(value);
},(error)=>{
    console.log("Sorry we are having error in loading your script");
})

