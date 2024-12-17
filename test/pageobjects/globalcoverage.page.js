class GlobalCoveragePage{
    get viewFullCoverageLink(){
        return $('main > section[contenttype="heroOverview"] a[href="#our-global-coverage"]')
    }

    get header2(){
        return $('section#our-global-coverage h2')
    }

    get numberTypesButton(){
        return $('section#our-global-coverage button[id="radix-:Rcpatm:-trigger-number-types"]')
    }

    get searchCountryButton(){
        return $('section#our-global-coverage form>div:nth-child(1)>button')
    }

    get countryOrRegionByName(){
        return (countryOrRegionName) => $(`//section[@id="our-global-coverage"]//form//input[@type="checkbox"]//following-sibling::span[text()="${countryOrRegionName}"]`)
    }
    
    get filterButton(){
        return $('section#our-global-coverage form>div:nth-child(2)>button')
    }

    get filterByName() {
        return (filterName) => $(`//section[@id="our-global-coverage"]//form//input[@type="checkbox"]//following-sibling::span[text()="${filterName}"]`);
    }

    get tableWithResults(){
        return $$('section#our-global-coverage tbody > tr')
    }

    get anyRowResult(){
        return (numberOfResult) => $(`section#our-global-coverage table > tbody > tr:nth-child(${numberOfResult}) > td:nth-child(1)`)
    }

    async clickOnViewFullCoverageLink(){
        await this.viewFullCoverageLink.click()
    }

    async clickOnNumberTypesButton(){
        await this.numberTypesButton.click()
    }

    async clickOnSearchCountryButton(){
        await this.searchCountryButton.click()
    }

    async clickOnFilterButton(){
        await this.filterButton.click()
    }
}

export default new GlobalCoveragePage()