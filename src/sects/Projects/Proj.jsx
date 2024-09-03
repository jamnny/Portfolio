import styles from './ProjectStyles.module.css';
import clinic from '../../assets/clinic.png';
import vidcall from '../../assets/vidcall.png';
import pay from '../../assets/pay.png';
import lend from '../../assets/lend.png';
import dart from '../../assets/dart.png';
import basic from '../../assets/basic.png';



function Proj() {
    return (
        <section id="project" className={styles.container}>
            <h2 className="Title">PROJECTS</h2>
            <div className={styles.projectsContainer}>
                <a href="https://github.com/" target="_blank" className="hover">
                    <img className={styles.dd} src={clinic} alt="Clinic logo" />
                    <h3 className={styles.h3}>Web Responsive Application</h3>
                    <p className={styles.des}>Web Responsive Tele-Counseling Application</p>
                </a>
                <a href="https://github.com/" target="_blank" className="hover">
                    <img className={styles.dd} src={vidcall} alt="VideoCall logo" />
                    <h3 className={styles.h3}>Video Call Web Application</h3>
                    <p className={styles.des}>Video call using agora, Laravel, php, MySQL, html, CSS, java script</p>
                </a>
            </div>
            <div className={styles.projectsContainer}>
                <a href="https://github.com/" target="_blank" className="hover">
                    <img className={styles.dd} src={pay} alt="Payments logo" />
                    <h3 className={styles.h3}>Online Payment</h3>
                    <p className={styles.des}>Online Payment using paymongo, Laravel, php, MySQL, html, CSS, java script</p>
                </a>
                <a href="https://github.com/" target="_blank" className="hover">
                    <img className={styles.dd} src={lend} alt="Lending logo" />
                    <h3 className={styles.h3}>Lending System Application</h3>
                    <p className={styles.des}>First application I made using java</p>
                </a>
            </div>
            <div className={styles.projectsContainer}>
                <a href="https://github.com/" target="_blank" className="hover">
                    <img className={styles.dd} src={dart} alt="Reminder logo" />
                    <h3 className={styles.h3}>Reminder Application</h3>
                    <p className={styles.des}>First android application I made using dart, flutter, and android studio</p>
                </a>
                <a href="https://github.com/" target="_blank" className="hover">
                    <img className={styles.dd} src={basic} alt="BasicLending logo" />
                    <h3 className={styles.h3}>Basic Recording System</h3>
                    <p className={styles.des}>Basic web app using php, MySQL, html, CSS</p>
                </a>
            </div>
        </section>
    );
}

export default Proj