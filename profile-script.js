function logout() {
    // Clear user state from local storage
    localStorage.removeItem("user");

    // Redirect to signup page
    window.location.href = "index.html";
  }

  function checkAuthentication() {
    // Check if user state exists in local storage
    var user = localStorage.getItem("user");

    if (!user) {
      // User is not authenticated, redirect to signup page
      window.location.href = "index.html";
    } else {
      // User is authenticated, display profile details
      user = JSON.parse(user);
      const profile = document.getElementById('profile-data');
      const data = document.createElement('div');
      data.setAttribute('id','data');
      data.innerHTML=`<p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Password: ${user.password}</p>`;
      profile.append(data);
    }
  }
  document.getElementById("logout-btn").addEventListener('click', event =>{
    event.preventDefault();
    logout();
  })
  checkAuthentication();
  var link = document.querySelector('a');

    link.addEventListener('focus', function() {
      checkAuthentication();
      link.style.color = 'grey'; // Change focus color to grey
    });
  
