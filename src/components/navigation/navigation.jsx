import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav class="navbar">
      {/* <!-- LOGO --> */}
      {/* <a href="index.html" class="logo">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="slack"
          class="svg-inline--fa fa-slack fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"></path>
        </svg>
      </a> */}
      {/* <!-- LOGO --> */}
      <ul class="navbar-ul">
        {/* <!-- MAIN TITLE --> */}
        <li class="nav-title">
          <a href="/">YOUR-MOVIES</a>
        </li>
        {/* <!-- MAIN TITLE --> */}
        {/* <!-- SEARCH --> */}
        <li class="nav-search">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            class="svg-inline--fa fa-search fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="#fed700"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
          <input id="searchInput" type="" name="" placeholder="სწრაფი ძიება" />
          {/* <!-- HIDDEN SEARCH RESULTS --> */}
          <ul id="searchResults" class="search-results-ul"></ul>
          {/* <!-- HIDDEN SEARCH RESULTS --> */}
        </li>
        {/* <!-- SEARCH --> */}

        {/* <!-- NAV ITEMS --> */}
        <li class="nav-item">
          <NavLink class="nav-link" to="/detailed_search">
            ფილმები
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/wishlist?id=8462">
            სურვილები
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/auth">
            ავტორიზაცია
          </NavLink>
        </li>
        {/* <!-- NAV ITEMS --> */}

        {/* <!-- RESPONSIVE NAV ITEMS --> */}

        <div class="navbar-responsive">
          <li>
            <a href="search_detailed.html">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="film"
                class="svg-inline--fa fa-film fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="#fed700"
                  d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="wishlist.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xmlSpace="preserve">
                <metadata>
                  {' '}
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon{' '}
                </metadata>
                <g>
                  <g>
                    <g>
                      <path
                        fill="#fed700"
                        d="M921.9,239.5L692.3,10H78.1v980h843.7V239.5L921.9,239.5z M712.9,129.7l89.3,89.3h-89.3V129.7z M851.7,919.9H148.3V80.1h494.5v209h209V919.9z"
                      />
                      <rect
                        fill="#fed700"
                        x="452.7"
                        y="392"
                        width="340.3"
                        height="70.1"
                      />
                      <polygon
                        fill="#fed700"
                        points="269.3,567.3 241.8,539.7 192.2,589.3 269.3,666.4 396.8,539 347.2,489.4 "
                      />
                      <polygon
                        fill="#fed700"
                        points="269.3,741.9 241.8,714.4 192.2,764 269.3,841.1 396.8,713.7 347.2,664.1 "
                      />
                      <polygon
                        fill="#fed700"
                        points="269.3,392.6 241.8,365 192.2,414.6 269.3,491.8 396.8,364.3 347.2,314.7 "
                      />
                      <rect
                        fill="#fed700"
                        x="452.7"
                        y="566.8"
                        width="340.3"
                        height="70.1"
                      />
                      <rect
                        fill="#fed700"
                        x="452.7"
                        y="741.6"
                        width="340.3"
                        height="70.1"
                      />
                    </g>
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="register.html">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-circle"
                class="svg-inline--fa fa-user-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512">
                <path
                  fill="#fed700"
                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>
            </a>
          </li>
        </div>
        {/* <!-- RESPONSIVE NAV ITEMS --> */}
      </ul>
    </nav>
  );
}

export default Navigation;
