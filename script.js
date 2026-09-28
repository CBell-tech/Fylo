  alert("you are welcome");
  let name = "charles"
  console.log ('name');

  let dupe = '5';
  let kiddy = '6';
  console.log(dupe+kiddy);

  let fruit = ['banan, pawpaw, orange'];
  let nam = ['bolu, ade, tola'];
  console.log(fruit);
  console.log(nam);

  let dele = "16";

if (dele >= 18 ){
    console.log("you ar an adult");
}
else{
    console.log( "you are a minor");
}

let total = 5+2
console.log (total);

let titl = 'fylo';
console.log("titl");


function changeText(){
    document.getElementById("myTitle").textContent = "you are in";
}

function changeTex(){
    document.getElementById("submitBtnt").textContent = "submited";
}




     function  helloMell(){
  document.getElementById( "submitBtn").textContent = "submited";
    }



let score = 100;
if (score >=50){
    console.log("pass");
    console.log("congrat");
    
} 
//Toggle btn
//Get the toggle button
const modeToggle = document.getElementById("mode-toggle");

//Toggle function
function toggleMode(){
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "mode", 
        document.body.classList.contains("dark-mode")
     ? "dark" : "light" );
}


//check stored preference
if (localStorage.getItem("mode") === "dark"){
    document.body.classList.add("dark-mode");
} 

//Add event listener to the button
modeToggle.addEventListener("click", toggleMode);




