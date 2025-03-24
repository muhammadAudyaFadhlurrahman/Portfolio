// Get current page from URL
const page = window.location.pathname.split("/").pop().split(".")[0];

// Set dynamic title and content
document.getElementById("page-title").innerText = page.charAt(0).toUpperCase() + page.slice(1);
document.getElementById("page-content").innerText = page.charAt(0).toUpperCase() + page.slice(1);
