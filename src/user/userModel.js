var mongoose = require('mongoose');
// const Schema = require('mongoose').Schema;

var userSchema = new mongoose.Schema({

// var userSchema = new schema

    TextArea : {
        type : String,
        required : true
    },

    Reason : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        required : true
    
    },
    Divison : {
        type : String,
        required : true
    },
    Category : {
        type : String,
        required : true
    },
    Priority : {
        type : String,
        required : true
    },
    Department : {
        type : String,
        required : true
    },
    Location: {
        type : String,
        required : true
    }
    ,
    // StartDate : {

    //     type : String,
    //     required : true
    // },

    // EndDate : {

    //     type : String,
    //     required : true
    // }
    
    

    

})

module.exports = mongoose.model('projectdetails',userSchema) ;