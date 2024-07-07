// // // // // console.log("ssd");

// // // // // setTimeout(()=>{
// // // // //     console.log("Output");
// // // // // }, 2000)

// // // // // console.log("kbd");

// // // // // function sum(a,b){
// // // // //     console.log(a+b);
// // // // // }

// // // // // function callBackFunction (a,b,functionThatWePass){
// // // // // functionThatWePass(a,b)
// // // // // }

// // // // // callBackFunction(1,2,sum)

// // // // function getData(dataId, getNextData) {
// // // //   setTimeout(() => {
// // // //     console.log("data", dataId);
// // // //     if (getNextData) {
// // // //       getNextData();
// // // //     }
// // // //   }, 2000);
// // // // }

// // // // getData(33, () => {
// // // //   getData(22, () => {
// // // //     getData(11);
// // // //   });
// // // // });

// // // // let getPromise = ()=>{
// // // //     return new Promise((resolve, reject) => {
// // // //         console.log("checking promise");
// // // //         resolve("success")
// // // //       });
// // // // }

// // // // let promise = getPromise()
// // // // promise.then(()=>{
// // // //     console.log("Promise has been fulfilled");
// // // // })

// // // let getPromise = ()=>{
// // //     return new Promise((resolve, reject) => {
// // //         console.log("checking promise");
// // //         reject("Failure")
// // //       });
// // // }

// // // let promise = getPromise()
// // // promise.catch((err)=>{
// // //     console.log("Promise has been rejected", err);
// // // })

// // function asyncFunction() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("data1");
// //       resolve("success");
// //     }, 4000);
// //   });
// // }

// // function asyncFunction2() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("data1");
// //       resolve("success2");
// //     }, 4000);
// //   });
// // }

// // let p2 = asyncFunction2();
// // p2.then((res) => {
// //   console.log("Fetching Data");
// //   let p1 = asyncFunction();
// //   p1.then((res) => {
// //     console.log("Fetching data1....");
// //   });
// // });

// // async function hello(){
// //     console.log(hello);
// // }
// // hello()

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData(){
//     await api()
//     await api()
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData(){
await getData(1)
await getData(2)
await getData(3)
await getData(4)
}

//IIFE

( async function getAllData(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    })()
    
