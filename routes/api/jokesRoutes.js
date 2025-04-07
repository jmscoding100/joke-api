const express = require('express')
const router = express.Router()
const axios = require('axios')


//create count
let count

axios.get('https://api.sampleapis.com/jokes/goodJokes')
    .then(res => count = res.data.length)

//localhost:3000/jokes
router.get('/', (req, res)=> {
    const url = `https://api.sampleapis.com/jokes/goodJokes`


    axios.get(url).then(resp => {
        res.render('pages/jokes', {
            title: 'A lot of Jokes',
            name: 'A lot of Jokes',
            data: resp.data
        })
    })
})

module.exports = router