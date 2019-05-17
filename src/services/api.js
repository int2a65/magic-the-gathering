import client  from 'axios'

export const axios = client.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const createRequest = async (method, path, params, config) => {
  try {
    let request;

    switch (method) {
      case 'get':
        request = axios.get(path, params)
        break
      case 'post':
        request = axios.post(path, params, config)
        break
    }
    return await request
  } catch (err) {
      throw err
  }
}

export function get (path, payload, success, err) {
  return createRequest('get', path, payload, success, err)
}