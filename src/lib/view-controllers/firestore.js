import { getRealTimeData, addPost, deletePost, editPost, likePlus, updateUser, privacyPost } from '../controller-firebase/firestore.js'
import { currentUser } from '../controller-firebase/auth.js';

export const getUser = (cb) => {
  getRealTimeData(currentUser().uid, (doc) => {
    if (doc && doc.exists) {
      const myData = doc.data();
      cb(myData)
    }
  });
}

export const addNewPost = (input, privacy) => {
  const user = currentUser()
  addPost(input, user.displayName, user.uid, 0, privacy)
  .then(ref => {
    console.log('Added document with ID: ', ref.id);
  });
}


export const deletePosts = (publi) => {
  if (currentUser().uid === publi.doc.uid) {
    deletePost(publi.id)
  }
}

export const editPosts = (publi, input) => {
  if (currentUser().uid === publi.doc.uid) {
    editPost(publi.id, input)
  }
}

export const editPrivacy = (publi, privacy) => {
  if (currentUser().uid === publi.doc.uid) {
    privacyPost(publi.id, privacy)
  }
}

export const addingLikes = (publi, like) => {
  likePlus(publi.id, like)
}

export const updateUserDataName = (user, data) => {
  updateUser(user, data)
}
