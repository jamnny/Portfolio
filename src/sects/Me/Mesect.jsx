import styles from './MesectStyles.module.css';
import meew from '../../assets/meew.jpg';
import sun from '../../assets/sun.gif';
import moon from '../../assets/moon.gif';
import x from '../../assets/twitter.gif';
import fb from '../../assets/facebook.gif';
import git from '../../assets/github.gif';
import resume from '../../assets/resume.jpg';
import { useTheme } from '../../common/ThemeContext';


function Mesect() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;

    return (
        <section id='me' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
                <img className={styles.meew} src={meew} alt="Profile Picture" />
                
            </div>
            <div className={styles.info}>
                <h1>
                    Jam William
                    <br />
                    Lazaga Belano
                </h1>
                <h2>Programmer</h2>
                <br />
                <span>
                    <a href="https://x.com/Jamnny2" target='_blank'>
                        <img src={x} alt="Twitter Icon" />
                    </a>
                    <a href="https://github.com/jamnny" target='_blank'>
                        <img src={git} alt="Github Icon" />
                    </a>
                    <a href="https://www.facebook.com/Jamnny09" target='_blank'>
                        <img src={fb} alt="Facebook Icon" />
                    </a>
                </span>
                <br />
                <p className={styles.message}>
                    Don't forget to face everything with a smile on your face!! Happiness is the best medicine!!
                </p>
                <br />
                <a href={resume} download>
                    <button className='hover'>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Mesect