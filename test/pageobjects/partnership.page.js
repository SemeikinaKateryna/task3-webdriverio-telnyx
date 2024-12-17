class PartnershipPage{
    get header2(){
        return $('//main//section//h2[text()="Become a Telnyx Partner"]')
    }

    get applyNowButton(){
        return $('main form button[type="submit"]')
    }

    get firstName(){
        return $('main form input#FirstName')
    }

    get lastName(){
        return $('main form input#LastName')
    }

    get company(){
        return $('main form input#Company')
    }

    get email(){
        return $('main form input#Email')
    }
    
    get phoneNumber(){
        return $('main form input#Phone_Number_Base__c')
    }

    get reasonToBePartner(){
        return $('main form textarea#Form_Additional_Information__c')
    }

    get selectCountryButton(){
        return $('main form select#Phone_Number_Extension__c')
    }

    get selectPartnerType(){
        return $('main form select#Form_Partner_Type__c')
    }

    get thankYouText(){
        return $('main section[contenttype="heroOverview"] h1')
    }

    get thankYouMessage(){
        return $('main section[contenttype="heroOverview"] p')
    }

    async setPartnershipRequiredInputs(firstNameValue, lastNameValue, companyNameValue, businessEmailValue, mobilePhoneValue, reasonToBePartnerValue){
        await this.firstName.setValue(firstNameValue)
        await this.lastName.setValue(lastNameValue)
        await this.company.setValue(companyNameValue)
        await this.email.setValue(businessEmailValue)
        await this.phoneNumber.setValue(mobilePhoneValue)
        await this.reasonToBePartner.setValue(reasonToBePartnerValue)
    }

    async selectCountryByName(countryName){
        await this.selectCountryButton.click()
        const countryOption = $(`option=${countryName}`)
        await countryOption.click()
    }

    async selectPartnerTypeByName(partnerTypeName){
        await this.selectPartnerType.click()
        const partnerTypeOption = $(`option=${partnerTypeName}`)
        await partnerTypeOption.click()
    }

    async submitApply(){
        await this.applyNowButton.click()
    }
}

export default new PartnershipPage()