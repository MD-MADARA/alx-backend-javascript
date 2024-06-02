import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => results.map((obj) => ({
      status: obj.status,
      value: obj.status === 'fulfilled' ? obj.value : obj.reason.toString(),
    })));
}
