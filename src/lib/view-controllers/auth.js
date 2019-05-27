import { funcRegister, funcLogin, funcGoogle, funcFacebook, signOut } from '../controller-firebase/auth.js';
import { getUserData } from '../controller-firebase/posts.js'
import { ShowErrorMessaggeDom } from '../../ui/login.js'

const changeHash = (hash) => {
  location.hash = hash;
}

export const signOutUser = () => {
  signOut();
  changeHash('#')
}


export const login = (e) => {
  const emailLogInEmail = document.querySelector('#email-login')
  const passwordLogInEmail = document.querySelector('#password-login');
  funcLogin(emailLogInEmail.value, passwordLogInEmail.value)
    .then(result => {
      changeHash('#/content')
      getUserData(result.user)
    })
    .catch(error => ShowErrorMessaggeDom(error));

}

export const googleLogin = () => {
  funcGoogle()
    .then(result => {
      changeHash('#/content')
      getUserData(result.user)
    })
    .catch(error => ShowErrorMessaggeDom(error))
}

export const facebookLogin = () => {
  funcFacebook()
    .then(result => {
      changeHash('#/content');
      getUserData(result.user)
    })
    .catch(error => ShowErrorMessaggeDom(error))
}

export const register = (input) => {
  const emailSignIn = document.getElementById('email-signin');
  const passwordSignIn = document.getElementById('password-signin');

  funcRegister(emailSignIn.value, passwordSignIn.value)
    .then(result => {
      changeHash('#/content');
      getUserData(result.user, input.value)
    })
    .catch(error => ShowErrorMessaggeDom(error))
}