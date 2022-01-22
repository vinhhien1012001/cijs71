

// console.log("Start");

// setTimeout(() => {
//     console.log("Hoc bai");
// }, 2000)

// console.log("Di ngu")



//Promise
//resolve cho thanh cong, reject cho that bai
//pending: la chua co gia tri, cho doi
//fulfilled: da thuc hien thanh cong
//rejected: that bai
//Promise.then: phuong thuc truy cap gia tri 
// let coNuoc = true;

// let myPromise = new Promise((resolve, reject) =>{
//     if (coNuoc===true){
//         resolve("CO nuoc");
//     }
//     else {
//         reject("Khong co nuoc")
//     }
// });

// myPromise.then((value) =>{
//     console.log(value)
//     return "Nau com";
// }).then((val2) =>{
//     console.log(val2)
// }).catch((error) =>{
//     console.log(error)
// })

// console.log("Di quet nha")

// function getUser(){
//     //ham fetch bat dong bo
//     return fetch("https://reqres.in/api/users?page=2")
//     .then((res) => res.json())
//     .then((data) => data.data)
//     .catch((error) =>{
//         console.log(error)
//         alert("Loi roi ban oi")
//     })
// }

// getUser().then(user => {
//     renderUser(user);
// })

// const rootEl=document.querySelector("#root");

// function renderUser(users) {
//     let usersHtml = "";
//     for (let user of users) {
//         usersHtml+= `
//             <div>
//                 <img src="${user.avatar}" />
//         `
//     }
// }




// async function  getData(){
//     //fetch tra ve promise
//     try{
        
//         const request = await fetch("https://reqres.in/api/users?page=2")
//         const response = await request.json();
//         return response.data
//     } catch(error) {
//         console.log(error)
//     }
// }




// const data= getData();

// data.then(val => {
//     console.log(val)
// })

// const fetchData = async () => {

// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//  }

// async function fetchData(value, callback) {
//    await callback(value);
//    return value
// }

// async function main() {
//     console.time("main");
//     const a = await fetchData(10000,sleep);
//     const b = await fetchData(3000,sleep);
//     const c = await fetchData(4000,sleep);
//     console.timeEnd("main");
// }

// async function main2(){
//     const promies = await Promise.all[
//         fetchData(10000,sleep),
//         fetchData(2000,sleep),
//         fetchData(0,sleep)
//     ]

//     console.timeEnd("main2")
// }

// main()
// main2()


//CLASS
let person = {
    firstName: "Minh",
    lastName: "Quang",
    //method
    getName: function() {
        console.log(this);
    },
    child: {
        childName: "Chile Name",
        age: 20,
        childMethod: function() {
            console.log(this)
        }
    }
}


// let animal = {
//     name: "1",
//     age: 20,
// }


// let lambor = {
//     name: "Lamborghini SVJ 63",
//     color: "Yellow",
//     weight: 1200,
// }

//Ham` Tao
function Car(name, color, weight){
    this.name=name;
    this.color=color;
    this.weight=weight;

    this.run = function() {
        console.log("run",this)
        
        const test = () => {
            console.log("test",this)
        }
        // function test() {
        //     console.log("test", this)
        // }

        test();
    }
}

// let ferrari = new Car("Ferrari 488GTB", "Red", 1300);
// let audi = new Car("au","white",1000)
// console.log(ferrari);


// function a(){

// }

// class SmartPhone{
//     constructor(name,color,weight) {
//         this.name=name;
//         this.color=color;
//         this.weight=weight;
//     }

//     takePhoto() {
//         console.log(this)
//     }
// }

// class SamSung extends SmartPhone{
//     constructor(name, color,weight,model) {
//         super(name,color,weight);
//         this.model=model;
//     }
// }

// const samsungS7 = new SamSung("S7", "black", 200, "A")

// const Iphone6=new Iphone("Iphone6","Red",600);


// class Dongho{
//     constructor(timer) {
//         this._timer=timer;
//         this.$clock
//     }

//     render() {

//     }
// }

// const _lstClock = new Clock(10);


// let a = { 
//     fullName: "A",
//     age: 1,
// };

// const b= {
//     ...a
// }
// console.log("B",b);
// b.fullName="B"
// console.log("B", b);
// console.log("A", a);

// let c = [1,2,3];
// const d = [...c];
// d.pop();
// console.log("c",c);
// console.log("d",d);

// const x=23;
// x=16;
// console.log(x);

const hello = () => {
    console.log("Hello")
}

const numbers= [1,6,2,9,8,4,7]

function evenNumber(arr = []){
    return arr.filter(num => num%2===0)
}

const evenNum = evenNumber(numbers);
console.log(evenNum)