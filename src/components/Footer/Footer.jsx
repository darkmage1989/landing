import FooterLink from "../FooterLink/FooterLink";
import style from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import YouTubeSvg from "../IconsSvg/YouTubeSvg";
import VkSvg from "../IconsSvg/VkSvg";
import TgSvg from "../IconsSvg/TgSvg";
import UpSvg from "../IconsSvg/UpSvg";
import PhoneSvg from "../IconsSvg/PhoneSvg";
import MailSvg from "../IconsSvg/MailSvg";
import License from "../IconsSvg/LicenseSvg";
import SkSvg from "../IconsSvg/SkSvg";
import classNames from "classnames";
function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.footer_nav__bar}>
        <Logo />
        <div className={style.footer__social__box}>
          <FooterLink icon={<YouTubeSvg />} />
          <FooterLink icon={<VkSvg color={"#302A3E"} />} />
          <FooterLink icon={<TgSvg />} />
        </div>
        <div className={style.footer_button_box}>
          <Button text={"Наверх"} img={<UpSvg />} />
        </div>
      </section>
      <span className={style.footer__line}></span>
      <section className={style.footer__info}>
        <article>
          <h3 className={style.footer__subtitle}>Выслушаем и поможем 😉✌</h3>
          <div className={style.contact__box}>
            <div className={style.link__box}>
              <PhoneSvg />
              <a className={style.contact__link} href="+7 (952) 722-87-33">
                {" "}
                +7 (952) 722-87-33
              </a>
            </div>
            <div className={style.link__box}>
              <MailSvg />
              <a className={style.contact__link} href="school@neofamily.ru">
                school@neofamily.ru
              </a>
            </div>
          </div>
          <span className={style.footer_address}>
            197101, г. Санкт-Петербург, вн.тер.г. муниципальный округ Посадский,
            ул. <br /> Рентгена, д. 9Б, помещ. 1-Н, офис 9
          </span>
          <div className={style.license__box}>
            <div className={style.license}>
              <License />
              <span className={style.license__text}>
                Государственная лицензия
              </span>
            </div>
            <div className={style.license}>
              <SkSvg />
              <span className={style.license__text}>Участник Skolkovo</span>
            </div>
          </div>
        </article>
        <article>
          <h3 className={style.footer__subtitle}>
            NeoFamily - умная подготовка к ЕГЭ
          </h3>
          <div className={style.footer__nav__link__box}>
            <a href="/#">Предметы</a>
            <a href="/#">Теория</a>
            <a href="/#">Повторение</a>
            <a href="/#">Тесты</a>
          </div>
          <div className={style.footer__docs__box}>
            <a className={style.footer__docs__link} href="/#">
              Политика конфиденциальности
            </a>
            <a className={style.footer__docs__link} href="/#">
              Оферта
            </a>
            <a className={style.footer__docs__link} href="/#">
              Пользовательское соглашение
            </a>
          </div>
        </article>
        <article>
          <h3 className={style.footer__subtitle}>Проекты</h3>
          <a className={style.project__link} href="/#">
            NeoFamily
          </a>
        </article>
      </section>
      <span className={classNames([style.footer__line, style.footer__line_requisites])}></span>
      <div className={style.requisites__box}>
            <span className={style.requisites__text}>© ООО “НЕОФЭМИЛИ” </span>
            <span className={style.requisites__text}>ИНН: 7813660849</span>
            <span className={style.requisites__text}>КПП: 781301001</span>
            <span className={style.requisites__text}>ОГРН: 1227800019105</span>
          </div>
    </footer>
  );
}

export default Footer;
