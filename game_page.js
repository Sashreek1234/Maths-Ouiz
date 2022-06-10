var player_score1 = 0;
var player_score2 = 0;
var player_name1 = localStorage.getItem("player1_name");
var player_name2 = localStorage.getItem("player2_name");
document.getElementById("Player1_name").innerHTML = player_name1 + "  :  ";
document.getElementById("Player2_name").innerHTML = player_name2 + "  :  ";
document.getElementById("Player1_score").innerHTML = player_score1;
document.getElementById("Player2_score").innerHTML = player_score2;
document.getElementById("question").innerHTML = "Question turn   : " + player_name1;
document.getElementById("answer").innerHTML = "Answer turn   :  " + player_name2;
function Send() {
    var v1 = document.getElementById("TI-1").value;
     word = v1.toLowerCase();
    var A1 = word.charAt(1);

    var v2 = Math.floor(word.length / 2);
    var A2 = word.charAt(v2);

    var v3 = word.length - 1;
    var A3 = word.charAt(v3);

    var v4 = word.replace(A1, "_");
    var v5 = v4.replace(A2, "_");
    var v6 = v5.replace(A3, "_");

    s1 = "<h4 id='Q'>  Question  " + v6 + "</h4>";
    Z2 = "<br>Answer : <input type='text' id='input_check_box'>";
    Z3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = s1 + Z2 + Z3;
    document.getElementById("output").innerHTML = row;
    document.getElementById("TI-1").value = "";



}
var Questionturn = "player1";
var Answerturn = "player2";

function check() {
    var sash = document.getElementById("input_check_box").value;
     answer1 = sash.toLowerCase();
    console.log("answer in lower case = " + answer1);

    if (answer1 == word) {
        if (Answerturn == "player1") {
            player_score1 = player_score1 + 1;
            document.getElementById("Player1_score").innerHTML = player_score1;

        }
        else {
            player_score2 = player_score2 + 1;
            document.getElementById("Player2_score").innerHTML = player_score2;
        }
    }
    if (Questionturn == "player1") {
        Questionturn = "player2";
        document.getElementById("question").innerHTML = "Question turn =" + player_name2;

    }
    else {
        Questionturn = "player1";
        document.getElementById("question").innerHTML = "Question turn =" + player_name1;
    }

    if (Answerturn == "player1") {
        Answerturn = "player2";
        document.getElementById("answer").innerHTML = "Answer turn =" + player_name2;

    }
    else {
        Answerturn = "player1";
        document.getElementById("answer").innerHTML = "Answer turn =" + player_name1;
    }
    document.getElementById("output").innerHTML = "";

}
