import StartPage from '../pages/start.page';
import LoginSteamPage from '../pages/login.page';

describe('Login Page Suite', function() {
  it('EO-1367 Проверить вход с правильным логином и паролем', function() {
    StartPage.open()
    StartPage.login()
  })

  it.skip('should have Load Delay section', function() {
    // Using component to capture repeating html part
    DefaultPage
        .open()
        .verifyTextInPage('UI Test Automation');
    expect(LoginPage.pageModals[3].title).toEqual('Load Delay');
    expect(LoginPage.pageModals[3].content).toEqual(
        'Ensure that a test is capable of waiting for a page to load');
    utilities.takeScreenshot('homepage');
  });
});
