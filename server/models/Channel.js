var mongoose = require('mongoose');
var error;
var Schema = mongoose.Schema;
var ChannelSchema = new mongoose.Schema({
    channelName: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    _user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    invite: {
        type: Boolean,
    },
    purpose: {
        type: String,
        required: true
    }
}, { timestamps: true });


mongoose.model('Channel', ChannelSchema);
var Channel = mongoose.model('Channel')