document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector("input[type='email']").value;
  
    if (email === "") {
      alert("Please enter your email.");
    } else {
      alert("Password recovery instructions have been sent to your email!");
    }
  });
  