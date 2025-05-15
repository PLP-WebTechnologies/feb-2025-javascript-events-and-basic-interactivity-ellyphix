document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").textContent = "You clicked the button!";
});

document.getElementById("hoverBox").addEventListener("mouseenter", () => {
  document.getElementById("hoverMessage").textContent = "You're hovering!";
});

document.getElementById("keyInput").addEventListener("keyup", (e) => {
  document.getElementById("keyOutput").textContent = `You typed: ${e.key}`;
});

document.getElementById("colorChanger").addEventListener("click", () => {
  document.getElementById("colorChanger").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

let currentImg = 1015;
function nextImage() {
  currentImg++;
  if (currentImg > 1020) currentImg = 1015;
  document.getElementById("galleryImg").src = `https://picsum.photos/id/${currentImg}/400/200`;
}

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  if (!email.value.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
  }

  if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
  }

  if (email.value.includes("@") && password.value.length >= 8) {
    alert("Form submitted successfully!");
  }
});
