
function SkillList({ src, skill }) {
  return (
      <span>
          <img src={src} alt="Chacked Icon" />
          <p>{skill}</p>
      </span>
  )
}

export default SkillList