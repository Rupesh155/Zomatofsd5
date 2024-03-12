
 let express=   require('express')

 let router =  express.Router()
let Restaurant= require('../models/restaurant')

router.post('/restro',  async(req,res)=>{

    try{
        let restaurant=     new Restaurant(req.body)

        await  restaurant.save()
        res.send({restaurant ,msg:"done"})

    }
    catch{
        res.send("errr")

    }

})
//  all restaurant find
router.get('/restro', async(req ,res)=>{
    try{
        let restaurant=    await   Restaurant.find()
        if(restaurant){
             return res.send(restaurant)
        }
        else{
           return  res.send('restro not found')
        }

    }
    catch{
         return res.send('errr')

    }







})





module.exports=router
