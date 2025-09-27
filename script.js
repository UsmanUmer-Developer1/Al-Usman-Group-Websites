// script.js

// ✅ GSAP cards animation
gsap.from(".box-page", {
  opacity: 0,
  y: 50,
  scale: 0.9,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

// ✅ Navbar toggle
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
let menuOpen = false;

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuOpen = !menuOpen;

  // Change icon
  toggleBtn.innerHTML = menuOpen
    ? `<i class="fas fa-times"></i>`
    : `<i class="fas fa-bars"></i>`;
});

// ✅ Text container show/hide with video
const textContainer = document.querySelector(".container-text");
const video = document.querySelector(".video-container video");

// Function: show text after delay
function showTextAfterDelay() {
  textContainer.classList.remove("show-text");
  textContainer.classList.add("hidden-text");

  setTimeout(() => {
    textContainer.classList.remove("hidden-text");
    textContainer.classList.add("show-text");
  }, 1000);
}

// On page load
window.addEventListener("load", showTextAfterDelay);

// Each time video restarts
let lastTime = 0;
if (video) {
  video.addEventListener("timeupdate", () => {
    if (lastTime > video.currentTime) {
      // Video restarted (looped)
      showTextAfterDelay();
    }
    lastTime = video.currentTime;
  });
}

// ✅ Scroll reveal animation
function revealOnScroll() {
  const boxes = document.querySelectorAll(".border-box");
  const triggerBottom = window.innerHeight * 0.85; // 85% from top

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



document.querySelectorAll(".learn-more").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Car name pick karega us card se
    let carName = btn.closest(".border-box").querySelector("p").innerText;

    // Form show karega aur car name set karega
    document.getElementById("bookingForm").classList.remove("hidden");
    document.getElementById("car").value = carName;

    // Scroll kare form tak
    document.getElementById("bookingForm").scrollIntoView({ behavior: "smooth" });
  });
});




// Jab car par click ho → uska naam form me set karo
document.querySelectorAll(".learn-more").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let carBox = btn.closest(".border-box");
    let carName = carBox.querySelector("p").innerText;

    // Set car name in form
    document.getElementById("car").value = carName;

    // Smooth scroll to form
    document.getElementById("carBookingSection").scrollIntoView({ behavior: "smooth" });
  });
});

// WhatsApp booking
document.getElementById("carBookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let car = document.getElementById("car").value;
  let date = document.getElementById("date").value;
  let pickup = document.getElementById("pickup").value;
  let message = document.getElementById("message").value;

  let whatsappNumber = "923004221975"; // apna number (without +)

  let whatsappURL = `https://wa.me/${923004221975}?text=
*Car Booking Request*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Car: ${car}%0A
Date: ${date}%0A
Pickup: ${pickup}%0A
Notes: ${message}`;

  window.open(whatsappURL, "_blank");
});
