function signUp() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm-password").value;

    if (username && password && email && confirmPass && confirmPass === password) {
      // Generate random access token
      var accessToken = generateAccessToken();

      // Create user state
      var user = {
        name: username,
        password: password,
        email: email,
        accessToken: accessToken
      };

      // Save user state to local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Display success message
      document.getElementById("error-message").style.display = "none";
      const successMsg = document.getElementById("success-message");
      successMsg.style.display = "block";
      successMsg.innerHTML = "Sign up successful! Redirecting to profile...";
      successMsg.style.color = "green";

      // Redirect to profile page
      setTimeout(function() {
        window.location.href = "profile.html";
      }, 2000);
    }
    else if(username && password && email && confirmPass && confirmPass !== password){
      document.getElementById("success-message").style.display = "none";
      const errorMsg = document.getElementById("error-message");
      errorMsg.style.display = "block";
      errorMsg.innerHTML = "Password doesn't match!";
      errorMsg.style.color = "red";
    }
    else {
      // Display error message
      document.getElementById("success-message").style.display = "none";
      const errorMsg = document.getElementById("error-message");
      errorMsg.style.display = "block";
      errorMsg.innerHTML = "Please fill in all fields.";
      errorMsg.style.color = "red";
    }
  }

  function generateAccessToken() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var token = "";

    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }

    return token;
  }

  document.getElementById("signupBtn").addEventListener('click', event =>{
    event.preventDefault();
    signUp();
  })
