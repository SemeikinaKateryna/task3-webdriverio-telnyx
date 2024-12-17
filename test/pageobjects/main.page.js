class MainPage{
    get signUpLink() { 
        return $('div.c-buvHyO.c-buvHyO-idGZmCD-css a.c-fOQMKa.c-fOQMKa-jtQvir-background-dark.c-fOQMKa-izROKD-cv > span.c-hakyQ'); 
    } 

    get aiFormText(){
        return $('main h2#build-your-ai-agent-with-telnyx')
    }

    get aiModelLink(){
         return $('main a[href="/products/inference"]')
    }

    get globalCoverageFromFooterLink(){
        return $('footer a[href="/global-coverage"]')
    }

    get pricingFromHeaderLink(){
        return $('header div[id="main-menu"] a[href="/pricing"]')
    }

    get productsFromHeaderButton(){
        return $('//header//div[@id="main-menu"]//button/span[text()="Products"]')
    }

    get resourcesFromHeaderButton(){
        return $('//header//div[@id="main-menu"]//button/span[text()="Resources"]')
    }

    get smsApiLink(){
        return $('nav div[data-href="/products/sms-api"]')
    }

    get customerStoriesLink(){
        return $('nav div[data-href="/customer-stories"]')
    }

    get exploreIotLink(){
        return $('main a[href="/products/iot-sim-card"]')
    }

    get whyTelnyxFromHeaderButton(){
        return $('//header//div[@id="main-menu"]//button/span[text()="Why Telnyx"]')
    }

    get partnersLink(){
        return $('div[id="main-menu-content"] a[href="/partnerships"]')
    }

    get missionControlLink(){
        return $('div[id="main-menu-content"] a[href="/mission-control"]')
    }

    get solutionsFromHeaderButton(){
        return $('//header//div[@id="main-menu"]//button/span[text()="Solutions"]')
    }

    get healthcareLink(){
        return $('nav div[data-href="/solutions/healthcare"]')
    }

    get getInspiredText(){
        return $('//main//div//strong[text()="Get Inspired"]')
    }

    async clickOnSignUpLink(){
        await this.signUpLink.click()
    }

    async clickOnAiModelLink(){
        await this.aiModelLink.click()
    }

    async clickOnGlobalCoverageFromFooterLink(){
        await this.globalCoverageFromFooterLink.click()
    }

    async clickOnPricingFromHeaderLink(){
        await this.pricingFromHeaderLink.click()
    }
    
    async goToSmsApi(){
        await this.productsFromHeaderButton.click()
        await this.smsApiLink.click()
    }

    async goToCustomerStories(){
        await this.resourcesFromHeaderButton.click()
        await this.customerStoriesLink.click()
    }

    async goToPartnership(){
        await this.whyTelnyxFromHeaderButton.click()
        await this.partnersLink.click()
    }

    async goToMissionControl(){
        await this.whyTelnyxFromHeaderButton.click()
        await this.missionControlLink.click()
    }

    async goToHealthcare(){
        await this.solutionsFromHeaderButton.click()
        await this.healthcareLink.click()
    }

    async clickOnExploreIotLink(){
        await this.exploreIotLink.click()
    }

}

export default new MainPage()