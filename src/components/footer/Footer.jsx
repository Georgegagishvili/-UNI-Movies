import './footerStyle.css';
import Delayed from '../delay';
function Footer() {
  return (
    <Delayed waitBeforeShow={1000}>
      <div class="footer-wrapper">
        <footer>
          <div class="footer-top">
            <div class="top-texts">
              <img src="https://bit.ly/3grEgKE" alt="logo" />
              <img src="https://bit.ly/3grEgKE" alt="logo" />
              <img src="https://bit.ly/3grEgKE" alt="logo" />
              <img src="https://bit.ly/3grEgKE" alt="logo" />
            </div>
            <div class="middle-texts">
              <span>HOME</span>
              <span>MENU</span>
              <span>STORY</span>
              <span>LOCATIONS</span>
              <span>CONTACT</span>
            </div>
            <div class="bottom-texts">
              <span>CONTACT</span>
              <span>BLOG</span>
              <span>CATEGORIES</span>
              <span>INFO</span>
            </div>
          </div>
          <div class="footer-bottom">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </span>
            <span>© LOREM IPSUM | ALL RIGHTS RESERVED </span>
          </div>
        </footer>
      </div>
    </Delayed>
  );
}

export default Footer;
