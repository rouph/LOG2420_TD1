
function showPen(e) {
  document.getElementById(e).style.visibility="visible";
}
function hidePen(e) {
  document.getElementById(e).style.visibility="hidden";
}
function clickedCheck(e) {
	console.log(document.getElementById(e).src);
	if (document.getElementById(e).src == "./Images/check.png") {
        document.getElementById(e).src = "./Images/tick-check.png";
    }
    else{
        document.getElementById(e).src = "./Images/check.png";
    }
    
}
fetch("http://localhost:8080/cal-data.json")
  .then(function(response) { return response.json(); })
  .then(function(data) {
    console.log(data["Calendrier"][0]);
    
  });
