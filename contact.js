
const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    confirmation.textContent = "Please fill in all fields.";
    confirmation.style.color = "red";
    return;
  }

 
  let feedback = JSON.parse(localStorage.getItem("feedback")) || [];
  feedback.push({ name, email, message, date: new Date().toLocaleString() });
  localStorage.setItem("feedback", JSON.stringify(feedback));

  confirmation.textContent = "Thank you for your feedback!";
  confirmation.style.color = "green";

  form.reset();
});


const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
