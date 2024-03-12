  let express=   require('express')
 let mongoose=    require('mongoose')
  let restroRouter=    require('./routes/restaurant')
mongoose.connect('mongodb://127.0.0.1:27017/zomatofsd5').
then(()=>{
    console.log('db');

}).catch((err)=>{
    console.log(err);
})
   let app=    express()
   app.use(express.json())
   app.use('/api', restroRouter)

   let port=7000
   app.listen(port, ()=>{
    console.log(`server running on  ${port}`);

   })
//    npm i -g nodemon