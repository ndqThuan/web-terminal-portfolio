// If the user don't know what to do/cannot find the input form to enter commands
// The input form will notify the user by blinking the placeholder every 1.2 second

const inputElement = document.querySelector(".input");
let visible = true;
setInterval(() => {
   if (visible) {
      inputElement.setAttribute("placeholder", "");
   } else {
      inputElement.setAttribute("placeholder", "Enter a command here");
   }
   visible = !visible;
}, 1200);
