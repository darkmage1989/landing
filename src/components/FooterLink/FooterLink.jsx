import style from "./FooterLink.module.css";
function FooterLink({ icon }) {
  return (
    <>
      <a className={style.link} href="#">
        {icon}
      </a>
    </>
  );
}

export default FooterLink;
