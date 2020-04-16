var CurrentPi = 3;
var Iteration = 0;
var Denominator = 0;

function RefreshPi(){
  document.getElementById("Pi").innerHTML = CurrentPi.toFixed(50);
}

function RefreshIteration(){
  document.getElementById("Iteration").innerHTML = Iteration;
}

function Iterate(){
  Denominator += 2;
  CurrentPi += (4 / (Denominator * (Denominator + 1) * (Denominator + 2)));
  Iteration += 1;
  
  Denominator += 2;
  CurrentPi -= (4 / (Denominator * (Denominator + 1) * (Denominator + 2)));
  Iteration += 1;
}

i = 0;

function Start(){
  while(i < 100000){
    Iterate();
    RefreshPi();
    RefreshIteration();
    i += 1;
  }
  i = 0;
}
