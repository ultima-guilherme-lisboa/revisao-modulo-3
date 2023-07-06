import LoginElements from "../elements/login.elements.js";

const loginElements = new LoginElements()


export default class LoginPage {

    preencherEmail(type) {
        return `Preenchou o campo ${loginElements.inputEmail()} com ${type}`
    }

    preencherSenha(type) {
        return `Preenchou o campo ${loginElements.inputSenha()} com ${type}`
    }

    clickEntrar() {
        return `Clicou no botão ${loginElements.buttonEntrar()}`
    }

    login(email, senha) {
        console.log(this.preencherEmail(email))
        console.log(this.preencherSenha(senha))
        console.log(this.clickEntrar())

        return false

    }

}