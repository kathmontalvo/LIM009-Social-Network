import { components } from "./ui/index.js";
import { activeUser, currentUser } from "./lib/controller-firebase/auth.js"
import { getRealTimePost } from './lib/controller-firebase/posts.js'

const changeRoute = (hash) => {
  const mainSection = document.getElementById('main');
  mainSection.innerHTML = '';

  switch (hash) {
    case '#':
    case '':
    case '#/': {
      return mainSection.appendChild(components.login());
    };
    case '#/register': {
      return mainSection.appendChild(components.register());
    };
    case '#/content': {
      activeUser(() => {
        if (currentUser()) { //observaador
          getRealTimePost(posts => { 
            mainSection.innerHTML = ''
            return mainSection.appendChild(components.content(posts));
          })
        }
      })
    };
  }

};

export const initRoute = () => {
  changeRoute(window.location.hash);
  window.addEventListener('hashchange', () => changeRoute(window.location.hash))
};
