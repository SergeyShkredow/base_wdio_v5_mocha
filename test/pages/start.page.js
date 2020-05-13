import Page from './page';
import ModalComponent from './components/home_modal.component';
import LoginSteamPage from "./login.page";

import {expect} from 'chai'
import {USER_EPICSKINS} from '../../constants'

class StartPage extends Page {
  get pageModals() {
    return $$('#overview .col-sm').map((modal) => new ModalComponent(modal));
  }
  get loginBtn() {return $('.button')}
  get arrowWrapper() {return $('.arrow-wrapper')}
  get logOutBtn() {return $('[span = "Выход"]')}
  get profileName() {return $('.profile-name')}
  get logo() {return $('.logo-image')}

  open() {
    super.open('');
    return this;
  }

  login() {
    this.loginBtn.waitForDisplayed()
    this.loginBtn.click()
    browser.pause(2000)
    LoginSteamPage.loginSteam()
  }

  LogOut() {
    this.arrowWrapper.click()
    // browser.debug()
    this.logOutBtn.waitForDisplayed()
    this.logOutBtn.click()
  }

  checkProfile() {
    const profile = this.profileName.getText()
    expect(profile).to.equal(USER_EPICSKINS);
  }

}

export default new StartPage();
