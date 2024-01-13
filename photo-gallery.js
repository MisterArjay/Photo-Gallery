
function FullView(ImgLink){
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("full-image").style.display = "block";
}

function CloseFullView(){
  document.getElementById("full-image").style.display = "none";
}
