import axios from 'axios'

export async function getProducts() {
  return axios
    .get('http://localhost:3333/items')
    .then((response) => response.data)
}
