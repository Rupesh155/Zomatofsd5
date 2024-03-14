
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


router.get('/restro/:id', async(req,res)=>{
    try{
       let restaurant=    await  Restaurant.findById(req.params.id)
       if(!restaurant){
        return res.send('not found')
       }
       else{
        return res.send(restaurant)
       }

    }
    catch{
        res.send('errr')
    }
      

})




router.patch('/restro/:id', async(req,res)=>{
    try{
       let restaurant=    await  Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true})
       if(!restaurant){
        return res.send('not found')
       }
       else{
        return res.send(restaurant)
       }

    }
    catch{
        res.send('errr')
    }
      

})


router.delete('/restro/:id', async(req,res)=>{
    try{
       let restaurant=    await  Restaurant.findByIdAndDelete(req.params.id)
       if(!restaurant){
        return res.send('not found')
       }
       else{
        return res.send('deletedddd')
       }

    }
    catch{
        res.send('errr')
    }
      

})









module.exports=router
