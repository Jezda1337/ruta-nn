class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            
              <section class="header__contact">
                <article class="header__contact-item">
                  <figure class="header__contact-image-container">
                    <img class="header__content-image" src="/dist/assets/phone.svg" alt="phone icon" />
                    <span class="header__contact-content">+381 65 541 84 76</span>
                  </figure>
                </article>
                <article class="header__contact-item">
                  <figure class="header__contact-image-container">
                    <img class="header__content-image" src="/dist/assets/mail.svg" alt="email icon" />
                    <span class="header__contact-content">info@rutann.rs</span>
                  </figure>
                </article>
              </section>

              <div class="wrapper">
                <section class="header__body">
                <a href="/" class="nav__logo">LOGO</a>

                <svg class="nav__toggle-btn hamRotate nav__toggle-btn--animation" viewBox="0 0 100 100" width="50">
    <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
    <path
          class="line middle"
          d="m 30,50 h 40" />
    <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
  </svg>

                <nav class="nav">
                  <ul class="nav__list">
                    <li class="nav__item">
                      <a href="/" class="nav__link">Pocetna</a>
                    </li>

                    <li class="nav__item">
                      <a href="/about" class="nav__link">O nama</a>
                    </li>

                    <li class="nav__item nav__item--btn">
                      <a href="/form" class="nav__link nav__link--btn">Konkurisi</a>
                    </li>

                    <li class="nav__item">
                      <ul class="nav__social-media">
                      <li class="nav__social-media-container">
                        <a href="https://instagram.com/">
                        <img src="/dist/assets/logo-instagram.svg" alt="instagram icon" />
                        </a>
                      </li>

                      <li class="nav__social-media-container">
                        <a href="https://facebook.com/">
                        <img src="/dist/assets/logo-facebook.svg" alt="facebook icon" />
                        </a>
                      </li>

                      <li class="nav__social-media-container">
                      <a href="https://whatsup.com/"><img src="/dist/assets/logo-whatsapp.svg" alt="whatsup icon" /></a>
                      </li>
                    </ul>
                    </li>
                  </ul>
                </nav>
                </section>
              </div>
            
        `;
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <h2>My Footed custom element</h2>
        `;
  }
}
customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
