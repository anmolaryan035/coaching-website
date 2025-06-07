function toggleDemo(id) {
    const list = document.getElementById(id);
    list.classList.toggle("hidden");
  }
  // OLD:
window.location.href = "dashboard.html";

// NEW:
if (course === "Class9") {
  window.location.href = "batch9.html";
} else if (course === "Class10") {
  window.location.href = "batch10.html";
} else if (course === "Class11") {
  window.location.href = "batch11.html";
} else if (course === "Class12") {
  window.location.href = "batch12.html";
} else {
  window.location.href = "dashboard.html";
}
