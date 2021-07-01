import { Item } from "./index";
import "../../assets/styles/Post.css";

const Post = ({mainScreen, handleMainScreen}) => {
  const items = ["タイトル", "目的", "わからないこと", "試したこと"];

  return (
    (mainScreen !== "Post") ? null :
    <div className="post">
      <div className="postContent_wrapper">
        <div className="postContent">
          {items.map((item, idx) => (
            <Item key={idx} title={item} />
          ))}
        </div>
      </div>
      <footer className="postFooter">
        <button className="postFooter_button postFooter_button-cancel" onClick={() => { handleMainScreen("Timeline") }}>キャンセル</button>
        <button className="postFooter_button postFooter_button-post">投稿</button>
      </footer>
    </div>
  )
}

export default Post;