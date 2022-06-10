var Score = 0;
function Update() {
    Score = Score + 1;
    document.getElementById("Score").innerHTML = ("Score :" + Score);
}
function Save() {
    localStorage.setItem("Sash", Score);
}
function Next() {
    window.location = "activity_2.html";
}
