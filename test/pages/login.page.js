import Page from './page';

import {USER_LOGIN, USER_PASS} from "../../constants";
import ModalComponent from './components/home_modal.component';

class LoginPage extends Page {

    get nameSteam() {return $('#steamAccountName')}
    get passwordSteam() {return $('#steamPassword')}
    get logBtnSteam() {return $('#imageLogin')}

    loginSteam ({ email = USER_LOGIN, password = USER_PASS} = {}) {
        this.nameSteam.setValue(email)
        this.passwordSteam.setValue(password)
        this.logBtnSteam.click()
    }
    // open() {
    //     super.open('cs');
    //     return this;
    // }
}

export default new LoginPage();