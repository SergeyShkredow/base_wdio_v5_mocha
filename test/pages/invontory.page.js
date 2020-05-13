import Page from './page';

class inventoryPage extends Page {

    get loginBtn() {return $('.button')}

    open() {
        super.open('inventory');
        return this;
    }
}

export default new inventoryPage();
