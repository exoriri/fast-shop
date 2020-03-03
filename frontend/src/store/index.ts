import { observable } from 'mobx';
import { toJS } from 'mobx';

class Store {
    @observable savedProducts = [];

    saveProduct(item) {
        this.savedProducts.push(item);
    }
}

export const store = toJS(new Store);

export * from './Provider';