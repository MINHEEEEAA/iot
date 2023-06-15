
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC3Uf68-P29AQTXMZXbeK4oaSmaeP1bWk4",
    authDomain: "esp32-doan-b1a85.firebaseapp.com",
    databaseURL: "https://esp32-doan-b1a85-default-rtdb.firebaseio.com",
    projectId: "esp32-doan-b1a85",
    storageBucket: "esp32-doan-b1a85.appspot.com",
    messagingSenderId: "649611984006",
    appId: "1:649611984006:web:3258489002899dfdd92507"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  //get temperature from firebase
database.ref("/project/Temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("t1").innerHTML = temp;
});

database.ref("/project/hum").on("value", function(snapshot){
    var temp1 = snapshot.val();
    document.getElementById("h1").innerHTML = temp1;
});

database.ref("/project/pow").on("value", function(snapshot){
    var temp1 = snapshot.val();
    document.getElementById("p1").innerHTML = temp1;
});

var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
btnOn.onclick = function(){
    document.getElementById("denId_01").src = "./img/light_bulb.png"

    firebase.database().ref("/project").update({
        "relay1" : 1
    });
}

btnOff.onclick = function(){
    document.getElementById("denId_01").src = "./img/ledoff.png"
    firebase.database().ref("/project").update({
        "relay1" : 0
    });
}

var btnOn = document.getElementById("btnOnId_02");
var btnOff = document.getElementById("btnOffId_02");
btnOn.onclick = function(){
    document.getElementById("denId_02").src = "./img/light_bulb.png"

    firebase.database().ref("/project").update({
        "relay2" : 1
    });
}

btnOff.onclick = function(){
    document.getElementById("denId_02").src = "./img/ledoff.png"

    firebase.database().ref("/project").update({
        "relay2" : 0
    });
}

var btnOn = document.getElementById("btnOnId_03");
var btnOff = document.getElementById("btnOffId_03");
btnOn.onclick = function(){
    document.getElementById("denId_03").src = "./img/light_bulb.png"

    firebase.database().ref("/project").update({
        "relay3" : 1
    });
}

btnOff.onclick = function(){
    document.getElementById("denId_03").src = "./img/ledoff.png"

    firebase.database().ref("/project").update({
        "relay3" : 0
    });
}

var btnOn = document.getElementById("btnOnId_04");
var btnOff = document.getElementById("btnOffId_04");
btnOn.onclick = function(){
    document.getElementById("denId_04").src = "./img/light_bulb.png"

    firebase.database().ref("/project").update({
        "relay4" : 1
    });
}

btnOff.onclick = function(){
    document.getElementById("denId_04").src = "./img/ledoff.png"

    firebase.database().ref("/project").update({
        "relay4" : 0
    });
}



//sliderNgang
// var sliderNgang = document.getElementById("sliderNgangId");
// var bulb01 = document.getElementById("bulb01");
// sliderNgang.oninput = function(){
//     document.getElementById("sliderNgangValue").innerHTML = sliderNgang.value;
//     bulb01.style.opacity = sliderNgang.value/10;
// };

//sliderTron 01--------
// function initial_sliderTron_01(data){
//     $("#sliderTronId_01").roundSlider({
//         sliderType: "min-range",
//         width: 22,
//         radius: 100,
//         readOnly: false,
//         value: data,
//         circleShape: "half-top",
//         lineCap: "round",
//         editableTooltip: false,
//         max: 100,
//         svgMode: true,
//         rangeColor: "red",
//         change: function (args){
//             var obj = $("#sliderTronId_01").data("roundSlider");
//             $('#sliderTronId_02').roundSlider('setValue',obj.getValue());
//         }
//     });
// };
// initial_sliderTron_01(50); //Start first time
// //Change: function - METHOD 2--------
// // var sliderTron_01 = document.
// getElementById("sliderTronId_01");
// //sliderTron_01.addEventListener("mousemove"),
// function(){
//     //var obj obj = $("#sliderTronId_01").
//     data("roundSlider");
//     //$('#sliderTronId_02').roundSlider('setValue',
//     obj.getValue();
// };

//Slider Tron2----------
// function initial_sliderTron_02(data){
//     $("#sliderTronId_02").roundSlider({
//         sliderType: "min-range",
//         width: 22,
//         radius: 100,
//         readOnly: true,
//         value: data,
//         circleShape: "half-top",
//         lineCap: "round",
//         editableTooltip: false,
//         max: 100,
//         svgMode: true,
//         rangeColor: "#2cc4d3",
        
//     });
// };