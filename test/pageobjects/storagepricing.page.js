class PricingStoragePage{
    get header1() { 
        return $('main > section[contenttype="heroOverview"] h1'); 
    }
    
    get header2(){
        return $('main section#cloud-storage-pricing-calculator h2')
    }

    get storageNumber(){
        return $('main div input[type="number"]')
    }

    get nextButton(){
        return $('//button//span[text()="Next"]')
    }

    get header3(){
        return $('main header h3')
    }

    get telnyxResultCompany(){
        return $('//div[@data-value="3"]//strong[text()="Telnyx"]')
    }

    get telnyxResultPrice(){
        return $('//div[@data-value="3"]//strong[text()="Telnyx"]//..//p')
    }

    async setInputNumber(numberValue){
        await this.storageNumber.setValue(numberValue);
    }

    async goToTheNextSection(){
        await this.nextButton.click()
    }
}

export default new PricingStoragePage()