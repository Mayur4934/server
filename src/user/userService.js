
var userModel = require('./userModel');



module.exports.getDataFromDBService = () =>{

   return new Promise(function checkURL(resolve,reject)
   {
    var mypromise=userModel.find();
    //{ Location : 'Nashik'}
    mypromise.then((result)=>{
        resolve(result);
        
        console.log("data fetched succesfully");
    })
    .catch(()=>{
        reject(false);
        console.log("could not fetch data");
    })
   });
}
 // function returnData(error,result){
        // if(error){
        //     reject(false)
        // } 
        // else{
        //     resolve(result);
        // }

module.exports.creatDataDBService=(userDetails)=>{

    // console.log(userDetails);
    

    return new Promise(function myFn(resolve,reject){
       
        var userModeldata = new userModel();
        userModeldata.TextArea = userDetails.TextArea;
        userModeldata.Reason = userDetails.Reason;
        
        userModeldata.Type = userDetails.Type;
        userModeldata.Divison = userDetails.Divison;
        userModeldata.Category = userDetails.Category;
        userModeldata.Priority = userDetails.Priority;
        userModeldata.Department = userDetails.Department;
        userModeldata.Location = userDetails.Location;
        
        // userModeldata.Status = userDetails.Status;
        // userModeldata.StartDate = userDetails.StartDate;
        // userModeldata.EndDate = userDetails.EndDate

        console.log(userModeldata.TextArea);
        console.log(userDetails.TextArea);

        console.log(userModeldata.Reason);
        console.log(userModeldata.Type);
        console.log(userDetails.Reason);
        console.log(userDetails.Type);
        console.log(userModeldata.Priority);
        console.log(userDetails.Priority);
        console.log(userModeldata.Divison);
        console.log(userDetails.Divison);
        console.log(userModeldata.Department);
        console.log(userDetails.Department);
        console.log(userModeldata.Location);
        console.log(userDetails.Location);
        


        const response = userModeldata.save();

        // const session = await userModeldata.save();
        // userModeldata.save().then(sesson => {
        //     resolve(true);
        // });

        response.then(()=>{
            console.log("saved successfully");
            resolve(true);
        })
        .catch(()=>{
            console.log("coudnt save");
            reject(false);
        })
        
        
    })
}