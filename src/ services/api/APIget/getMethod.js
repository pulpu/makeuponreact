import firebase from "../../../firebase";
const db = firebase.firestore();

 export async function getCollection(document, colection) {
    const snapshot = await db.collection("data").doc(document)
        .collection(colection).get();

    return snapshot.docs.map(doc => {
        return { ...doc.data(), 'id': doc.id};
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
