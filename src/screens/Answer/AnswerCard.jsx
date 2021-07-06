import { useState } from "react";

const AnswerCard = ({answer, thumbsNum}) => {
  const [thumbs, setThumbs] = useState(thumbsNum);

  const handleClick = () => {
    setThumbs(thumbs+1);
    // const db = firebase.firestore();
    // (async () => {
    //   await db.collection("subjects").doc(subjectId).collection("posts").doc(postId).update({
    //     "thumbs": firebase.firestore.FieldValue.
    //   });
    // })();
  }

  return (
    <div>
      <p>{answer}</p>
      <button onClick={handleClick}>thumbs-up</button>
      <p>{thumbs}</p>
    </div>
  )
}

export default AnswerCard;