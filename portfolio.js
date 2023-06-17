// HEADER
// let prevScrollPos = window.pageYOffset;
// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
//   const currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     header.style.top = "0";
//     header.style.transform = "translateY(0)";
//   } else {
//     header.style.transform = "translateY(-100%)";
//     header.style.top = "-100px";
//   }

//   prevScrollPos = currentScrollPos;
// });

let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("hidden");
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
    header.classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
});


// HOME
  const typingEffect = function() {
    // List of items
    const items = ["Web Developer", "Programmer"];

    // Get the HTML element
    const typingText = document.getElementById("typing-text");

    // Initialize variables
    let currentItemIndex = 0;
    let currentText = "";
    let isDeleting = false;

    // Function to simulate typing effect
    function type() {
      // Get the current item
      const currentItem = items[currentItemIndex];

      if (isDeleting) {
        // Remove a character
        currentText = currentItem.substring(0, currentText.length - 1);
      } else {
        // Add a character
        currentText = currentItem.substring(0, currentText.length + 1);
      }

      // Update the HTML element with the current text
      typingText.textContent = currentText;

      // Set the typing speed
      let typingSpeed = 200;

      if (isDeleting) {
        typingSpeed /= 2; // Slow down deleting speed
      }

      // Check if typing is complete
      if (!isDeleting && currentText === currentItem) {
        // Wait before deleting
        typingSpeed = 1000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        // Move to the next item
        currentItemIndex++;
        isDeleting = false;

        // Reset to the first item if the end is reached
        if (currentItemIndex === items.length) {
          currentItemIndex = 0;
        }

        // Wait before typing the next item
        typingSpeed = 800;
      }

      // Call the function again after the typing speed
      setTimeout(type, typingSpeed);
    }

    // Start the typing effect
    type();
  }
  // Call the function to start the typing effect
  typingEffect();



// CONTACT
const message = function sendMessage() {
  let send = document.querySelector('.send-button');

  if (send.value === 'Send Message') {
    send.value = 'Message Sent'
  } else if (send.value === 'Message Sent') {
    send.value = 'Message Sent'
  }

}


