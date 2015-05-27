import BaseHooks from './base';
import $ from 'jquery';

export default class extends BaseHooks {

    /**
     * @Constructor
     */
    constructor() {
        this.itemAdd();
    }

    itemAdd() {
        $('body').on('submit', '[data-cart-item-add]', (event) => {
            this.emit('cart-item-add', event);
        });
    }
}
