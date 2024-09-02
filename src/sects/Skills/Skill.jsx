import styles from './SkillStyles.module.css';
import checked from '../../assets/checked.gif';
import SkillList from '../../common/SkillList';

function Skill() {
    return (
        <section id="skillss" className={styles.container}>
            <h2>Skills</h2>
            <div className={styles.skillList}>
                <SkillList
                    src={checked}
                    skill="HTML"
                />
                <SkillList
                    src={checked}
                    skill="CSS"
                />
                <SkillList
                    src={checked}
                    skill="PHP"
                />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList
                    src={checked}
                    skill="MySQL"
                />
                <SkillList
                    src={checked}
                    skill="JavaScript"
                />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList
                    src={checked}
                    skill="Dart"
                />
                <SkillList
                    src={checked}
                    skill="React"
                />
                <SkillList
                    src={checked}
                    skill="Bootstrap"
                />
            </div>
        </section>
  )
}

export default Skill