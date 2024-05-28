// Previously, some users didn't know what to do or couldn't find the input form to enter command (Because of unclear instruction)
// This will help to notify the user by blinking the placeholder every 1 second
// Which indicates the position of the input form

const inputElement = document.querySelector(".input");
let visible = true;
setInterval(() => {
   if (visible) {
      inputElement.setAttribute("placeholder", "");
   } else {
      inputElement.setAttribute("placeholder", "Enter a command here");
   }
   visible = !visible;
}, 1000);
