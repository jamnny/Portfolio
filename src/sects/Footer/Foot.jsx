import styles from './FooterStyles.module.css';

function Foot() {
    return (
        <section id="footer" className={styles.container}>
            <div className={styles.styles}>
                <a href='https://icons8.com/icons' target="_blank">
                Credits to icons8 for the icons.
                </a>
                <a>
                    All rights reserved.
                </a>
            </div>
        </section>
    );
}

export default Foot