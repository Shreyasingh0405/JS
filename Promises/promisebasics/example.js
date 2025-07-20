// const cart = ["shoes","pant","kurta"]

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId) 
// }  )//orderId

//   //asynchronous and dependent issue is inversion of control


//   const promise = createOrder(cart)   //this line execure returns empty object with some property data with undefined
//                                        // data:undefined

// .then(function(orderId){
//     proceedToPayment(orderId) 
// }  )

// const GITHUB_API = "https://github.com/Shreyasingh0405?tab=overview&from=2025-06-01&to=2025-06-07"
// const user = fetch(GITHUB_API)
// console.log(user)



// const URL = "https://jsonplaceholder.typicode.com/posts/1"
// const user = fetch(URL)
// console.log(user)
// user.then(function(data){
//     console.log(data)
// })



//allsettled returns object

const p1 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 fail"), 3000);

  });
  
  const p2 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P2 Success"), 1000);
    setTimeout(() => reject("P2 Fail"), 1000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000);
  });
  
  Promise.race([p1, p2, p3])
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err)});

      Promise.allSettled([p1, p2, p3])
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err)});

    Promise.all([p1, p2, p3])
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err)});

  Promise.any([p1, p2, p3])
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
      console.log(err.errors)
    });
  

    //race :- first settled value either fail or success

//aggregate error


//     settled (Got the result)
//     /                    \
// resolve                  reject
// (success, fulfilled)   (failure, rejected)




const p11 = new Promise((resolve,reject)=>{
  setTimeout(()=>(resolve("succ of p11"),1000))
})

const p22 = new Promise((resolve,reject)=>{
  setTimeout(()=>(reject("failure of p22"),5000))
})
Promise.any([p11,p22])
.then((ress)=>{
  console.log(ress)
})
.catch((err)=>{
  console.log(err)
})