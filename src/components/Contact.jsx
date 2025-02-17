import "./Contact.module.css";
import styles from "../components/Contact.module.css"

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      <p>9518082810</p>
      
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={"Contact/emailIcon.png"} alt="Email icon" />
        <a href="mailto:piyushmanchanda983@gmail.com">piyushmanchanda983@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={"Contact/linkedinIcon.png"}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/piyush-manchanda-527572228/">LinkedIn</a>
      </li>
      <li className={styles.link}>
        <img src={"Contact/githubIcon.png"} alt="Github icon" />
        <a href="https://github.com/Puru3116">github</a>
      </li>
     
    </ul>
  </footer>
  )
}

export default Contact
