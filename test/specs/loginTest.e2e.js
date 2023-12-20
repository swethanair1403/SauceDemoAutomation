const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const data = require('../data/saucedemo.data')

describe('My Login application', () => {


    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(data.loginPage.username, data.loginPage.password)
        await expect(HomePage.appLogo).toBeExisting()
        await expect(HomePage.appLogo).toHaveTextContaining(
            'Swag Labs')
    })

    it('should logout of the application', async () => {
        await HomePage.clickBurgerMenu()
        await expect(HomePage.logOutLink).toBeExisting()
        await HomePage.logout()
    })

    it('should throw error for invalid credentials', async () => {
        await LoginPage.login(data.loginPage.username, 'dummypassword')
        await expect(LoginPage.errorAlert).toBeExisting()
        await expect(LoginPage.errorAlert).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service')
    })
})

