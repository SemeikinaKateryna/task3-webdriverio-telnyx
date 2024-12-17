class IotSimCardPage{

    get header2(){
        return $('section#iot-sim-card-calculator h2')
    }

    get numberOfSimCards(){
        return $('section#iot-sim-card-calculator input#iot-sim-savings-calculator__number-of-sim-cards')
    }

    get dataSimUsePerMonth(){
        return $('section#iot-sim-card-calculator input#iot-sim-savings-calculator__number-of-mb-per-month')
    }

    get selectCountryButton(){
        return $('section#iot-sim-card-calculator button[role="combobox"]')
    }

    get countryByName(){
        return(countryValue) => $(`span=${countryValue}`)
    }

    get yesOfUsagePublicApi(){
        return $('section#iot-sim-card-calculator input#iot-sim-savings-calculator__public-ip__-yes')
    }

    get noOfUsagePublicApi(){
        return $('section#iot-sim-card-calculator input#iot-sim-savings-calculator__public-ip__-no')
    }

    get nextSectionButton(){
        return $('//section[@id="iot-sim-card-calculator"]//button//span[text()="Next"]')
    }

    get resultCosts(){
        return $('section#iot-sim-card-calculator div[data-value="5"] p:nth-child(1)')
    }

    async goToTheNextSection(){
        await this.nextSectionButton.click()
    }

    async setNumberOfSimCardInput(numberOfSimCardsValue){
        await this.numberOfSimCards.setValue(numberOfSimCardsValue)
        
    }
    async setDataSimUsePerMonthInput(dataSimUsePerMonthValue){
        await this.dataSimUsePerMonth.setValue(dataSimUsePerMonthValue)
    }

    async selectCountryByName(countryValue){
        await this.selectCountryButton.click()
        const countryOption = $(`span=${countryValue}`);
        await countryOption.click();
    }

    async setUsagePublicApi(usagePublicApiState){
        if(usagePublicApiState === true){
            await this.yesOfUsagePublicApi.click()
        }else{
            await this.noOfUsagePublicApi.click()
        }
    }
}

export default new IotSimCardPage()