#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (err) {
    photo = null;
    user = null;
  }
  return { photo, user };
};

export default asyncUploadUser;
