const form = document.getElementById("enquiryForm");

// Generate math question
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

document.getElementById("mathQuestion").innerText = `Solve: ${num1} + ${num2}`;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const humanChecked = document.getElementById("humanCheck").checked;
    const answer = document.getElementById("mathAnswer").value;

    if (!humanChecked || parseInt(answer) !== (num1 + num2)) {
        document.getElementById("errorMsg").style.display = "block";
        return;
    }

    document.getElementById("errorMsg").style.display = "none";

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSduEfnKqVDVXwpuh9lvfQGkL934JBJlM6GziXnT6NNqYzDYQA/formResponse";

    const data = new FormData();

    data.append("entry.1572640658", document.getElementById("email").value);
    data.append("entry.1795851255", document.getElementById("name").value);
    data.append("entry.85357022", document.getElementById("phone").value);
    data.append("entry.1768586726", document.getElementById("country").value);
    data.append("entry.996980086", document.getElementById("message").value);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    })
    .then(() => {
        form.reset();
        document.getElementById("successMsg").style.display = "block";
    });
});