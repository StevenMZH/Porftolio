import Social from "../components/Social";

export function Contact() {
  return (
    <div className="section contact">
        <p className="title text-hl">Contact</p>

        <div className="socials">
          <Social img={"linkedin.svg"} alt={"Linkedin"} url={"https://www.linkedin.com/in/steven-mendoza-z/"}/>
          <Social img={"github.svg"} alt={"Github"} url={"https://github.com/StevenMZH"}/>
          <Social img={"instagram.svg"} alt={"Instagram"} url={"https://www.instagram.com/stevenmendozazh/"}/>
        </div>
    </div>
  );
}
export default Contact;
