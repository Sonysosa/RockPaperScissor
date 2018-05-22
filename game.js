function computerChoice(){
  var computerInput = ['rock','paper','scissor'];
  var item = parseInt(Math.random()*3);
  // alert(computerInput[item]);
  console.log(computerInput[item])
  return computerInput[item];
  }
  function userCheck(user) {
    let u=user.toLowerCase();
    if(u[0] == "r" && u!== 'rock'){
      return[false,'do you mean rock!!'];
    }else if(u[0] == "p" && u!== 'paper'){
      return[false,'do you mean paper!!'];
    }else if(u[0] == "s" && u!== 'scissor'){
      return[false,'do you mean scissor!!'];
    }else if(u == 'rock'|| u== 'paper'|| u== 'scissor'){
      return [true ,''];
    }else{
      return[false, "Pls check your options:rock,paper,scissor" ];
    }
    // alert(u[0]);
    // alert(u[1]);
  }
  function logic(comp,user){
    let c=comp;
    let u=user;
    // alert("logic");
    if (c === u) {
        alert( 'Oh ! Sorry, its a draw')
    } else if (c === 'rock' && u === 'paper') {
      alert('Congrats, You Won')
    } else if (c === 'paper' && u === 'scissor') {
      alert( 'Congrats, You Won')
    } else if (c === 'scissor' && u === 'rock') {
      alert('Congrats, You Won')
    } else if (u === 'rock' && c === 'paper') {
      alert('Oh ! Computer Won')
    } else if (u === 'paper' && c === 'scissor') {
      alert( 'Oh ! Computer Won')
    } else if (u === 'scissor' && c === 'rock') {
      alert( 'Oh ! Computer Won')
    }
  }
function main(){
    var comp=computerChoice();
    var userInput = prompt("Hey !!Choose Rock,Paper,Scissor:","Rock,Paper,Scissor");
    var user=userInput.toLowerCase();
    console.log(user);
    if(user == ""){
      var userInput = prompt("Hey !!Choose Rock,Paper,Scissor:","Rock,Paper,Scissor");
    }
    var uC=userCheck(user);
// alert(uC[1]);
     if(uC[0] === true){
      logic(comp,user);
     }else if(uC[0] == false){
        user=prompt(uC[1]);
        logic(comp,user);
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
