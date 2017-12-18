var mongoose = require('mongoose');
var error;
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    _user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    _channel: {
        type: Schema.Types.ObjectId,
        ref: 'Channel',
    }
}, { timestamps: true });


mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message')