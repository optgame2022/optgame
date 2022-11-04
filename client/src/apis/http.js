import axios from 'axios'

const token = '738a72bd5f19e790e658c8a962859c34618632f7ab65b94e024850f4b007f1e8'
export const HTTP = axios.create({
  baseURL: `http://localhost:1337`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
