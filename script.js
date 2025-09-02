const genderisfemale = document.getElementById("genderisfemale");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
    passengerStatus.className = "";

    if (genderisfemale.checked) {
        if (hasAadhar.checked) {
            passengerStatus.textContent = "You are eligible for a free bus ticket!";
            passengerStatus.classList.add("success");
        } else {
            passengerStatus.textContent =
                " You are female, but you don't have an Aadhar card.";
            passengerStatus.classList.add("error");
        }
    } else {
        passengerStatus.textContent = " You are not female, so you are not eligible.";
        passengerStatus.classList.add("error");
    }
});
