// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("open");
});

//Skill progress bars animation
// Select all circles
document.querySelectorAll(".circle").forEach((circle) => {
  let target = parseInt(circle.getAttribute("data-percent")); // read data-percent
  let curr = 0;

  // inject internal structure once
  circle.classList.add(
    "relative",
    "rounded-full",
    "grid",
    "place-items-center",
    "bg-gray-200"
  );
  circle.innerHTML = `<span class="percent absolute text-xl font-semibold text-gray-800">0%</span>`;
  let text = circle.querySelector(".percent");

  // animate
  let animate = setInterval(() => {
    curr++;
    circle.style.background = `conic-gradient(#f97316 ${curr}%, #e5e7eb 0)`;
    text.textContent = curr + "%";
    if (curr === target) clearInterval(animate);
  }, 20);
});

//Contact form
const form = document.getElementById("my-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent default form redirect

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset(); // Clear the form
    successMessage.classList.remove("hidden"); // Show success message
  } else {
    alert("Oops! There was a problem submitting your form");
  }
});

//Copyright year
document.getElementById("year").textContent = new Date().getFullYear();
