function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
      field.type = "text";
    } else {
      field.type = "password";
    }
  }
  
  document.getElementById("resetForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password successfully reset!");
    }
  });
  