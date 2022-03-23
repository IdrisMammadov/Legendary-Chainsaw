/*let price = 100
let tax = 20
let priceTax = price * tax
console.log("Fiyat:", price,"KDV:", tax,"Total:",  priceTax)

let counter = 500
counter += 1
console.log(counter)

counter++
console.log(counter);

counter--
console.log(counter)

counter*=10
console.log(counter)

console.log(2**4)

console.log(Math.round(2.2))
/*---------------------------------------------------------------------------------------------------- */

/*userName= "user"
console.log(Boolean(userName))

let a;
Boolean(a);

---------------------------------------------------------------------------------------------------------*/

/*let price = 100;
let userName= "İdris";
let money = true;

 console.log(typeof(price));
 console.log(typeof(userName));
 console.log(typeof(money));


let number = "11"
number=parseInt(number);
console.log("number:", parseInt(number), typeof(number));


let number1 = "11px"
number1=parseInt(number1);
console.log("number1:", parseInt(number1), typeof(number1));

let number2 = "11.5px"
number2=parseFloat(number2);
console.log("number2:", parseFloat(number2), typeof(number2));


let number3 = 55;
number3= number3.toString()
console.log(number3, typeof(number3));

-------------------------------------------------------------------------------------------------------------*/

/*let userName = "Idris"
let Domain = "IdrisMammadov.com"
let email = userName + "@" + Domain
console.log("Merhaba", userName, "sitemize hosgeldiniz", " Mail adresi:" , email);

let info =`Merhaba ${userName} sitemize hosgeldin email adresi ${email}
Mail adresinin uzunlugu: ${email.length}
Gunun saat bilgis: ${new Date().getHours()}
YIL BİLGİSİ ${new Date().getFullYear()}`
console.log(info);
-------------------------------------------------------------------------------------------------------------*/

/* let email= "idrismammadov236@gmail.com"
let firstName = "Idris"
let surname = "mammadov"

console.log(email.length);
console.log(firstName[0]);
console.log(surname.charAt(1));

firstName= firstName.toUpperCase()
console.log(firstName);

firstName= firstName.toLowerCase()
console.log(firstName);

console.log(email.search("@"));
console.log(email[15]);

console.log(email.slice(0,10));

let DOMAİN =email.slice(email.search("@"));
console.log(DOMAİN);

 console.log(DOMAİN.slice(1, DOMAİN.indexOf(".")) (it works in terminal)

email= email.replace("gmail.com", "outlook.edu.tr");
console.log(email);

email.includes("@"); //true

email.endsWith("tr") //true


 surname =`${surname[0].toUpperCase()}${surname.slice(1)}`
console.log(surname);


---------------------------------------------------------------------------------------------------------------*/


/*  console.log(document.location.hostname);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.location.pathname);
console.log(document.baseURI);

document.body.style.backgroundColor= "aqua"  


----------------------------------------------------------------------------------------------------------------*/

/*
//let title = document.getElementsByTagName("h2");
//console.log(title.innerHTML= "Degisti");

let title = document.getElementById('title');
console.log(title.innerHTML);


let link = document.querySelector("ul#list>li>a");
console.log(link.innerHTML= "Link bilgisi değişti");
link.style.color = "red"
link.classList.add ("class1")


-------------------------------------------------------------------------------------------------------------------*/


/* let fullName = prompt("Please write your  fullname");
console.log(fullName);

let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red"> ${fullName}  </small> `      

var isim = prompt("Adınız nedir?");
console.log("Merhaba, " + isim);

----------------------------------------------------------------------------------------------------------------------*/


/* let item = document.querySelector("ul#list2>li:last-child")
console.log(item);
document.querySelector("ul#list2>li:last-child").innerHTML ="Degisti"


let ulDOM = document.querySelector("ul#list2");
let liDOM =document.createElement("li");

liDOM.innerHTML = "Kendi yaratdiğim li"
//ulDOM.append(liDOM);  //alt tarafa alıyor
ulDOM.prepend(liDOM)    //üst tarafa alıyor

----------------------------------------------------------------------------------------------------------------------- */

/* let greeting = document.querySelector("#greeting");
greeting.classList.add("Text-Primary");
greeting.classList.add("first-class", "second-class")
greeting.classList.remove("first-class");
console.log(greeting.classList);

------------------------------------------------------------------------------------------------------------------------- */

/* let price = "100"
let user = " Idris"

console.log("==: ",  price==1);
console.log("==: ",  price==100);

console.log("===: ",  price===1);
console.log("===: ",  price===100);

console.log(price !=1)

console.log(price<100)
console.log(price<=100)


console.log(price >100)
console.log(price>=100)

price = 0
console.log(price > 100 && user != "guest");

console.log(price > 100 || user != "guest");


user= "guest"
price= 1
console.log(price > 0 && !user == "guest");

--------------------------------------------------------------------------------------------------------------------------- */

/* let userName = prompt("Please LogIn");
if(userName.length > 0) {
console.log(`Kullanici bilgiiz: ${userName}`)
}else{
    console.log("Bilgi yok")
}
--------------------------------------------------------------------------------------------------------------------------- */

/* let userName = prompt("Kullanici adiniz:");
let age = prompt("Yasiniz:");

if(userName && age>=18){
    console.log("You can get licence")
}
    else if(!userName){
        console.log("Kullaici adiniz yok");
    }
        else if( !(age>=18) ){
            console.log("Yas bilginiz yok ve ya 18 yasinda kucuksunuz")
        }
------------------------------------------------------------------------------------------------------------------------------ */

/*let userName = prompt("Kullanici adinizi girin:");
let info = document.querySelector("#greeting");

info.innerHTML = `${userName.length>0 ?  userName:"Kullaici adiniz bulunamdadi :("} `

--------------------------------------------------------------------------------------------------------------------------------- */


/* const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let examGrade = prompt("Puani Girin")
let textInfo;
let info = document.querySelector("#greeting")

if (examGrade >= 0 && examGrade <= 100) {
    // tum if yapilari buraya gelsin
    textInfo = SMILE
    info.classList.add('text-primary')
    if (examGrade >= 90) {
        textInfo += " AA"
    } else if (examGrade >= 85) {
        textInfo += " BA"
    } else if (examGrade >= 80) {
        textInfo += " BB"
    } else if (examGrade >= 75) {
        textInfo += " CB"
    } else if (examGrade >= 70) {
        textInfo += " CC"
    } else if (examGrade >= 65) {
        textInfo += " DC"
    } else if (examGrade >= 60) {
        textInfo += " DD"
    } else if (examGrade >= 50) {
        textInfo += " FD"
    } else if (examGrade < 50) {
        textInfo = `${FROWN} FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }
} else {
    textInfo = "Bilgiler Dogru Degil"
}


info.innerHTML = `${textInfo} -> ${examGrade}`

----------------------------------------------------------------------------------------------------------------------------------------- */

 /*function greeting (firstName ="Idris", lastName="Mammadov"){
     console.log(`Merhaba ${firstName} ${lastName} ` )
}
   greeting()




   function greeting2(firstName, lastName){
       let info = `Merhaba ${firstName} ${lastName}`
       return info;
   }
   let greetingInfo =greeting2("Linux", "Ubuntu")
   console.log(greetingInfo)




   function domWrite(id, info){
       let domObject= document.querySelector(`#${id}`)
       domObject.innerHTML=info
   }

let htmlINFO = <span style="color:red" > color  </span>
domWrite("greeting", htmlINFO)


------------------------------------------------------------------------------------------------------------------------------------------- */

/*  const helloFuncV1 = (firstName) =>{console.log(`Merhaba ${firstName}`)}
helloFuncV1("JavaS")


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("Ubuntu")


const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("Ubuntu", "Linux")


const helloFuncV4 = (firstName, lastName) => {
    let info =`Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info;
}
helloFuncV4("Windows", "MacOS")

------------------------------------------------------------------------------------------------------------------------------------------------- */

/* let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("tiklandi")
   // console.log(this.innerHTML = "tiklandigi icin degisti")
   this.style.color = "red" ?   this.style.color = "green" : this.style.color = "blue"
}

---------------------------------------------------------------------------------------------------------------------------------------------------- */

/* let counter = 0;
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decraseDOM = document.querySelector("#decrase")

counterDOM.innerHTML=counter

increaseDOM.addEventListener("click",clickEvent )
decraseDOM.addEventListener("click",clickEvent )
function clickEvent(){
    console.log(this.id)
    if (this.id == "increase"){
        counterDOM.innerHTML=counter+=1
    }else{
        counterDOM.innerHTML=counter-=1
    }
}

---------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* const promptName = prompt("Lütfen adınızı giriniz.")
document.querySelector("#userName").innerText = promptName.toUpperCase()



function showCurrentDayAndTime() {
    const date = new Date()
    let [hour, minute, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()]
    let dayName = " "
    let turkishDay = (day + 7) % 7
    switch (turkishDay) {
        case 1:
            dayName = "pazartesi"
            break;

        case 2:
            dayName = "Sali"
            break;

        case 3:
            dayName = "çarşamba"
            break;

        case 4:
            dayName = "perşembe"
            break;

        case 5:
            dayName = "Cuma"
            break;

        case 6:
            dayName = "cumartesi"
            break;

        case 7:
            dayName = "pazar"
            break;
    }

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    setTimeout(showCurrentDayAndTime, 1000);

    const infoTimer = `${hour}:${minute}:${second}-${dayName}`
    document.querySelector("#myTime").innerText = infoTimer.toUpperCase()
}
showCurrentDayAndTime();

----------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/*  localStorage.setItem('myCat', 'keddy')
localStorage.getItem('myCat')

let user = {userName:" Idris", isActive: true}
console.log(user);

localStorage.setItem('userInfo', JSON.stringify(user))
let userInfo =localStorage.getItem('userInfo')
userInfo= JSON.parse(userInfo)
console.log(userInfo)


let itmes = [1,2,3,4,user]
localStorage.setItem('numbers', itmes)
localStorage.getItem('Numbes', JSON.stringify(itmes))

----------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*  let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('sumbit', formSumbit)

function formSumbit(event){
event.preventDefault()
    console.log("islem gerceklesti")
}

let scoreInputDOM=document.querySelector("#score")
console.log(scoreInputDOM.value)
localStorage.setItem('score', scoreInputDOM.value)

------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* let domain = "Idris"
let age = "17"
let items = [1,2,3, domain, age]

let emptyArray = []

console.log(items.length)
document.querySelector("#info").innerHTML=items.length

console.log(items[3])
console.log(typeof(items))

---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* let items = [10,20,30,40]
items.push(50)
console.log(items)

items.unshift(0)
console.log(items)

items.pop()
console.log(items)
let lastItem = items.pop()
console.log(lastItem, items)

items [0]= 5
console.log(items)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*  let items = [1,2,3,4,5]

let femaleUser=["Ayse", "Esma", "Zeyn"]
let maleUser=["Anil","Ahmet","Azer"]

items.unshift(femaleUser)
items.push(maleUser)
console.log(items)

console.log(items.length)
console.log(items[0].length)
console.log(items[0][0])

let newItems = items.splice(1,5)
console.log(newItems)

items.unshift("Lorem")
items.push("ipsum")
console.log(items.indexOf( "Lorem"))

let copyItem = items;
console.log(items)

copyItem.pop()
console.log("copyitem", copyItem)
console.log("item", items)

copyItem = items.slice()
copyItem.pop()
console.log("copyitem", copyItem)
console.log("item", items)

let allUser =[...femaleUser, ...maleUser]
console.log(allUser)


let allUser =[...femaleUser, ...maleUser]
console.log(allUser.toString())
console.log(allUser.join("***"))

allUser.splice(allUser.length,0,"Melisa")
console.log(allUser)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
//for(let index=0;  index<10; index++){
//console.log(index)
//}

let numbers= ["i","b","c"]
const userListDOM= document.querySelector("#userlist")

for(let index=0; index<numbers.length;index++){
    const liDOM= document.createElement('li')
    liDOM.innerHTML=numbers[index]
    userListDOM.appendChild(liDOM)
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* for(let counter=0; counter<10; counter++){
  //  if (counter===5){break}
 //   console.log(counter)
//}

////for(let counter=0; counter<10; counter++){
  //if (counter===5){continue}
      //console.log(counter)
  //}

//const nameList= ["idris", "ahmet", "huseyn","avrin"]
//const name_list =document.querySelector('#userlist')
//for(let index=0; index< nameList.length; index++){
//if(nameList[index] == "huseyn"){break}
//const ulLİst=document.createElement('li')
//ulLİst.innerHTML=nameList[index]
//name_list.append(ulLİst)
//}


const nameList= ["idris", "ahmet", "huseyn","avrin"]
const name_list =document.querySelector('#userlist')
for(let index=0; index< nameList.length; index++){
if(nameList[index] == "huseyn"){continue}
const ulLİst=document.createElement('li')
ulLİst.innerHTML=nameList[index]
name_list.append(ulLİst)
}
//


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* let counter= 0;
//while(counter<10){
//console.log(counter)    
//counter++
//}
let userName;

while(userName !=""){
    userName=prompt("kkks")
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*  const  products = ["Laptop","mobile", "glass", "book"]
//products.forEach((products, index, array) => console.log(products, index, array) )

//products.forEach((products, index, array) => console.log(array[index]) )
//products.forEach((products, index, array) => console.log(array[index]= products + " 222" ))
//products.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )
//console.log(products)






    const userListDOM= document.querySelector("#userlist")
    products.forEach(item => {
        const liDOM= document.createElement('li')
    liDOM.innerHTML=item
    userListDOM.appendChild(liDOM)
    })

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    

/*  const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
const newProducts = products.filter(item => item.length>5)
console.log(newProducts)


const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
  ]

  const activeUser= USERS.filter(user => user.isActive === true)
  console.log(activeUser)

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

 /* const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]
  //const newUser= USERS.map(user => user.toLowerCase())
  //console.log(newUser)

  const USERS_OBJ = USERS.map( item =>
    {
    return {
        userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }
} 
 )
 console.log(USERS_OBJ)



 const USERS_OBJ = USERS.map( item => (
    {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
  )
)

console.log(USERS_OBJ)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*  let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))

let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

// Object olusturmak
let item3 = {}
let item4 = new Object()

console.log("object1", object1)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*  let Laptop = {
    Brand: "Apple",
    Model: "MacBook",
    Weight: "2kg",
}
console.log(Laptop)
console.log(Laptop.Brand)


Laptop.Brand = "DELL"
console.log(Laptop)

Laptop.Version = "15.14.13"
console.log(Laptop)


keys= Object.keys(Laptop)
console.log(keys)
console.log(Object.keys(Laptop))

keys.forEach(keyInfo => { 
    console.log(keyInfo)
    console.log(Laptop[keyInfo])
  })


  console.log(
    Object.values(laptop1)
  )

  let values = Object.values(laptop1)

values.forEach(value => { 
  console.log("value: ", value)
})

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4], 
    isActive: true,
    shortName: function() {
      return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
  };
  
  console.log(user1)
  console.log(user1.shortName)

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

  
  /*let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1", 
    serverName: "kodluyoruz.org"
  }
  
   //let username = settings.userName
//console.log(userName)
let{userName:user, password,isActive,ip:serverIp,serverName}=settings
console.log(user, password,isActive,serverIp,serverName)
console.log(settings)
console.log(user)


let {userName:userName2, password:password2, isActive:isActive2, ... newSetings}=settings
console.log(userName2,password2, isActive2, newSetings)= settings

let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/* let product;

try{
product.forEach(item => console.log(item))
} catch( error){
    product = [1,2,3,4]
    product.forEach(item => console.log(item))


}
console.log("Hata yonetimi duzgun calisyor")

let info = "idris"
console.log(info)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* fetch("data/settings.json").then(
    response => response.json()
  ).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
  })
  
  let userListDOM = document.querySelector("#userList")
  
  // API uzerinden veri cektik
  fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
  ).then(responseJson => {
    responseJson.forEach(item => {
      let liDOM = document.createElement('li')
      liDOM.innerHTML = item.title
      userListDOM.appendChild(liDOM)
    })
  })
  
fetch("data/settings.json").then(
    response => response.json()
  ).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
  })
  
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */