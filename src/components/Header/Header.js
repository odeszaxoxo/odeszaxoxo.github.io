/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-scroll';

function Header() {
  return (
    <div className="site-header">
        <div className="site-header__container l-outer-width l-inner-padding">
            <div href="#" class="site-header__logo">
                <span>
                    Denis
                </span>
            </div>
            <nav className="site-header__navigation">
                <ul>
                    <li>
                        <a href="#"><Link activeClass="active" to="about" spy={true} offset={-130} smooth={true}>Hello</Link></a>
                    </li>
                    <li>
                        <a href="#"><Link to="skills" spy={true} smooth={true} offset={-130}>Skills</Link></a>
                    </li>
                    <li>
                        <a href="#"><Link to="experience" spy={true} smooth={true} offset={-130}>Experience</Link></a>
                    </li>
                    <li>
                        <a href="#"><Link to="portfolio" spy={true} smooth={true} offset={-130}>Portfolio</Link></a>
                    </li>
                    <li>
                        <a href="#"><Link to="contact" spy={true} smooth={true} offset={-130}>Contact Me</Link></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Header;
