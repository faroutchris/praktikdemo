var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    sku: {type: String, required: true, unique: true},
    created_at: Date,
    modified: Date,
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;