

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent built-in validation

  const input_form = document.querySelectorAll("input");
  console.log(input_form);
});
