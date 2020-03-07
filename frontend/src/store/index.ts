import { observable } from 'mobx';

class Store {
    @observable savedProducts = [];

    saveProduct(item) {
        let foundIndex;
        const existingProduct = this.savedProducts.find((product, index) => {
            foundIndex = index;
            return product._id === item._id;
        });

        if (existingProduct) {
            this.savedProducts.splice(foundIndex, 1);
        } else {
            this.savedProducts.push(item);
        }
    }
}

export const store = new Store;

export * from './Provider';