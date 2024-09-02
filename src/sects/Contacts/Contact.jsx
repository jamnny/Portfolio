import styles from './ContactStyles.module.css';
import iam from '../../assets/iam.jpg';
import x from '../../assets/twitter.gif';
import fb from '../../assets/facebook.gif';
import ig from '../../assets/ig.gif';
import yt from '../../assets/yt.gif';
import tt from '../../assets/tt.gif';

function Contact() {
    return (
        <section id='me' className={styles.container}>
            <div className={styles.infoo}>
            <div className={styles.me}>
                <h2 className="Title">My other Socials</h2>
            </div>
            <div className={styles.meContainer}>
                <img className={styles.meew} src={iam} alt="Profile Picture" />
            </div>
            <div className={styles.projectsContainer}>
                <a href="https://x.com/Jamnny2" target='_blank' className="hover">
                    <img className={styles.dd} src={x} alt="Twitter Icon" />
                    <h3>X</h3>
                </a>
                <a href="https://www.instagram.com/_jamnny_/" target='_blank' className="hover">
                    <img className={styles.dd} src={ig} alt="Instagram Icon" />
                    <h3>Instagram</h3>
                </a>
            </div>
            <div className={styles.projectsContainer}>
                <a href="https://www.facebook.com/Jamnny09" target='_blank' className="hover">
                    <img className={styles.dd} src={fb} alt="Facebook Icon" />
                    <h3>Facebook</h3>
                </a>
                <a href="https://www.tiktok.com/@jamnny09?lang=en" target='_blank' className="hover">
                    <img className={styles.dd} src={tt} alt="Tiktok Icon" />
                    <h3>Tiktok</h3>
                </a>
                <a href="https://www.youtube.com/@ytjamnny6752" target='_blank' className="hover">
                    <img className={styles.dd} src={yt} alt="Youtube Icon" />
                    <h3>Youtube</h3>
                </a>
                </div>
            </div>
        </section>
    );
}

export default Contact