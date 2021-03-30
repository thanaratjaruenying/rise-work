import React, { useState } from 'react'

import Logo from './logo.svg';
import MenuIcon from './menu.svg';
import CloseIcon from './close.svg';
import './App.css';

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(click => !click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/">Home</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/">Product</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/">About us</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <img src={CloseIcon} className="menu-icon" alt="close-icon" />
          ) : (
            <section>Menu <img src={MenuIcon} className="menu-icon" alt="menu-icon" /></section>
          )}
        </div>
      </header>
      <div className="body">
        <img className="pic-header" src={Logo} alt="pic-header" />
        <p className="article">Top 10 UX Articles</p>
        <section className="text-box">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis quam sed fermentum congue. Curabitur imperdiet bibendum arcu, eget viverra libero dignissim et. Nunc et quam mollis, luctus enim vel, vestibulum nibh. Etiam nisi arcu, eleifend quis lorem at, venenatis vestibulum diam. Etiam vitae ex aliquam, fringilla sem pharetra, viverra magna. Aliquam tellus velit, ultricies eu finibus ac, gravida non elit. Nullam sed justo ut nunc aliquet dapibus. Fusce semper, libero vel ultrices rhoncus, lacus turpis finibus tellus, sed tempus quam tortor vel ex. Praesent efficitur nunc in ipsum efficitur varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ornare velit vulputate ligula pharetra, consectetur dictum sem tristique. In hac habitasse platea dictumst.

          Vestibulum vehicula nunc sit amet viverra volutpat. Curabitur a aliquam libero. Quisque eget eleifend lectus, ut finibus massa. Aenean ultricies turpis et tortor posuere, et aliquet odio pellentesque. Quisque ex tellus, venenatis sit amet metus nec, sollicitudin dictum ipsum. Proin in ante fermentum ligula tincidunt mollis quis non odio. Vivamus quis auctor neque, a ornare magna. Integer et dui vehicula, condimentum urna nec, rutrum quam. Praesent vel justo condimentum, sodales nibh laoreet, elementum metus.
        </section>
        <section className="img-box">
          <img src={Logo} alt="pic1" />
          <img src={Logo} alt="pic2" />
          <img src={Logo} alt="pic3" />
        </section>
        <section className="text-box">
          Fusce lobortis nunc leo, ut fringilla diam ultrices vitae. Sed pellentesque dolor rutrum nisi pretium, eget pharetra ante consequat. Ut aliquam, nisi quis semper convallis, eros mauris ultrices quam, in porttitor risus orci sit amet ipsum. Aenean id varius dui. In sem mauris, sagittis a nisi at, auctor efficitur tellus. Curabitur molestie lorem quis sagittis sodales. Donec auctor ac massa at iaculis. Pellentesque urna mauris, cursus sed sollicitudin ut, facilisis et velit. Nam at turpis tincidunt ligula sodales tincidunt. Curabitur dui nunc, condimentum nec iaculis non, fermentum sed nunc. Aliquam sed finibus augue, sed tempus odio. Phasellus vel condimentum magna.

          Morbi non maximus turpis. Aenean non orci metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla gravida rhoncus tincidunt. Aliquam consectetur arcu vel leo rutrum condimentum. Fusce tincidunt finibus massa eu pulvinar. Donec vitae ullamcorper ante. Fusce tempus nulla sit amet interdum semper. Suspendisse eget nunc eros.

          Mauris rhoncus sit amet metus sed interdum. Sed sed enim luctus, lobortis odio vel, congue metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tristique condimentum justo eu pretium. Curabitur ornare rhoncus diam nec ornare. Phasellus sodales iaculis nisl eget iaculis. Suspendisse tortor sem, blandit ac iaculis et, scelerisque non arcu. Duis id est imperdiet, commodo dolor at, mattis leo. Praesent nec lorem eget tortor placerat maximus. Suspendisse eu dictum magna. Nunc purus lectus, consequat nec tincidunt non, fermentum eget tellus. Etiam in eros vitae nisl bibendum facilisis. Suspendisse vehicula consequat mauris, eget suscipit nulla tincidunt vel. Mauris congue nisl non magna malesuada, quis placerat tellus iaculis. Proin tincidunt mollis ipsum id finibus. Vestibulum dignissim vestibulum sem a interdum.
        </section>
      </div>
    </>
  );
}

export default App;
