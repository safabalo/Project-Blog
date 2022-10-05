const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const router = require('./routes/categories')
const routerArt = require('./routes/articles')
const routerAvis = require('./routes/avis')
const routerCom = require('./routes/comments')


const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.set('view engine','ejs')
// app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')))



app.get('/',(req,res)=>{
  res.render('index')
})

app.use('/api/categories', router)
app.use('/api/articles', routerArt)
app.use('/api/comments', routerCom)
app.use('/api/avis', routerAvis)

app.listen(PORT)
