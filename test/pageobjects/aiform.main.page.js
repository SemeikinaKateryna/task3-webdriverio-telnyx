class AiFormMainPage{
    get companyName() { 
        return $('main form[aria-label="voice-ai-form"] #business_name'); 
    }

    get domain() { 
        return $('main form[aria-label="voice-ai-form"] #domain'); 
    } 
    
    get mobilePhone() { 
        return $('main form[aria-label="voice-ai-form"] #phone_number'); 
    } 

    get email(){
        return $('form[aria-label="voice-ai-form"]  #email')
    }

    get termsCheckBox(){
        return $('main form[aria-label="voice-ai-form"]  #terms_and_conditions')
    }

    get termsCheckboxErrorMessage(){
        return $('main form[aria-label="voice-ai-form"] div[id="terms_and_conditions_message"]')
    }

    get submitFormButton(){
        return $('main form[aria-label="voice-ai-form"] button[type="submit"]')
    }

    async checkTermsCheckboxByState(agreeToTermsCheckboxState){
        const isChecked = await this.termsCheckBox.isSelected();
        if(isChecked){
            await this.termsCheckBox.click()        // uncheck the box if checked
        }
        if(agreeToTermsCheckboxState === true){
            await this.termsCheckBox.click()        // check the box if true, if false - do nothing
        }
    }

    async setAiDemoFormRequiredInputs(companyNameValue, domainValue, mobilePhoneValue, emailValue){
        await this.companyName.setValue(companyNameValue)
        await this.domain.setValue(domainValue)
        await this.mobilePhone.setValue(mobilePhoneValue)
        await this.email.setValue(emailValue)
    }

    async submitForm(){
        await this.submitFormButton.click()
    }
}

export default new AiFormMainPage()