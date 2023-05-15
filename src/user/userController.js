
var userService = require('./userService')

var getDataControllerfn = (req,res) =>{

    var promise = userService.getDataFromDBService();
    
    promise.then((result)=>{
        res.send({"status":true,"data":result});
    })
    .catch(()=>{
        reject();
    })
    

}

var creatUserControllerfn = (req,res)=>{
    // var status = await userService.creatDataDBService(req.body);

    // if(status){
    //     console.log({"status" : true ,"message" : "project added successfully"});
    // }
    // else{
    //     console.log({"status" : false ,"message" : "error while adding project"});
    // }
    // console.log(req.body);
    var status = userService.creatDataDBService(req.body);
    
    status.then(()=>{
        console.log({"status" : true ,"message" : "project added successfully"});
        res.send(true);
    })
    .catch(()=>{
        console.log({"status" : false ,"message" : "error while adding project"});
        res.send("coud not add data to databse");
    })

}

module.exports= {getDataControllerfn,creatUserControllerfn};