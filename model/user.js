const { CommandStartedEvent } = require('mongodb');
const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({

    name:{
        type : String
    },

    phone:{
        type: Number
    },
  
});

const user = mongoose.model('user',userSchema);

module.exports = user;  