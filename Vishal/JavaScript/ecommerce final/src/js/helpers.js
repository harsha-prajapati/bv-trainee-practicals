import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request Denied'));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const fetchPro = fetch(url);
    const result = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await result.json();
    if (!result.ok) throw new Error(`${data.message},(${result.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
