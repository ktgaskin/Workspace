function alert1()
{
    alert(1);
}
function showPopup(textContent, leftPosition, topPosition) {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.textContent = textContent;
    popup.style.left = leftPosition;
    popup.style.top = topPosition;
}

function playVid() { 
    var vid = document.getElementById("backgroundvid"); 
    vid.play(); 
  } 
  
  function pauseVid() { 
    var vid = document.getElementById("backgroundvid"); 
    vid.pause(); 
  } 
function showHideback() {
    document.getElementById("backgroundvid").style.visibility="visible";
}
function showHide2() {
    document.getElementById("straw").style.visibility="hidden";
}
function showHide3() {
    document.getElementById("straw").style.visibility="visible";
}
function showHideleaf() {
    document.getElementById("backgroundvid").style.visibility="visible";
}

