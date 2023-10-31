let number = 0;
const seconds = 5000;
const btn = document.querySelector(".SignUp-button");

function changingButton() {
  btn.textContent = "I TOLD YOU DONT PUSH ME! ^-^";
  btn.style.backgroundColor = "Grey";
  btn.disabled = true;
}

function removeButton() {
  btn.remove();
}

function alertUser() {
  number += 1;
  if (number == 3) {
    alert("This is the last time you're gonna click this button, goodbye =)");
    changingButton();
    setTimeout(removeButton, seconds);
    return true;
  }
  if (number == 2) {
    btn.textContent = "I'm warning you ..... =(";
    alert("This is the second time you clicked the button!, beware =)");
  } else {
    btn.textContent = "Don't Push Me Again =(";
    alert(
      "This is the first time you clicked the button!, don't do that again! =)"
    );
  }
}
