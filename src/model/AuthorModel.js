const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ict.avsgk.mongodb.net/Libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});
// point 8 => corrected the spelling of image.
const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;