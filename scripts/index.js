console.log("script bien vinculado");

const ref_index = "../index.html";
// id para el if //
const index = document.getElementById("setting");
const set_daily =document.getElementById("backIndex");
const history =null;
const food = null;

//function nav
function referir(ref){
    window.location.href= ref;};

// button href //
if(index){
index.addEventListener("click",() => {referir("/component/set_daily.html")});
}
if(set_daily){
set_daily.addEventListener("click",() => {referir(ref_index)});
}
// if(history){}
// if(foot){}

console.log( localStorage.getItem("dailyGoalKcal"));
let dailyGoalKcal = localStorage.getItem("dailyGoalKcal");
document.getElementById("dailyGoalKcal").innerHTML= dailyGoalKcal;
























































console.log("No me rompi :)");