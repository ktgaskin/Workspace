
function showPopup(textContent, leftPosition, topPosition) {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.textContent = textContent;
    popup.style.left = leftPosition;
    popup.style.top = topPosition;
}
function hidePopup() {
  var popup = document.getElementById("myPopup")
  popup.classList.toggle("hide");
}
//refresh button
function showHide3() {
  document.getElementById("straw").style.visibility="visible";
}
//background video 
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
//tag video 
function playVidtag() { 
    var vid = document.getElementById("tagvid"); 
    vid.play(); 
  } 
  function pauseVidtag() { 
    var vid = document.getElementById("tagvid"); 
    vid.pause(); 
  } 
function showHidetag() {
    document.getElementById("tagvid").style.visibility="visible";
}
function showHideleaf() {
    document.getElementById("backgroundvid").style.visibility="hidden";
}
//strawberry video 
function playVidstraw() { 
  var vid = document.getElementById("strawvid"); 
  vid.play(); 
} 
function pauseVidstraw() { 
  var vid = document.getElementById("strawvid"); 
  vid.pause(); 
} 
function showHidestraw() {
  document.getElementById("strawvid").style.visibility="visible";
}
function showHideleaf() {
  document.getElementById("backgroundvid").style.visibility="hidden";
}
function showHidetags() {
  document.getElementById("tagvid").style.visibility="hidden";
}
//leaves video 
function playVidleaves() { 
  var vid = document.getElementById("leavesvid"); 
  vid.play(); 
} 
function pauseVidleaves() { 
  var vid = document.getElementById("leavesvid"); 
  vid.pause(); 
} 
function showHideleaves() {
  document.getElementById("leavesvid").style.visibility="visible";
}
function showHideleaf() {
  document.getElementById("backgroundvid").style.visibility="hidden";
}
function showHidetags() {
  document.getElementById("tagvid").style.visibility="hidden";
}
function showHidestraws() {
  document.getElementById("strawvid").style.visibility="hidden";
}
//flower video 
function playVidflower() { 
  var vid = document.getElementById("flowervid"); 
  vid.play(); 
} 
function pauseVidflower() { 
  var vid = document.getElementById("flowervid"); 
  vid.pause(); 
} 
function showHideflower() {
  document.getElementById("flowervid").style.visibility="visible";
}
function showHideleaf() {
  document.getElementById("backgroundvid").style.visibility="hidden";
}
function showHidetags() {
  document.getElementById("tagvid").style.visibility="hidden";
}
function showHidestraws() {
  document.getElementById("strawvid").style.visibility="hidden";
}
function showHideleave() {
  document.getElementById("leavesvid").style.visibility="hidden";
}
//vine video 
function playVidvine() { 
  var vid = document.getElementById("vinevid"); 
  vid.play(); 
} 
function pauseVidvine() { 
  var vid = document.getElementById("vinevid"); 
  vid.pause(); 
} 
function showHidevine() {
  document.getElementById("vinevid").style.visibility="visible";
}
function showHideleaf() {
  document.getElementById("backgroundvid").style.visibility="hidden";
}
function showHidetags() {
  document.getElementById("tagvid").style.visibility="hidden";
}
function showHidestraws() {
  document.getElementById("strawvid").style.visibility="hidden";
}
function showHideleave() {
  document.getElementById("leavesvid").style.visibility="hidden";
}
function showHideflow() {
  document.getElementById("flowervid").style.visibility="hidden";
}
//blue bird  video 
function playVidblue() { 
  var vid = document.getElementById("bluevid"); 
  vid.play(); 
} 
function pauseVidblue() { 
  var vid = document.getElementById("bluevid"); 
  vid.pause(); 
} 
function showHideblue() {
  document.getElementById("bluevid").style.visibility="visible";
}
function showHideleaf() {
  document.getElementById("backgroundvid").style.visibility="hidden";
}
function showHidetags() {
  document.getElementById("tagvid").style.visibility="hidden";
}
function showHidestraws() {
  document.getElementById("strawvid").style.visibility="hidden";
}
function showHideleave() {
  document.getElementById("leavesvid").style.visibility="hidden";
}
function showHideflow() {
  document.getElementById("flowervid").style.visibility="hidden";
}
function showHidevinez() {
  document.getElementById("vinevid").style.visibility="hidden";
}
//orange video 
function playVidorange() { 
  var vid = document.getElementById("orangevid"); 
  vid.play(); 
} 
function pauseVidorange() { 
  var vid = document.getElementById("orangevid"); 
  vid.pause(); 
} 
function showHideorange() {
  document.getElementById("orangevid").style.visibility="visible";
}
function showHideleaf() {
  document.getElementById("backgroundvid").style.visibility="hidden";
}
function showHidetags() {
  document.getElementById("tagvid").style.visibility="hidden";
}
function showHidestraws() {
  document.getElementById("strawvid").style.visibility="hidden";
}
function showHideleave() {
  document.getElementById("leavesvid").style.visibility="hidden";
}
function showHideflow() {
  document.getElementById("flowervid").style.visibility="hidden";
}
function showHidevinez() {
  document.getElementById("vinevid").style.visibility="hidden";
}
function showHidebluez() {
  document.getElementById("bluevid").style.visibility="hidden";
}
// other 
function on() {
  document.getElementById("overlay").style.display = "block";
  document.addEventListener('overlay', overlay());
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
