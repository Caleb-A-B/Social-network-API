const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://calebabaca:Rosebud1998@cluster0.ixglki0.mongodb.net/', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
});


module.exports = mongoose.connection;