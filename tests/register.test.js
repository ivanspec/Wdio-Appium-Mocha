const RegisterPage = require('../pages/register.page');
//const sleep = ms => new Promise(r => setTimeout(r, ms));
const {expect} = require('chai');

describe('Register Test', () => {
    it('Open Apps', async () => {
        await RegisterPage.open();
        await RegisterPage.register();

    });

    it('User fill register form', async () =>{
        await RegisterPage.registerForm('test@ao.zz','12341234');
                
    });

    it('Register Sucessfull', async () =>{
        const alertText =  await RegisterPage.getAlertTitle();
        const msgText = await RegisterPage.getMsgAlert();
        expect(alertText).to.equal('Signed Up!')
        expect(msgText).to.equal('You successfully signed up!');
        await RegisterPage.closeAlertMessage();
        
    });

})