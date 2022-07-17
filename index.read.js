'use strict';
const daynamoose = require("dynamoose")
const contactsSchema = require("./contact")

exports.handler = async (event)=>{

    try{

const data = await contactsSchema.scan().exec()

return {
statusCode:200,
body : JSON.stringify(data)


}
    }catch(err){
return {

statusCode : 500 , 
body : JSON.stringify({
err : 'true',
message : err.message 

})

}

    }

}