let mongoose=  require('mongoose')

let restrSchema=   mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    descriptions:{
        type:String

    },
    Contact_No:{
        type:Number

    },
    image:{
        type:String
    }

    
})
let Restaurant=   mongoose.model('Restaurant', restrSchema)

module.exports=Restaurant
