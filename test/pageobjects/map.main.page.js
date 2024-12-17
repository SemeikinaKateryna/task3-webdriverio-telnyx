class MapMainPage{
    get expoloreMapText() { 
        return $('//main//section//p[text()="Explore the interactive map below"]'); 
    } 
    get filterByServiceButton(){
        return $('main section button[aria-label="Filter by service"]')
    }

    get filterByRegionButton(){
        return $('main section button[aria-label="Filter by region"]')
    }

    get updateMapButton(){
        return $('#global-coverage div:nth-child(4) button')
    }

    get countryOnMap(){
        return (countryCode) => $(`svg[aria-describedby='tooltip-${countryCode}'] path`)
    }

    get countryNameOnMap(){
        return (countryCode) => $(`div[id="tooltip-${countryCode}"] span`)
    }

    get resultAboutUkraineOnMap(){
        return $('//div[@id="tooltip-UA"]//following-sibling::div')
    }

    async selectFilterByService(value){
        await this.filterByServiceButton.click();
        const filterByServiceOption = $(`span=${value}`);
        await filterByServiceOption.click();
    }

    async selectFilterByRegion(value){
        await this.filterByRegionButton.click()
        const filterByRegionOption = $(`span=${value}`);
        await filterByRegionOption.click();
    }

    async updateMap(){
        await this.updateMapButton.click()
    }

    async selectCountryOnMap(countryCode){
        const countryOption = await this.countryOnMap(countryCode)
        countryOption.click()
    }

}

export default new MapMainPage()