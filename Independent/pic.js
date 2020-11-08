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