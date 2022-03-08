const RegisterPage = require('../pages/register.page');
const Login = require('./../pages/login.page')
const {expect} = require('chai');

describe('Login Test', () => {
    it('Open Apps', async () => {
        await RegisterPage.open();
        await Login.loginMenu();
    });

    it('User fill login form', async () => {
        await Login.loginForm('test@pp.zz','12341234');

    })

    it('Login Sucessfull', async () => {
        const alertText =  await RegisterPage.getAlertTitle();
        const msgText = await RegisterPage.getMsgAlert();
        expect(alertText).to.equal('Success')
        expect(msgText).to.equal('You are logged in!');
        await RegisterPage.closeAlertMessage();
    });

})