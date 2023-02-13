var input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    if (input.value.toLowerCase() === "rick") {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (input.value === "이시원" || input.value === "강준혁") {
      var audio = new Audio('newthatI.mp3');
      audio.play();
    }
  }
});
