document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log(formData); // Display form data as an object in the console

    // You can add code here to send the form data to a server or perform other actions
});