import firebase from "../../../firebase";
const db = firebase.firestore();

 export async function getCollection(document, colection, orderby, limit,doc ) {
     let snapshot;

     if(typeof orderby !== 'undefined' && typeof limit !== 'undefined') {
         snapshot = await db.collection("data").doc(document)
             .collection(colection).orderBy(orderby).limit(limit).startAfter(doc).get();
     } else if (typeof orderby !== 'undefined' && typeof limit === 'undefined') {
         snapshot = await db.collection("data").doc(document)
             .collection(colection).orderBy(orderby).get();
     } else  {
         snapshot = await db.collection("data").doc(document)
             .collection(colection).get();
     }

     let lastVisible = snapshot.docs[snapshot.docs.length-1];

    return snapshot.docs.map( (doc, index) => {
        let last = null;
        if(snapshot.docs.length-1 === index) {
            last = {'lastElement':lastVisible};
        }
       // console.log('doc', doc)
        return { ...doc.data(), 'id': doc.id, ...last};
    });
}

export async function getDocument(document, colection, secondDocument) {
    const snapshot = await db.collection("data").doc(document)
        .collection(colection).doc(secondDocument);

    snapshot.get().then(function(doc) {
        if (doc.exists) {
            return {...doc.data(), id: doc.id};
        } else {
            //doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
