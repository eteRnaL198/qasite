import Icon from "../../assets/images/user.jpg";

const Card = ({title}) => {
  return (
    <button className="timelineCard">
      <img className="timelineCard_icon" src={Icon} alt="user" />
      <p className="timelineCard_title">{title}</p>
    </button>
  )
} 

export default Card;