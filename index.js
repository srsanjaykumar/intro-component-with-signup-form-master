function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// const error_img = document.createElement('img');
// error_img.src = "images/icon-error.svg";
// error_img.classList.add("error-icon");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent built-in validation

  const input_form = document.querySelectorAll(".inp");
  const error_list = document.querySelectorAll(".error");
  const error_image = document.querySelectorAll("img");

  for (let index = 0; index < input_form.length; index++) {

    
    if (input_form[index].children[0].className != "email") {
      let input_value = input_form[index].children[0].value.trim();

      if (input_value === "") {
        error_list[index].classList.add("show");
        error_image[index].classList.add("show");
        input_form[index].style.border = "2px solid hsl(0, 93%, 68%)";
        // mail.insertAdjacentElement("afterend", error_img);
      } else {
        error_list[index].classList.remove("show");
        error_image[index].classList.remove("show");
        input_form[index].style.border = "1.5px solid hsl(246, 25%, 77%)";
      }

      // console.log(input_form[index].children[0].className);
      // console.log(error_list[index].textContent);
    } else {
      let input_value = input_form[index].children[0].value.trim();
      if (input_value === "") {
        error_list[index].classList.add("show");
        error_list[index].innerText = "Email cannot be empty";
        error_image[index].classList.add("show");
        input_form[index].style.border = "2px solid hsl(0, 93%, 68%)";
      } else if (!validateEmail(input_value)) {
        error_list[index].classList.add("show");
        error_list[index].innerText = "Please provide a valid email";
        error_image[index].classList.add("show");
        input_form[index].style.border = "2px solid hsl(0, 93%, 68%)";
      } else {
        error_list[index].classList.remove("show");
        error_image[index].classList.remove("show");
        input_form[index].style.border = "1.5px solid hsl(246, 25%, 77%)";

        
       
      }
    }
  }

  // input_form.forEach(inputform => {
  //   console.log(inputform.children[0].className);
  //   // input.value = inputForm.value.trim();
  // })
  // error_list.forEach(inputform => {
  //   console.log(inputform.textContent);
  //   // input.value = inputForm.value.trim();
  // })
});
