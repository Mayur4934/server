
var userloginModel=require('./userloginModel');

 
module.exports.userloginDBService = (loginDetails)=>
{
    console.log("data is " +  loginDetails.email);
   return new Promise(function myFn(resolve, reject)
   {


   
    var promise = userloginModel.findOne({ email: loginDetails.email}).lean();
      
      
         promise.then((logindata)=>{
            
            if(logindata!=undefined &&  logindata !=null)
            {
               
 
               if(logindata.password == loginDetails.password)
               {
                  resolve({status: true,message: "login Successfully"});
               }
               else
               {
                  reject({status: false,message: "invalid credentials"});
               }
            }
            else
            {
               reject({status: false,msg: "invalid credentials"});
            }
         })
         .catch(()=>{
            reject({status: false, msg: "Invaild credentials"});
         })
        
      
         }
      
   )}
