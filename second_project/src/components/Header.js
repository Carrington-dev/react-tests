function Header() {
    return (
        <>
            <header id="header" class="header d-flex align-items-center sticky-top">
                <div class="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="/" class="logo d-flex align-items-center me-auto">
                        <img src="assets/img/logo.png" alt=""/>
                            <h1 class="sitename">Stemgon</h1>
                    </a>

                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><a href="/">Home<br/></a></li>
                            <li><a href="about.php">About</a></li>
                            <li><a href="services.php">Services</a></li>
                            <li><a href="portfolio.php">Portfolio</a></li>
                            {/* <li><a href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li class="listing-dropdown"><a href="#"><span>Listing Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">Column 1 link 1</a>
                                        <a href="#">Column 1 link 2</a>
                                        <a href="#">Column 1 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 2 link 1</a>
                                        <a href="#">Column 2 link 2</a>
                                        <a href="#">Column 3 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 3 link 1</a>
                                        <a href="#">Column 3 link 2</a>
                                        <a href="#">Column 3 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 4 link 1</a>
                                        <a href="#">Column 4 link 2</a>
                                        <a href="#">Column 4 link 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Column 5 link 1</a>
                                        <a href="#">Column 5 link 2</a>
                                        <a href="#">Column 5 link 3</a>
                                    </li>
                                </ul>
                            </li> */}
                            <li><a href="contact.php">Contact</a></li>
                        </ul>
                        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a class="btn-getstarted flex-md-shrink-0" href="contact.php">Get Started</a>

                </div>
            </header>
        </>);
}

export default Header;