
function validateForm(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form elements
  const applicationType = document.getElementById('applicationType').value;
  const surname = document.getElementById('surname').value;
  const firstname = document.getElementById('firstname').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const terms = document.getElementById('check').checked;

  // Validate form fields
  if (applicationType === "" || surname === "" || firstname === "" || mobile === "" || email === "" || !terms) {
    alert("Please fill in all required fields and agree to the terms and conditions.");
    return false;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate mobile number (assuming 10-15 digits)
  const mobilePattern = /^\d{10,15}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid mobile number (10-15 digits).");
    return false;
  }

  // If all validations pass, redirect to the next page
  if (applicationType === applicationType || surname === surname || firstname === firstname || mobile === mobile || email === email || !terms) {
    alert("application submitted sucessfully!,your application is being process,check your email for further instruction." );
    return true;
  }
  
}
