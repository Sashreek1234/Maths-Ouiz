function back(){
    window.location="activity_1.html";

}
function GS(){
    var Score = localStorage.getItem("Sash");
    document.getElementById("update").innerHTML="Score  :  "+Score;
}