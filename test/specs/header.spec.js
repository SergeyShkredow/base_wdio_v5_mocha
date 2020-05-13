import StartPage from '../pages/start.page';

describe('Precondition Header', function() {
    before(function() {
        StartPage.open();
        StartPage.login()
    });

    describe (' Header', function () {

        it('EO-1366 E2E: Header: Проверить отображение логина пользователя', function() {
            StartPage.checkProfile()
        })

        it('EO-1365 E2E: Header: Проверить отображение Баланса и Бонуса', function() {
            StartPage.checkBalance()
            StartPage.checkBonus()
        })

        it('Проверить отображение логина пользователя', function() {

        })
    })

    after(function() {
        // StartPage.LogOut()
    });
});