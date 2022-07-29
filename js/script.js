function emailValidate() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const input = document.querySelector("form > div > input");
  const button = document.querySelector("form > div > button");
  const error = document.getElementById("ErrorMsg");
  input.addEventListener("change", function (e) {
    e.preventDefault();
    if (regex.test(e.target.value)) {
      button.disabled = false;
      e.target.style.borderColor = "green";
      error.innerHTML = "";
    } else if (e.target.value === "") {
      e.target.style.borderColor = "hsl(223, 100%, 88%)";
      error.innerHTML = "";
    } else {
      button.disabled = true;
      e.target.style.borderColor = "hsl(354, 100%, 66%)";
      error.innerHTML = "Please provide a valid email address";
    }
  });
}

emailValidate();
