#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  Promise.all([promise1, promise2])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`)
    })
    .catch(()=> console.log('Signup system offline'))
}
