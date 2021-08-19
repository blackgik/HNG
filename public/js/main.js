const msgHandler = document.getElementById("msg-card");
const emailHandler = document.getElementById("email-card");
const formHandler = document.querySelector(".form-card");

formHandler.addEventListener("submit", (e) => {
  e.preventDefault();

  const MsgValue = msgHandler.value;
  const emailValue = emailHandler.value;

  const data = {
    MsgValue,
    emailValue,
  };

  fetch("/get-credetials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Message sent successfully");
      console.log(data)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
