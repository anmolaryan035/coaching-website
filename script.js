function showSignup() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

function signup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem("user_" + email, JSON.stringify(user));

  alert(`Account created for ${email}\nYou can now login.`);
  showLogin();
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("user_" + email));

  if (user && user.password === password) {
    // Check if this email has done payment
    const purchasedEmail = localStorage.getItem("purchasedEmail");
    const purchasedCourse = localStorage.getItem("purchasedCourse");

    if (purchasedEmail === email && purchasedCourse) {
      window.location.href = purchasedCourse + ".html"; // Redirect to batch page
    } else {
      window.location.href = "dashboard.html"; // Show demo dashboard
    }
  } else {
    alert("Invalid email or password.");
  }
}
