import { observable } from 'mobx';

class Store {
    @observable savedProducts = [];

    saveProduct(item) {
        this.savedProducts.push(item);
    }
}

export const store = new Store;

export * from './Provider';