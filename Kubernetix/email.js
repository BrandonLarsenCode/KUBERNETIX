// email.js
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your user ID from EmailJS
})();

function sendEmail(form) {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Error: ' + JSON.stringify(error));
        });
}


function createNavbar() {
    return `
        <nav class="navbar">
            <div>
                <div class="navbar-brand"><img src="./icons/icons8-atom-32.png">KUBERNETIX</div>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="./index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./About.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="./services.html">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="./contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;
}

function createFooter() {
return `
    <footer>
        <div class="content-wrapper">
            <div class="services-section">
                <h2>Our Services</h2>
                <ul>
                    <li class="list">System Manufacturing</li>
                    <li class="list">Hardware Development</li>
                    <li class="list">Programming (Processors)</li>
                    <li class="list">LCD Application Design</li>
                    <li class="list">Industrial System Repairs</li>
                    <li class="list">Onsite Diagnostic Support</li>
                    <li class="list">General Technical Support</li>
                </ul>
            </div>

            <div class="hours-section">
                <h2>Opening Hours</h2>
                <ul>
                <li>Mon - Fri: 7am - 10pm</li>
                <li>Sun: 7am - 3pm</li>
                </ul>
            </div>

            <div class="contact-section">
                <h2>Contact Us</h2>
                <ul>
                <li>Location:</li>
                <li>Number:</li>
                <li>Email:</li>
                </ul>
            </div>

            <div class="social-media-section">
            <h2>Follow Us</h2>
            <div class="social-icons">
                <img src="./icons/facebook.png" class="icon facebook">
                <img src="./icons/insta.png" class="icon instagram">
            </div>
        </div>

            <div class="brand-section">
                <h1><img src="./icons/icons8-atom-32.png">KUBERNETIX</h1>
                <p>&copy; 2023 Kubernetix. All rights reserved.</p>
            </div>
        </div>
    </footer>
`;
}

$(document).ready(function() {
    $('body').prepend(createNavbar());
    $('body').append(createFooter());
});