const databases = require('../databases');
const collection = databases.Mongo.db.collection('products');

const findProduct = (imgSrc) => (
    new Promise(res => {
        console.log(imgSrc)
        collection.findOne({ imgSrc }, (err, product) => {
            if (err) throw Error(err);
            res(product);
        })
    })
);

const insertProduct = (product) => (
    new Promise(res => {
        collection.insertOne(product, (err, product) => {
            if (err) throw Error(err);
            console.log('1 product was inserted')
            res(product);
        })
    })
);

const updateProduct = (id, newObject) => (
    new Promise(res => {
        collection.updateOne({ id }, newObject, (err, newProduct) => {
            if (err) throw Error(err);
            console.log('Product was updated')
            res(newProduct);
        })
    })
)

const Product = {
    async create(product) {
        const foundProduct = await findProduct(product.imgSrc);

        if (foundProduct) {
            const newProduct = { $set: { count: foundProduct.count + 1 } }
            const updatedProduct = await updateProduct(product.id, newProduct);

            return updatedProduct;
        }

        const newProduct = await insertProduct(product);

        return newProduct;
    },

    async get() {
       const products = await collection.find({}).toArray();
       
       return products;
    }
};

module.exports = Product;