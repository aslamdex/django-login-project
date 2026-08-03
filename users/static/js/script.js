function validateForm() {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const messege = document.getElementById("message");


    if (username.value.trim() === "") {

        Message.innertext = "✗ username is required";
        message.className = "error";
    }

    else if (password.value.length < 6) {

        message.innerText = "Password must be at least 6 characters";
        message.className = "error";

    }

    else {

        message.innerText = "✓ Login Successful";
        message.className = "success";

    }




}