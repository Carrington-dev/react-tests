function Footer() {
    const company = "Stemgon"
    return (<>
        <footer id="footer" class="footer">

            <div class="footer-newsletter">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-6">
                            <h4>Join Our Newsletter</h4>
                            <p>Subscribe to our newsletter and receive the updates about our products and services!</p>
                            <form action="forms/newsletter.php" method="post" class="php-email-form">
                                <div class="newsletter-form">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </div>
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <a href="/" class="d-flex align-items-center">
                            <span class="sitename">{ company }</span>
                        </a>
                        <div class="footer-contact pt-3">
                            <p>395 Francis Baard Street</p>
                            <p>Pretoria, GP 0001</p>
                            <p class="mt-3"><strong>Phone:</strong> <span>+27 79 800 5807</span></p>
                            <p><strong>Email:</strong> <span>info@stemgon.co.za</span></p>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>


                            <li><i class="bi bi-chevron-right"></i> <a href="services/web_development.php">Web Design</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services/data_engineering.php">Data Engineering</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services/mobile_development.php">Mobile Development</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services/ml.php">Machine Learning</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services/data_science.php">Data Science</a></li>

                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <h4>Follow Us</h4>
                        <p>Be the first to know about IT innovations and interesting case studies.          </p>
                        <div class="social-links d-flex">
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">1999-{new Date().getFullYear()} Stemgon</strong> <span>All Rights Reserved</span></p>


            </div>

        </footer >


    </>);
}

export default Footer;