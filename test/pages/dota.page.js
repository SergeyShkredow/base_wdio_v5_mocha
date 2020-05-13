import Page from './page';

class dotaPage extends Page {

    get loginBtn() {return $('.button')}

    open() {
        super.open('dota2');
        return this;
    }
}

export default new dotaPage();
