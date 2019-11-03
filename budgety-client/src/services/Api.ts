import axios from 'axios'

export default class Api {
  createAxios () {
    return axios.create({
      baseURL: `http://localhost:8081`
    })
  }
}
