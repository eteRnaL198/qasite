const Item = ({title}) => {
  return (
    <div className="postContent_inner">
      <p className="postContent_title">{title}</p>
      <textarea className="postContent_text" cols="30" rows="2"></textarea>
    </div>
  )
}

export default Item;