export const privacyPost = (id, privacyState) => {
    const firestore = firebase.firestore();
    return firestore.collection('posts').doc(id).update({
        privacy: privacyState
    })
}

export const likePlus = (id, like) => {
    const firestore = firebase.firestore();
    return firestore.collection('posts').doc(id).update({
        likes: like
    })
}


export const addComment = (input, user, uid, like, privacyState,postFatherId) => {
    return firestore().collection(`/posts/${postFatherId}/comments`).add({  post: input,
        user: user,
        uid: uid,
        likes: like,
        privacy: privacyState})
  }
  
