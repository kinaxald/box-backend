const mongoose = require ('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    path:{

        type: String,
        required: true

    }
    }, {
        timestamps: true,
        toObject: {virtuals: true},
        toJSON: {virtuals: true }
});

File.virtual('url').get(function(){

    const URL = process.env.PORT || 'http://localhost:3333';
    
    return `${URL}/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model ('File', File);