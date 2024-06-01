#!/usr/bin/env node

export default function handleResponseFromAPI(promise) {
  return promise
    .then((res) => res)
    .catch((err) => err.message)
    .finally(() => console.log('Got a response from the API'));
}
