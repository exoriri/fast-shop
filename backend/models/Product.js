const databases = require('../databases');
const collection = databases.Mongo.db.collection('products');

const findProduct = (imgSrc) => (
    new Promise(res => {
        collection.find({ imgSrc }, (err, product) => {
            if (err) throw Error(err);
            res(product);
        })
    })
);

const insertProduct = (product) => (
    new Promise(res => {
        collection.insertOne(product, (err, product) => {
            if (err) throw Error(err);
            res(product);
        })
    })
);

const updateProduct = (id, newObject) => (
    new Promise(res => {
        collection.updateOne({ id }, newObject, (err, newProduct) => {
            if (err) throw Error(err);
            res(newProduct);
        })
    })
)

const Product = {
    async create(product) {
        const product = await findProduct(product.imgSrc);
        
        if (product) {
            const newProduct = { $set: { count: product.count + 1 } }
            const updatedProduct = await updateProduct(product.id, newProduct);

            return updatedProduct;
        }

        const newProduct = await insertProduct(product);

        return newProduct;
    }
};

module.exports = Product;