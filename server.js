const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('Public'))

app.listen(3000 , function(error) {
    if (error) {
        console.log('something went wrong' , error)
    } else {
        console.log('server is now listening on port 3000')
    }
})