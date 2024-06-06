$(document).ready(function() {
    // Function to create the navbar


    let createNavnar = createNavbar();
    function createNavbar() {
        return `
            <nav class="navbar">
                <div>
                    <div class="navbar-brand" > <img src="./icons/icons8-atom-32.png">KUBERNETIX</div>
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

    // Function to create the logo section
    function createLogoSection() {
        return `
            <div id="logo1">
                <a class="a"><img src="./icons/Screenshot 2024-06-06 124221.png"></a>
            </div>
        `;
    }

    // Function to create the solution blocks
    function createSolutionBlocks() {
        return `
            <div class="solution-container">
                <ul>
                    <li class="solution-block">
                        <i class="fas fa-microchip"></i>
                        <li>
                        Experience and Expertise in Electronics
                    </li>
                    </li>
                    <li class="solution-block">
                        <i class="fas fa-shield-alt"></i>
                       <li> Reliable Solutions
                    </li>
                    </li>
                    <li class="solution-block">
                        <i class="fas fa-dollar-sign"></i>
                       <li> Cost-Effective Services
                       </li>
                    </li>
                </ul>
            </div>
        `;
    }

    // Function to create the full-width blocks
    function createFullWidthBlocks() {
        return `
            <div class="full-width-block">
                <h1 class="h1">Professional Electronic Repair Services</h1>
                <span class="offers">
                    <p>Kubernetix offers top-notch electronic repair services for a wide range of devices.</P>
                    <p> Our team of experienced technicians ensures quick and efficient repair,</p> <p>providing you with the best solutions for your electronic needs.</p>
                    <button class="btn2">Learn More</button>
                </span>
            </div>
            <div class="full-width-block2">
                <h1 class="h2">Have Questions or Need Assistance?</h1>
                <button class="btn1">Contact Us</button>
            </div>
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
                        <li>Location: Germiston, South Africa</li>
                        <li>Number: 079 317 9211</li>
                        <li>Email: engineering@kubernetix.co.za</li>
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

    // Append all sections to the body
    $('body').prepend(createNavbar());
    $('body').append(createLogoSection());
    $('body').append(createSolutionBlocks());
    $('body').append(createFullWidthBlocks());
    $('body').append(createFooter());


    exports.createNavbar = createNavbar;
});