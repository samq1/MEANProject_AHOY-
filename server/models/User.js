var mongoose = require('mongoose');
var error;
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 1,
        trim: true,
        required: true,
        validate: {
            validator: function validateEmail(email) 
            {
                var re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    },
    fullname: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    displayname: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    password: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    }
}, { timestamps: true });


mongoose.model('User', UserSchema);
var User = mongoose.model('User')