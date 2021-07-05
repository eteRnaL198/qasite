import firebase from "firebase/app";
import "firebase/firestore"
const data = {
  data: [
  {
    "subject": "オブジェクト指向プログラミング",
    "posts": [
      {
        "question": {
          "title": "タイトル",
          "purpose": "これがやりたい",
          "unknown": "ここが理解できない",
          "tried": "ここまでできた"
        },
        "answers": [
          {
            "answer": "こうしたほうがいいよ",
            "thumbs": 10
          },
          {
            "answer": "こうするとできるよ",
            "thumbs": 10
          }
        ]
      },
      {
        "question": {
          "title": "タイトル2",
          "purpose": "これがやりたいんです",
          "unknown": "ここがわかりません",
          "tried": "ここまでやりました"
        },
        "answers" : [
          {
            "answer": "こうするといいですよ",
            "thumbs": 10
          },
          {
            "answer": "こうしたほうがいいですよ",
            "thumbs": 10
          }
        ]
      }
    ]
  },]
}
const subjects = {
  "subject1": {
    "name": "オブジェクト指向プログラミング",
    "posts": [
      {
        "question": {
          "title": "タイトル",
          "purpose": "これがやりたい",
          "unknown": "ここが理解できない",
          "tried": "ここまでできた"
        },
        "answers": [
          {
            "answer": "こうしたほうがいいよ",
            "thumbs": 10
          },
          {
            "answer": "こうするとできるよ",
            "thumbs": 10
          }
        ]
      },
      {
        "question": {
          "title": "タイトル2",
          "purpose": "これがやりたいんです",
          "unknown": "ここがわかりません",
          "tried": "ここまでやりました"
        },
        "answers" : [
          {
            "answer": "こうするといいですよ",
            "thumbs": 10
          },
          {
            "answer": "こうしたほうがいいですよ",
            "thumbs": 10
          }
        ]
      }
    ]
  },
  "subject2": {
    "name": "ハードウェア記述言語",
    "posts": [
      {
        "question": {
          "title": "タイトル2",
          "purpose": "こうしたい",
          "unknown": "ここがわからん",
          "tried": "ここまでがんばった"
        },
        "answers": [
          {
            "answer": "こうしてみて",
            "thumbs": 10
          },
          {
            "answer": "ここがあれだよ",
            "thumbs": 10
          }
        ]
      },
      {
        "question": {
          "title": "タイトル！",
          "purpose": "これがやりたいです",
          "unknown": "ここが理解不能です",
          "tried": "こうやりました"
        },
        "answers" : [
          {
            "answer": "そこまではあってます",
            "thumbs": 10
          },
          {
            "answer": "これで解決します",
            "thumbs": 10
          }
        ]
      }
    ]
  },
}

const writeData = () => {
  if(!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBWD4vpkUljlKnKKTdn01OmCGRuojScPpw",
      authDomain: "qasite-b29ad.firebaseapp.com",
      projectId: "qasite-b29ad",
      storageBucket: "qasite-b29ad.appspot.com",
      messagingSenderId: "386920795770",
      appId: "1:386920795770:web:a6c8e035bf3b3251a4b5c3",
      measurementId: "G-PMLLL2PYWY"
    });
  }

  (async () => {
    const db = firebase.firestore();
    // await db.collection("data").doc("eGTIlnmcicg0pXUMJMkN").set(data);
    // Object.keys(subjects).forEach((subject) => {
      // await db.collectionGroup("subjects").doc(subject).
      // subjects[subject].name;
      // subjects[subject].posts.forEach(post => {
      //   await db.collection("subjects").doc(subject).collection("posts").doc();
      // });
      // subject.posts;
    // });
    const temp = {
      question: {
        title: "たいとる",
        purpose: "もくてき",
      },
      answers: {
        answer: "かいとう",
        thumbs: 5,
      },
    }
    db.collection("subjects").get().then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        console.log(doc);
      })
    })
    await db.collection("subjects").where("name", "==", "ハードウェア記述言語").get().then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
      })
    });
    // db.collection("subjects").doc("subject1").update({
    //   posts: firebase.firestore.FieldValue.arrayUnion(temp)
    // })

  })();
}

export default writeData;