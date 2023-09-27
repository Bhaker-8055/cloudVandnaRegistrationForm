
document.getElementById("submitButton").addEventListener("click", function() {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderInputs = document.getElementsByName("gender");
    const gender = [];
    genderInputs.forEach(input => {
        if (input.checked) {
            gender.push(input.value);
        }
    });
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || gender.length === 0 || !email || !mobile) {
        alert("Please fill in all required fields.");
        return;
    }

    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender.join(", ")}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

    alert("Submission Data:\n\n" + message);

    document.getElementById("surveyForm").reset();
});