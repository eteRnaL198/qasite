const Card = ({title, handleSidebarOpen}) => {
  // contextで科目名切り替え
  const handleClick = () => {
    // タイムラインのデータ切り替え
    handleSidebarOpen(false);
  }

  return (
    <button className="sidebarInner_button" onClick={handleClick}>{title}</button>
  )
}

export default Card;