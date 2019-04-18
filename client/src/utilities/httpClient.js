import axios from 'axios'
//Having this in a separate file may be helpful if in the future modifications to the headers are desired (using JWTs, for example)
const httpClient = axios.create()

export default httpClient