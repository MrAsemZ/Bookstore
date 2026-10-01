const names = ["A'sem", "AlMotasem", "Issam", "Hasan"];
const scores = [100, 95, 72, 81];

//? $ = document.getElemntById()
const $ = id => document.getElementById(id);
//* now we can use $("name")

//? what will happen when the page loads
window.onload = () => {
    $("name").focus();
}//* now the focus will be on the name field


function displayResults(){
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

    let average = sum / scores.length;

    let highScore = Math.max(...scores);
    let highScoreName = names[scores.indexOf(Math.max(...scores))]

    $("averageScore").textContent = average;
    $("highScore").textContent = highScore;
    $("highScoreName").textContent = highScoreName;

}

function displayScores(){
    $("scoreList").innerHTML = "";
    $("nameList").innerHTML = "";

    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        $("scoreList").innerHTML += `<li>${score}</li>`;
    }

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        $("nameList").innerHTML += `<li>${name}</li>`;
    }
}

function addScore(){
    let newName = $("name").value;
    let newScore = Number($("score").value);
if (newName === "" || newScore === "" || (newScore < 0 || newScore > 100)){

    alert("You must enter a name and a valid score");
    return;}
else{
    names.push(newName);
    scores.push(newScore);
    $("name").value = "";
    $("score").value = "";
    $("name").focus();


    $("addResult").innerText = "Added Sucessfully!"
}
}
