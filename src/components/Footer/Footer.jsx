import FooterLink from "../FooterLink/FooterLink";
import style from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.footer_nav__bar}>
        <Logo />
        <div className={style.footer__social__box}>
          <FooterLink
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M30.0538 8.56004C29.8954 7.92725 29.5728 7.34747 29.1186 6.87925C28.6645 6.41103 28.0948 6.07095 27.4671 5.89337C25.1738 5.33337 16.0004 5.33337 16.0004 5.33337C16.0004 5.33337 6.8271 5.33337 4.53377 5.94671C3.9061 6.12429 3.33641 6.46436 2.88223 6.93258C2.42806 7.4008 2.10549 7.98059 1.9471 8.61337C1.52739 10.9408 1.32208 13.3018 1.33377 15.6667C1.31881 18.0494 1.52413 20.4284 1.9471 22.7734C2.12172 23.3865 2.45151 23.9442 2.90463 24.3927C3.35774 24.8411 3.91886 25.1651 4.53377 25.3334C6.8271 25.9467 16.0004 25.9467 16.0004 25.9467C16.0004 25.9467 25.1738 25.9467 27.4671 25.3334C28.0948 25.1558 28.6645 24.8157 29.1186 24.3475C29.5728 23.8793 29.8954 23.2995 30.0538 22.6667C30.4702 20.3568 30.6755 18.0138 30.6671 15.6667C30.6821 13.284 30.4767 10.905 30.0538 8.56004V8.56004Z"
                  stroke="#302A3E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 20.0266L20.6667 15.6666L13 11.3066V20.0266Z"
                  stroke="#302A3E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <FooterLink
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28.7723 9.13997C28.959 8.51997 28.7723 8.06531 27.8897 8.06531H24.9657C24.2217 8.06531 23.8817 8.45864 23.695 8.89064C23.695 8.89064 22.2083 12.516 20.1017 14.8666C19.4217 15.5506 19.111 15.7666 18.7403 15.7666C18.555 15.7666 18.2857 15.5506 18.2857 14.9306V9.13997C18.2857 8.39597 18.071 8.06531 17.451 8.06531H12.8563C12.3923 8.06531 12.1123 8.40931 12.1123 8.73731C12.1123 9.44131 13.1657 9.60397 13.2737 11.588V15.892C13.2737 16.8346 13.1043 17.0066 12.731 17.0066C11.7403 17.0066 9.32966 13.368 7.89899 9.20264C7.62033 8.39331 7.33899 8.06664 6.59233 8.06664H3.66966C2.83366 8.06664 2.66699 8.45997 2.66699 8.89197C2.66699 9.66797 3.65766 13.508 7.28166 18.5866C9.69766 22.0546 13.099 23.9346 16.1977 23.9346C18.055 23.9346 18.2843 23.5173 18.2843 22.7973V20.176C18.2843 19.3413 18.4617 19.1733 19.0497 19.1733C19.4817 19.1733 20.2257 19.392 21.9603 21.0626C23.9417 23.044 24.2697 23.9333 25.383 23.9333H28.3057C29.1403 23.9333 29.5577 23.516 29.3177 22.692C29.055 21.872 28.1083 20.6786 26.8523 19.2666C26.1697 18.4613 25.1497 17.5946 24.839 17.1613C24.4057 16.6026 24.531 16.356 24.839 15.86C24.8403 15.8613 28.4017 10.8453 28.7723 9.13997V9.13997Z"
                  stroke="#302A3E"
                  stroke-width="2"
                />
              </svg>
            }
          />
          <FooterLink
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M12.0003 18V25.3333L16.3323 20.964M28.0003 6.66663L2.66699 16.6666L12.0003 18L28.0003 6.66663ZM28.0003 6.66663L24.667 26.6666L12.0003 18L28.0003 6.66663ZM28.0003 6.66663L12.0003 18L28.0003 6.66663Z"
                  stroke="#302A3E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <Button
          text={"Наверх"}
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12.7077 7.29352L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L11.2923 7.29352L11.2929 7.29289C11.2951 7.29072 11.2973 7.28855 11.2995 7.2864C11.297 7.28876 11.2946 7.29113 11.2923 7.29352M11.6172 7.07588C11.8617 6.97471 12.1383 6.97471 12.3828 7.07588C12.2649 7.02699 12.1356 7 12 7C11.8644 7 11.7351 7.02699 11.6172 7.07588ZM12.7005 7.2864C12.7027 7.28855 12.7049 7.29072 12.7071 7.29289L12.7077 7.29352"
                fill="#302A3E"
              />
            </svg>
          }
        />
      </section>
      <section className={style.footer__info}>
        <article>
          <h3 className={style.footer__subtitle}>Выслушаем и поможем 😉✌</h3>
          <div className={style.contact__box}>
            <div className={style.link__box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_223_9736)">
                  <path
                    d="M10.0336 3.33329C10.6848 3.46034 11.2832 3.7788 11.7523 4.24792C12.2214 4.71703 12.5399 5.31547 12.6669 5.96663M10.0336 0.666626C11.3865 0.816917 12.648 1.42274 13.6111 2.38463C14.5742 3.34652 15.1816 4.6073 15.3336 5.95996M14.6669 11.28V13.28C14.6677 13.4656 14.6297 13.6494 14.5553 13.8195C14.4809 13.9896 14.3718 14.1424 14.235 14.2679C14.0982 14.3934 13.9367 14.4889 13.7608 14.5484C13.5849 14.6079 13.3985 14.63 13.2136 14.6133C11.1622 14.3904 9.19161 13.6894 7.46028 12.5666C5.8495 11.5431 4.48384 10.1774 3.46028 8.56663C2.3336 6.82743 1.63244 4.84729 1.41361 2.78663C1.39695 2.60227 1.41886 2.41647 1.47795 2.24104C1.53703 2.06562 1.63199 1.90442 1.75679 1.76771C1.88159 1.63099 2.03348 1.52177 2.20281 1.44697C2.37213 1.37218 2.55517 1.33347 2.74028 1.33329H4.74028C5.06382 1.33011 5.37748 1.44468 5.62279 1.65565C5.8681 1.86662 6.02833 2.15959 6.07361 2.47996C6.15803 3.12 6.31458 3.74844 6.54028 4.35329C6.62998 4.59191 6.64939 4.85124 6.59622 5.10055C6.54305 5.34986 6.41952 5.5787 6.24028 5.75996L5.39361 6.60663C6.34265 8.27566 7.72458 9.65759 9.39361 10.6066L10.2403 9.75996C10.4215 9.58072 10.6504 9.45719 10.8997 9.40402C11.149 9.35085 11.4083 9.37026 11.6469 9.45996C12.2518 9.68566 12.8802 9.84221 13.5203 9.92663C13.8441 9.97231 14.1399 10.1354 14.3513 10.385C14.5627 10.6345 14.6751 10.953 14.6669 11.28Z"
                    stroke="#2188F6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_223_9736">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <a className={style.contact__link} href="+7 (952) 722-87-33"> +7 (952) 722-87-33</a>
            </div>
            <div className={style.link__box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66634 2.66663H13.333C14.0663 2.66663 14.6663 3.26663 14.6663 3.99996V12C14.6663 12.7333 14.0663 13.3333 13.333 13.3333H2.66634C1.93301 13.3333 1.33301 12.7333 1.33301 12V3.99996C1.33301 3.26663 1.93301 2.66663 2.66634 2.66663Z"
                  stroke="#2188F6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6663 4L7.99967 8.66667L1.33301 4"
                  stroke="#2188F6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a className={style.contact__link} href="school@neofamily.ru">school@neofamily.ru</a>
            </div>
          </div>
          <span className={style.footer_address}>
            197101, г. Санкт-Петербург, вн.тер.г. муниципальный округ Посадский,
            ул. Рентгена, д. 9Б, помещ. 1-Н, офис 9
          </span>
          <div className={style.license__box}>
            <div className={style.license}>
              <img className={style.license__img} src="fonts/license.svg" alt="license.svg" />
              <span className={style.license__text}>Государственная лицензия</span>
            </div>
            <div className={style.license}>
              <img className={style.license__img} src="fonts/Sk__Участник.svg" alt="Sk__Участник.svg" />
              <span className={style.license__text}>Участник Skolkovo</span>
            </div>
          </div>
          <div className={style.requisites__box}>
            <span className={style.requisites__text}>© ООО “НЕОФЭМИЛИ” </span>
            <span className={style.requisites__text}>ИНН: 7813660849</span>
            <span className={style.requisites__text}>КПП: 781301001</span>
            <span className={style.requisites__text}>ОГРН: 1227800019105</span>
          </div>
        </article>
        <article>
          <h3 className={style.footer__subtitle}>
            NeoFamily - умная подготовка к ЕГЭ
          </h3>
          <div className={style.footer__nav__link__box}>
            <a href="">Предметы</a>
            <a href="">Теория</a>
            <a href="">Повторение</a>
            <a href="">Тесты</a>
          </div>
          <div className={style.footer__docs__box}>
            <a className={style.footer__docs__link} href="">Политика конфиденциальности</a>
            <a className={style.footer__docs__link} href="">Оферта</a>
            <a className={style.footer__docs__link} href="">Пользовательское соглашение</a>
          </div>
        </article>
        <article>
          <h3 className={style.footer__subtitle}>Проекты</h3>
          <a className={style.project__link} href="">NeoFamily</a>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
