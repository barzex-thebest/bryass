const form = document.getElementById("Form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username");

    if (username.value.trim() === "") {
        showERROR(username, "User Name is required");
        return;
    }

    alert("Form submitted successfully!");
});

function showERROR(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("span").innerText = message;
}