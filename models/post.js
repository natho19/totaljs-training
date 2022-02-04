const mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String
    }
}, {
    timestamps: true
});

exports.schema = schema;
exports.model = mongoose.model('post', schema);