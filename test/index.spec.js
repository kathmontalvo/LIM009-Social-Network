// import MockFirebase from '../node_modules/mock-cloud-firestore/dist/mock-cloud-firestore';
// var jest = require('jest');
// jest.mock(global.firebase, () => {
//   return mocksdk;
// });
// mocksdk.firestore().flush();
// import firebasemock from 'firebase-mock'
// const mockauth = new firebasemock.MockFirebase(fixtureUser)

import MockFirebase from '../_mocks_/firebase-mock.js';
import { funcLogin } from "../src/lib/index";

global.firebase = MockFirebase();

describe('funcLogin', () => {
  it('deberia retornar el email: abc@gmail.com', () => {
    return funcLogin('abc@gmail.com', '123456')
      .then(user => {
        expect(user.email).toBe('abc@gmail.com')
      });
  });
});
