#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => ({
  photo: await uploadPhoto(),
  user: await createUser(),
});

export default asyncUploadUser;
