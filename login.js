document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from refreshing page

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Basic validation
    if (username === "" || password === "") {
        alert("Please fill in both fields");
        return;
    }

    alert("Login successful (demo only)");
});
