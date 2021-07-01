const Card = ({title}) => {
  // contextで科目名切り替え
  return (
    <button className="sidebarInner_button">{title}</button>
  )
}

export default Card;