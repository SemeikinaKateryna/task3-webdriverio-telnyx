class ConnectWithUsMainPage{
    get businessEmail() { 
        return $('main form[action="/sign-up"] input#email'); 
    }

    get submitButton(){
        return $('main form[action="/sign-up"] div:nth-child(2) button')
    }

    async setBusinessEmail(businessEmailValue){
        await this.businessEmail.setValue(businessEmailValue)
    }

    async submitConnect(){
        await this.submitButton.click()
    }
}

export default new ConnectWithUsMainPage()