const Page = require('../helper/launch');


class RegisterPage extends Page {

    //*ElementObject
    get loginMenuBtn () {
        const btn =  'new UiSelector().text("Login").className("android.widget.TextView")';
        return $(`android=${btn}`);    
    }
    get titleRegisterPage(){
        const titleRegister = '//android.view.ViewGroup[@content-desc="button-sign-up-container"]';
        return $(`${titleRegister}`);
    }

    get registerSetEmail(){
        return $('~input-email');
    }

    get registerPassword(){
        return $('~input-password');    
    }

    get registerRePassword(){
        return $('~input-repeat-password');    
    }

    get signUpBtn(){
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup/android.widget.TextView');
    }

    get alertTitle(){
        return $('id=android:id/alertTitle');
    }

    get alertMessage(){
        return $('id=android:id/message')
    }

    get closeAlertBtn(){
        return $('id=android:id/button1')
    }


    //* Step
    async register() {
        await expect(this.loginMenuBtn).toBeDisplayed();
        await this.loginMenuBtn.click();
        await this.titleRegisterPage.click(); 
    }

    async registerForm(username,password) {
        await this.registerSetEmail.setValue(username);
        await this.registerPassword.setValue(password);
        await this.registerRePassword.setValue(password);
        await this.signUpBtn.click();
    }

    async getAlertTitle() {
        return await this.alertTitle.getText();
          
    }
    async getMsgAlert(){
        return await this.alertMessage.getText();
    }

    async closeAlertMessage(){
        await this.closeAlertBtn.click();
    }

    open() {
        return super.open();
    }
}

module.exports = new RegisterPage();
