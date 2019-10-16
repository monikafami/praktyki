import {
    axios
} from 'axios'

axios.get('http://localhost:3000/books')
    .then(res => {
        console.log(res)
    })