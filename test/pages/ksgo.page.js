import Page from './page';

class ksgoPage extends Page {

    get loginBtn() {return $('.button')}

    open() {
        super.open('cs');
        return this;
    }
}

export default new ksgoPage();
