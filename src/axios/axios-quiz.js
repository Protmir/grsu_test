import axios from 'axios'

export default axios.create({
    baseURL: 'https://mat-test-grsu-js-default-rtdb.firebaseio.com/'
})