function start() {
  // alert("Start");
  var computerInput = ['Rock','Paper','Scissor'];
  var item = computerInput[(Math.random()*computerInput.length)|0];
  alert(item);
  var userInput = prompt("Hey !!Choose Rock,Paper,Scissor:","Rock,Paper,Scissor");
  // var x = 'Rock';
   alert(userInput[0]);
  if(userInput[0] == "R")
  if(userInput == "Rock" || userInput == "Paper" || userInput == "Scissor"){
      // alert("checking");
      document.getElementById("option").innerHTML="Your Choice is :" + userInput;
  }else{
      alert("Check your Option!!!")
  }
  if(userInput == item){
    alert("checking computer input");
    document.getElementById("computer").innerHTML="Computer Choice is :" + item;
    document.getElementById("result").innerHTML="Result : Tie!!";
  }else if(userInput == "Rock" &&  item == "Scissor"){
    //  alert("Rock - Scissor");
     document.getElementById("computer").innerHTML="Computer Choice is :" + item;
     document.getElementById("result").innerHTML="Result : You are Win!!";
  }else if(userInput == "Rock" && item == "Paper"){
    // alert("Rock - Paper");
    document.getElementById("computer").innerHTML="Computer Choice is :" + item;
    document.getElementById("result").innerHTML="Result : Lose!!!!";
  }else if(userInput == "Paper" && item == "Rock"){
    // alert("Paper- Rock");
    document.getElementById("computer").innerHTML="Computer Choice is :" + item;
    document.getElementById("result").innerHTML="Result : You are Win!!!!";
  }else if(userInput == "Paper" && item == "Scissor"){
    // alert("Paper -Scissor");
    document.getElementById("computer").innerHTML="Computer Choice is :" + item;
    document.getElementById("result").innerHTML="Result : Lose!!!!";
  }else if(userInput == "Scissor" && item == "Rock"){
    // alert("Scissor - Rock");
    document.getElementById("computer").innerHTML="Computer Choice is :" + item;
    document.getElementById("result").innerHTML="Result : Lose!!!!";
  }else if(userInput == "Scissor" && item == "Paper"){
    // alert("Scissor - Paper");
    document.getElementById("computer").innerHTML="Computer Choice is :" + item;
    document.getElementById("result").innerHTML="Result : You are  win!!!!";
  }else{
    alert("null");
  }
}
function restart(){
  window.location.assign("file:///home/aiesys/Desktop/Project/RPSgame/Index.html");
}
function about(){
  alert("about");
  document.getElementById("instructions").innerHTML=
  "The Rules. Rock, Paper, Scissors is a game for two players typically played using the players' hands. The two players each make a fist with one hand and hold the other open, palm upward.";
}