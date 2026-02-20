// console.log("starting app.js");
// function login(email,pass,cb){
//     setTimeout(()=>{
//         cb({userName:email,isLoggedIn:true,message:"Login Succesfull" })
//     },3000);

// }
// login ("user@example.com","pass123",(data)=>{
//     console.log(data);
//     getVideosList(data.userName,(videos)=>{
//         console.log(videos);
//         getVideosDetailes()
//     })
// })

// promis in java  script
let mypromise= new Promise(( res,rej)=>{
    // let data= "this is my data getting fom somewhere";
    if(data){
          res(data);
    }
    else{
        rej("data not found")
    }
});
console.log(mypromise)