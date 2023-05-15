var userloginService=require('./userloginService');




var userloginControllerfn = async (req,res)=>{

    var result = null;
    

    try{
        result = await userloginService.userloginDBService(req.body);


        if(result.status){
            res.send({"status":true , message : result.message});
            
            console.log("login succesfull");
        }
        else{
            res.send({"status":false ,message : result.message});
            console.log("invalid credentials");
        }
    }

    catch(error){

        console.log(error);
        // res.send({"status":false ,message : result.message});
        console.log("invalid credentials");

    }



}

module.exports={userloginControllerfn};