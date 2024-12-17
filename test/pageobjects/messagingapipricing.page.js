class MessagingApiPricing{
    get header1(){
        return $('main > section[contenttype="heroOverview"] h1')
    }

    get header2InDownloadForm(){
        return $('main div[title="Messaging pricing - download pricing"] h2')
    }

    get firstName(){
        return $('main div[title="Messaging pricing - download pricing"] input#FirstName')
    }

    get lastName(){
        return $('main div[title="Messaging pricing - download pricing"] input#LastName')
    }

    get businessEmail(){
        return $('main div[title="Messaging pricing - download pricing"] input#Email')
    }

    get submitButton(){
        return $('main div[title="Messaging pricing - download pricing"] button')
    }

    get thankYouText(){
        return $('main section[contenttype="heroOverview"] h1')
    }

    get thankYouMessage(){
        return $('main section[contenttype="heroOverview"] h1')
    }

    get thankYouMessage(){
        return $('main section[contenttype="heroOverview"] p')
    }

    async setDownloadPricingRequiredInputs(firstNameValue, lastNameValue, businessEmailValue){
        await this.firstName.setValue(firstNameValue)
        await this.lastName.setValue(lastNameValue)
        await this.businessEmail.setValue(businessEmailValue)
    }

    async submitDownloadPricing(){
        await this.submitButton.click()
    }
}
export default new MessagingApiPricing()