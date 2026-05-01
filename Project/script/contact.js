emailjs.init('w1X4Bzlojsekp4NkZ');

const btn = document.getElementById('contact-submit-button');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const now = new Date().toLocaleString();

    document.getElementById("time-field").value = now;

    const serviceID = 'default_service';
    const templateID = 'contact_template';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});