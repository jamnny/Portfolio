import styles from './CertsStyles.module.css'
import badge from '../../assets/badge.png';
import nc2 from '../../assets/nc2.png';
import CertificationCard from '../../common/CertificationCard';

function Certs() {
    return (
        <section id="project" className={styles.container}>
            <h2 className="Title">CERTIFICATIONS</h2>
            <div className={styles.projectsContainer}>
                <CertificationCard
                    src={nc2}
                    h3="National Certificate 2"
                />
                <CertificationCard
                    src={badge}
                    h3="Network Security"
                />
            </div>
            
        </section>
    );
}
export default Certs