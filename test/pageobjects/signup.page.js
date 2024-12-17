class SignUpPage{
    get header1(){
        return $('main div>h1')
    }

    get companyEmail() { 
        return $('form[aria-label="signup-form"] #email'); 
    }

    get firstName() { 
        return $('form[aria-label="signup-form"] #first_name'); 
    } 

    get lastName() { 
        return $('form[aria-label="signup-form"] #last_name'); 
    } 
    
    get password() { 
        return $('form[aria-label="signup-form"] #password'); 
    } 

    get termsCheckBox(){
        return $('form[aria-label="signup-form"] #terms_and_conditions')
    }

    get signUpButton(){
        return $('form[aria-label="signup-form"] > button[type="submit"]')
    }

    get passwordMessage(){
        return $('form[aria-label="signup-form"] div[id="password_message"]')
    }

    get passwordOneSymbolMessage(){
        return $('form[aria-label="signup-form"] div[id="passwordOneSymbol"]')
    }

    async setSignUpRequiredInputs(companyEmailValue, firstNameValue, lastNameValue, passwordValue){
        await this.companyEmail.setValue(companyEmailValue)
        await this.firstName.setValue(firstNameValue)
        await this.lastName.setValue(lastNameValue)
        await this.password.setValue(passwordValue)
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

    async submitSignUp(){
        await this.signUpButton.click()
    }
}

export default new SignUpPage()