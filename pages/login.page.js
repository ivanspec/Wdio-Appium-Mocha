const Page = require('../helper/launch');


class Login extends Page {
    get loginMenuBtn () {
        const btn =  'new UiSelector().text("Login").className("android.widget.TextView")';
        return $(`android=${btn}`);  
    }   

    get loginEmail() {
        return $('~input-email');
    }

    get loginPass() {
        return $('~input-password');
    }

    get loginBtn() {
        return $('~button-LOGIN');
    }

    async loginMenu(){
        await this.loginMenuBtn.click();
    }

    async loginForm(username,password) {
        await this.loginEmail.setValue(username);
        await this.loginPass.setValue(password);
        await this.loginBtn.click();
    }

}

module.exports = new Login();