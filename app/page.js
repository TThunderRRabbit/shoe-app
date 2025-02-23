// Depending on your Header component, add "use client" if needed.
"use client";
import "./styles/global.css";
export default function Home() {
  return (
    <div className="page" style={{ display: "flex", flexDirection: "column" }}>
      {
        <div className="Header">
          <div className="menu">
            <svg
              width="23"
              height="27"
              viewBox="0 0 32 34"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_31)">
                <path
                  d="M1.33332 8.50002H30.6667C31.0203 8.50002 31.3594 8.35076 31.6095 8.08508C31.8595 7.81941 32 7.45907 32 7.08335C32 6.70763 31.8595 6.34729 31.6095 6.08162C31.3594 5.81594 31.0203 5.66669 30.6667 5.66669H1.33332C0.979696 5.66669 0.640558 5.81594 0.390509 6.08162C0.140461 6.34729 -1.52588e-05 6.70763 -1.52588e-05 7.08335C-1.52588e-05 7.45907 0.140461 7.81941 0.390509 8.08508C0.640558 8.35076 0.979696 8.50002 1.33332 8.50002V8.50002Z"
                  fill="black"
                />
                <path
                  d="M1.33332 15.5833H20C20.3536 15.5833 20.6927 15.4341 20.9428 15.1684C21.1928 14.9027 21.3333 14.5424 21.3333 14.1667C21.3333 13.7909 21.1928 13.4306 20.9428 13.1649C20.6927 12.8993 20.3536 12.75 20 12.75H1.33332C0.979696 12.75 0.640558 12.8993 0.390509 13.1649C0.140461 13.4306 -1.52588e-05 13.7909 -1.52588e-05 14.1667C-1.52588e-05 14.5424 0.140461 14.9027 0.390509 15.1684C0.640558 15.4341 0.979696 15.5833 1.33332 15.5833V15.5833Z"
                  fill="black"
                />
                <path
                  d="M20 26.9166H1.33332C0.979696 26.9166 0.640558 27.0659 0.390509 27.3316C0.140461 27.5972 -1.52588e-05 27.9576 -1.52588e-05 28.3333C-1.52588e-05 28.709 0.140461 29.0694 0.390509 29.335C0.640558 29.6007 0.979696 29.75 1.33332 29.75H20C20.3536 29.75 20.6927 29.6007 20.9428 29.335C21.1928 29.0694 21.3333 28.709 21.3333 28.3333C21.3333 27.9576 21.1928 27.5972 20.9428 27.3316C20.6927 27.0659 20.3536 26.9166 20 26.9166Z"
                  fill="black"
                />
                <path
                  d="M30.6667 19.8334H1.33332C0.979696 19.8334 0.640558 19.9826 0.390509 20.2483C0.140461 20.514 -1.52588e-05 20.8743 -1.52588e-05 21.25C-1.52588e-05 21.6258 0.140461 21.9861 0.390509 22.2518C0.640558 22.5175 0.979696 22.6667 1.33332 22.6667H30.6667C31.0203 22.6667 31.3594 22.5175 31.6095 22.2518C31.8595 21.9861 32 21.6258 32 21.25C32 20.8743 31.8595 20.514 31.6095 20.2483C31.3594 19.9826 31.0203 19.8334 30.6667 19.8334Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_31">
                  <rect width="32" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="left">
            <div className="searchInput">
              <input type="text" className="search-bar"></input>
              <span class="material-symbols-outlined search">search</span>
            </div>

            <div className="cart">
              <svg
                width="27"
                height="27"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 26.3333C9.55417 26.3333 8.18208 27.6458 8.18208 29.25C8.18208 30.8542 9.55417 32.1667 11.25 32.1667C12.9458 32.1667 14.3333 30.8542 14.3333 29.25C14.3333 27.6458 12.9458 26.3333 11.25 26.3333ZM2 3V5.91667H5.08333L10.6333 16.9854L8.55208 20.5583C8.30542 20.9667 8.16667 21.4479 8.16667 21.9583C8.16667 23.5625 9.55417 24.875 11.25 24.875H29.75V21.9583H11.8975C11.6817 21.9583 11.5121 21.7979 11.5121 21.5938L11.5583 21.4188L12.9458 19.0417H24.4313C25.5875 19.0417 26.605 18.4438 27.1292 17.5396L32.6483 8.075C32.7717 7.87083 32.8333 7.62292 32.8333 7.375C32.8333 6.57292 32.1396 5.91667 31.2917 5.91667H8.49042L7.04125 3H2ZM26.6667 26.3333C24.9708 26.3333 23.5987 27.6458 23.5987 29.25C23.5987 30.8542 24.9708 32.1667 26.6667 32.1667C28.3625 32.1667 29.75 30.8542 29.75 29.25C29.75 27.6458 28.3625 26.3333 26.6667 26.3333Z"
                  fill="#323232"
                />
              </svg>
            </div>
            <div className="forum">
              <svg
                width="27"
                height="27"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.1875 8.75001H25.5625V21.875H8.5V24.7917C8.5 25.5938 9.09062 26.25 9.8125 26.25H24.25L29.5 32.0833V10.2083C29.5 9.40626 28.9094 8.75001 28.1875 8.75001ZM22.9375 17.5V4.37501C22.9375 3.57292 22.3469 2.91667 21.625 2.91667H4.5625C3.84062 2.91667 3.25 3.57292 3.25 4.37501V24.7917L8.5 18.9583H21.625C22.3469 18.9583 22.9375 18.3021 22.9375 17.5Z"
                  fill="#323232"
                />
              </svg>
            </div>
          </div>
        </div>
      }
      <div className="Main">
        <div className="main-left">
          <div className="offerDiv">
            <div className="offers">
              <span className="sale-offer">
                40% <span className="sale-offer-smaller">Flash sale</span>
              </span>
              <span className="sale-description">on certain shoes</span>
              <div className="sale-button">Shop now</div>
              <img src="/images/saleShoe.png" className="offer-image" />
            </div>
            <div className="dealNavigation">
              <span class="material-symbols-outlined arrow">
                arrow_back_ios_new
              </span>
              <p className="circleGroup">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </p>
              <span class="material-symbols-outlined arrow">
                arrow_forward_ios
              </span>
            </div>
          </div>
          <div className="contactLogos">
            <svg
              width="24"
              height="145"
              viewBox="0 0 24 145"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37 0 0 5.14625 0 11.5C0 16.5888 3.435 20.8869 8.205 22.4106C8.805 22.5112 9.03 22.1663 9.03 21.8644C9.03 21.5913 9.015 20.6856 9.015 19.7225C6 20.2544 5.22 19.0181 4.98 18.3713C4.845 18.0406 4.26 17.02 3.75 16.7469C3.33 16.5312 2.73 15.9994 3.735 15.985C4.68 15.9706 5.355 16.8188 5.58 17.1637C6.66 18.9031 8.385 18.4144 9.075 18.1125C9.18 17.365 9.495 16.8619 9.84 16.5744C7.17 16.2869 4.38 15.295 4.38 10.8962C4.38 9.64563 4.845 8.61062 5.61 7.80562C5.49 7.51813 5.07 6.33937 5.73 4.75812C5.73 4.75812 6.735 4.45625 9.03 5.93688C9.99 5.67812 11.01 5.54875 12.03 5.54875C13.05 5.54875 14.07 5.67812 15.03 5.93688C17.325 4.44188 18.33 4.75812 18.33 4.75812C18.99 6.33937 18.57 7.51813 18.45 7.80562C19.215 8.61062 19.68 9.63125 19.68 10.8962C19.68 15.3094 16.875 16.2869 14.205 16.5744C14.64 16.9338 15.015 17.6238 15.015 18.7019C15.015 20.24 15 21.4762 15 21.8644C15 22.1663 15.225 22.5256 15.825 22.4106C20.565 20.8869 24 16.5744 24 11.5C24 5.14625 18.63 0 12 0Z"
                fill="#3F3F3F"
              />
              <path
                d="M24 43.3075C23.1172 43.6993 22.1691 43.9641 21.1722 44.0831C22.1896 43.4739 22.969 42.5084 23.3371 41.3594C22.3706 41.9334 21.3129 42.3375 20.2098 42.5542C19.3122 41.5974 18.0322 41 16.6161 41C13.8978 41 11.6934 43.2036 11.6934 45.9234C11.6934 46.3087 11.7368 46.6847 11.8202 47.0457C7.72833 46.84 4.1006 44.88 1.67237 41.9016C1.24837 42.629 1.00567 43.4747 1.00567 44.3771C1.00567 46.085 1.87497 47.5919 3.19584 48.4746C2.41391 48.4503 1.64913 48.2393 0.965445 47.859V47.9212C0.965445 50.3069 2.66228 52.2961 4.91473 52.7485C4.50096 52.8619 4.06673 52.9211 3.6175 52.9211C3.29987 52.9211 2.99172 52.8911 2.69069 52.8345C3.31722 54.7898 5.1355 56.2131 7.28933 56.2534C5.60431 57.5742 3.48112 58.3616 1.17509 58.3616C0.77791 58.3616 0.385365 58.3379 0 58.2915C2.17918 59.6888 4.7666 60.5045 7.54708 60.5045C16.6026 60.5045 21.5552 53.0024 21.5552 46.4964C21.5552 46.2828 21.5505 46.0708 21.5402 45.8596C22.5051 45.1616 23.338 44.2975 24 43.3075Z"
                fill="#3F3F3F"
              />
              <path
                d="M8.00096 90.5045C8.00096 88.2955 9.79134 86.5042 12.0005 86.5042C14.2096 86.5042 16.001 88.2955 16.001 90.5045C16.001 92.7136 14.2096 94.5048 12.0005 94.5048C9.79134 94.5048 8.00096 92.7136 8.00096 90.5045ZM5.83838 90.5045C5.83838 93.9077 8.59714 96.6664 12.0005 96.6664C15.4038 96.6664 18.1626 93.9077 18.1626 90.5045C18.1626 87.1013 15.4038 84.3427 12.0005 84.3427C8.59714 84.3427 5.83838 87.1013 5.83838 90.5045ZM16.9665 84.0983C16.9662 84.8936 17.6106 85.5386 18.406 85.5389C19.2013 85.5392 19.8463 84.8948 19.8466 84.0995C19.8469 83.3042 19.2024 82.6592 18.4071 82.6589H18.4065C17.6116 82.6593 16.9672 83.3034 16.9665 84.0983ZM7.15229 100.272C5.98229 100.219 5.34636 100.024 4.92375 99.8594C4.36347 99.6413 3.96371 99.3815 3.54341 98.9618C3.1231 98.5421 2.86293 98.1428 2.64577 97.5825C2.48103 97.1601 2.28614 96.524 2.23295 95.3541C2.17477 94.0892 2.16316 93.7092 2.16316 90.5046C2.16316 87.3 2.17573 86.9211 2.23295 85.6552C2.28624 84.4852 2.48256 83.8504 2.64577 83.4267C2.86389 82.8665 3.12368 82.4667 3.54341 82.0464C3.96313 81.6261 4.36251 81.366 4.92375 81.1488C5.34617 80.9841 5.98229 80.7892 7.15229 80.736C8.41723 80.6779 8.79722 80.6662 12.0005 80.6662C15.2037 80.6662 15.5841 80.6788 16.8501 80.736C18.0201 80.7893 18.655 80.9856 19.0787 81.1488C19.6389 81.366 20.0387 81.6267 20.459 82.0464C20.8793 82.4661 21.1385 82.8665 21.3566 83.4267C21.5214 83.8491 21.7163 84.4852 21.7694 85.6552C21.8276 86.9211 21.8392 87.3 21.8392 90.5046C21.8392 93.7092 21.8276 94.0881 21.7694 95.3541C21.7162 96.524 21.5203 97.1599 21.3566 97.5825C21.1385 98.1428 20.8787 98.5425 20.459 98.9618C20.0393 99.3812 19.6389 99.6413 19.0787 99.8594C18.6562 100.024 18.0201 100.219 16.8501 100.272C15.5852 100.33 15.2052 100.342 12.0005 100.342C8.79578 100.342 8.41685 100.33 7.15229 100.272ZM7.05292 78.5772C5.7754 78.6354 4.90244 78.8379 4.14007 79.1346C3.35053 79.4409 2.68216 79.8519 2.01426 80.5187C1.34636 81.1855 0.936421 81.8549 0.630073 82.6444C0.333421 83.4072 0.130853 84.2797 0.0726749 85.5572C0.0135365 86.8366 0 87.2457 0 90.5045C0 93.7633 0.0135365 94.1724 0.0726749 95.4519C0.130853 96.7294 0.333421 97.6018 0.630073 98.3646C0.936421 99.1536 1.34645 99.8238 2.01426 100.49C2.68206 101.157 3.35053 101.567 4.14007 101.874C4.90388 102.171 5.7754 102.374 7.05292 102.432C8.33313 102.49 8.74153 102.505 12.0005 102.505C15.2594 102.505 15.6685 102.491 16.948 102.432C18.2257 102.374 19.098 102.171 19.8609 101.874C20.6499 101.567 21.3188 101.157 21.9867 100.49C22.6546 99.8235 23.0637 99.1536 23.3709 98.3646C23.6675 97.6018 23.8711 96.7293 23.9283 95.4519C23.9865 94.1714 24 93.7633 24 90.5045C24 87.2457 23.9865 86.8366 23.9283 85.5572C23.8701 84.2796 23.6675 83.4068 23.3709 82.6444C23.0637 81.8554 22.6535 81.1866 21.9867 80.5187C21.3199 79.8508 20.6499 79.4409 19.8619 79.1346C19.098 78.8379 18.2256 78.6344 16.949 78.5772C15.6695 78.519 15.2604 78.5045 12.0014 78.5045C8.74249 78.5045 8.33313 78.5181 7.05292 78.5772Z"
                fill="#3F3F3F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.6755 144.505C23.407 144.505 24 143.912 24 143.18V121.829C24 121.097 23.4069 120.505 22.6755 120.505H1.32458C0.592867 120.505 0 121.097 0 121.829V143.18C0 143.912 0.592867 144.505 1.32458 144.505H22.6755V144.505ZM16.5596 144.505V135.211H19.6793L20.1463 131.588H16.5595V129.276C16.5595 128.227 16.8507 127.513 18.3546 127.513L20.2726 127.512V124.272C19.9408 124.228 18.8022 124.129 17.4777 124.129C14.7123 124.129 12.8191 125.817 12.8191 128.917V131.588H9.69143V135.211H12.8191V144.505H16.5596V144.505Z"
                fill="#3F3F3F"
              />
            </svg>
          </div>
        </div>
        <div className="main-right"></div>
      </div>
    </div>
  );
}
