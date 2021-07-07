const Item = ({name, text, handleChange}) => {
  return (
    <div className="postContent_inner">
      <p className="postContent_title">{text}</p>
      <textarea onChange={(e) => {handleChange(name, e.target.value)}} className="postContent_text" cols="30" rows="2"></textarea>
    </div>
  )
}

export default Item;