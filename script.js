let homeTab = document.querySelector(".home");
let stackTab = document.querySelector(".stack");
let aboutTab = document.querySelector(".about");
let workTab = document.querySelector(".work");
let messageTab = document.querySelector(".message");
let workSection = document.querySelectorAll(".work-section");
let rightworkTab = document.querySelectorAll(".right-work");
let mobileNext = document.querySelector(".mobile-next");
let mobileNextToggle = 1;

const stackLink = document.querySelector(".stack-link");
const projectLink = document.querySelector(".project-link");

console.log(workSection);

let stackToggle = document.querySelector(".stack-tab");
let homeToggle = document.querySelector(".home-tab");
let aboutToggle = document.querySelector(".about-tab");
let workToggle = document.querySelector(".work-tab");
let messageToggle = document.querySelector(".message-tab");

let allTabs = document.querySelectorAll(".tab");
let leftNavs = document.querySelectorAll(".left-nav");

function hideActive() {
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.add("hidden");
    leftNavs[i].classList.remove("active");
    leftNavs[i].classList.remove("active-2"); //just for about 3
  }
}

document.querySelector("nav").addEventListener("click", function (e) {
  if (e.target.closest(".stack-tab")) {
    hideActive();
    stackTab.classList.remove("hidden");
    stackToggle.classList.add("active");
  }
  if (e.target.closest(".home-tab")) {
    hideActive();
    homeTab.classList.remove("hidden");
    homeToggle.classList.add("active");
  }
  if (e.target.closest(".about-tab")) {
    hideActive();
    aboutTab.classList.remove("hidden");
    aboutToggle.classList.add("active-2");
  }
  if (e.target.closest(".work-tab")) {
    hideActive();
    workTab.classList.remove("hidden");
    workToggle.classList.add("active");
  }
  if (e.target.closest(".message-tab")) {
    hideActive();
    messageTab.classList.remove("hidden");
    messageToggle.classList.add("active");
  }
});

// right work
for (let i = 0; i < workSection.length; i++) {
  workSection[i].addEventListener("click", function () {
    for (let j = 0; j < rightworkTab.length; j++) {
      rightworkTab[j].classList.add("hidden");
      workSection[j].classList.remove("active-work-section");
    }

    workSection[i].classList.add("active-work-section");
    rightworkTab[i].classList.remove("hidden");
    // rightworkTab[i].classList.remove("hidden");
    console.log(workSection[i]);
  });
}

document.querySelector(".project-link").addEventListener("click", function () {
  hideActive();
  workTab.classList.remove("hidden");
  workToggle.classList.add("active");
});

document.querySelector(".stack-link").addEventListener("click", function () {
  hideActive();
  stackTab.classList.remove("hidden");
  stackToggle.classList.add("active");
});

document.querySelector(".mobile-next").addEventListener("click", function () {
  for (let j = 0; j < rightworkTab.length; j++) {
    rightworkTab[j].classList.add("hidden");
    workSection[j].classList.remove("active-work-section");
  }

  workSection[mobileNextToggle].classList.add("active-work-section");
  rightworkTab[mobileNextToggle].classList.remove("hidden");

  mobileNextToggle = mobileNextToggle === 0 ? 1 : 0;
});

function scrambleText(elementId, finalText, duration = 2000, delay = 800) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const element = document.getElementById(elementId);
  const finalLength = finalText.length;
  const iterations = finalLength;
  const intervalTime = duration / iterations;

  let currentStep = 0;

  // Start the animation after the delay
  setTimeout(() => {
    const scrambleInterval = setInterval(() => {
      if (currentStep < finalLength) {
        let currentText = "";
        for (let i = 0; i < finalLength; i++) {
          if (i < currentStep) {
            currentText += finalText[i]; // Resolved part
          } else {
            currentText += chars[Math.floor(Math.random() * chars.length)]; // Randomized part
          }
        }
        element.textContent = currentText;
        currentStep++;
      } else {
        clearInterval(scrambleInterval);
        element.textContent = finalText; // Ensure the final text is displayed
      }
    }, intervalTime);
  }, delay);
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Add leading zero if needed
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight
  return `${hours}:${minutes} ${ampm}`;
}

// Usage
const now = new Date();
// console.log(formatTime(now));

// Usage
scrambleText("animatedText", "AA, ETH · 9.0192° N, 38.7525° E", 1000, 800);
scrambleText("animatedText2", formatTime(now), 1000, 0);

// document.getElementById("copyEmailButton").addEventListener("click", () => {
//   const email = "yabsira21116@gmail.com"; // Replace with your email address
//   const button = document.getElementById("copyEmailButton");

//   // Copy email to clipboard
//   navigator.clipboard
//     .writeText(email)
//     .then(() => {
//       // Change button text to "Copied!"
//       const originalText = button.textContent; // Save original text
//       button.textContent = "Copied!";
//       setTimeout(() => {
//         button.textContent = originalText; // Revert back to original text
//       }, 2000); // Restore after 2 seconds
//     })
//     .catch((err) => {
//       console.error("Failed to copy email: ", err);
//     });
// });

document
  .getElementById("copyEmailButton")
  .addEventListener("click", (event) => {
    const email = "yabsira21116@gmail.com"; // Replace with your email address
    const button = event.currentTarget; // Reference to the button itself

    navigator.clipboard
      .writeText(email)
      .then(() => {
        const originalText = button.querySelector("span").textContent; // Get current text
        button.querySelector("span").textContent = "Copied!"; // Change to "Copied!"
        setTimeout(() => {
          button.querySelector("span").textContent = originalText; // Restore original text
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  });
