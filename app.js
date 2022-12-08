var minutes = 0;
var seconds = 0 ; 
var milliseconds = 0 ; 
var displayminutes = document.getElementById('minutes');
var displayseconds = document.getElementById('seconds');
var displaymilliseconds = document.getElementById('milliseconds');
var interval ;
function timer () {
  milliseconds++ ; 
  if(milliseconds == 10){
    milliseconds = 0 ;
    seconds++;
  }
  if(seconds == 60){
    seconds = 0;
    minutes++ ; 

  }
  displayminutes.innerHTML = minutes ; 
  displayseconds.innerHTML = seconds ;
  displaymilliseconds.innerHTML = milliseconds ; 
}
function start() {
    interval = setInterval(function(){
        timer()
    },100)
}


function pauseTimer() {
    clearInterval(interval);
}


function resetTimer() {
   pauseTimer();
    minutes =  0 ;
    seconds = 0 ;
    milliseconds = 0;
    displayminutes.innerHTML = minutes ;
    displayseconds.innerHTML = seconds ;
    displaymilliseconds.innerHTML = milliseconds ;

}