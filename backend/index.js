const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/test', function(req, res) {
  if(req.body.id == 'kaitori' && req.body.pass == 'web1111'){
    res.send({
      message: 'OK'
    })
  }else{
    res.send({
      message: 'いずれかに誤りがあります'
    })
  }
 
})

app.listen(process.env.PORT || 3000)