import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.png";
export default function Info() {
  return (
    <div className="Info">
      <h1 className="name">Nehemiah Yu</h1>
      <h3>Frontend Developer</h3>
      <h4>nehemiahyu.com</h4>
      <div class="Email-Button">
        <button ></button>
        <img  src={emailIcon}></img>
        <h4 id="email-text">Email </h4>
      </div>
      <div class="Linkedin-Button">
        <button ></button>
        <img  src={linkedinIcon}></img>

      </div>
    </div>
  );
}
