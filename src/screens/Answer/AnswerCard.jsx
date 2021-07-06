import { useState } from "react";

const AnswerCard = ({answer, thumbsNum}) => {
  const [thumbs, setThumbs] = useState(thumbsNum);

  const handleClick = () => {
    setThumbs(thumbs+1);
    // await db.collection("subjects").doc(docId).collection("posts").doc("JLw6ydIrYB9TPxKlTQXb").update({
      // "answers": firebase.firestore.FieldValue.increment(1)
    // });
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