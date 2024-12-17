class ProgrammableNetworking{
    get header1(){
        return $('main > section[contenttype="heroOverview"] h1')
    }

    get payAsYouGoParag(){
        return $('main p[id="pay-as-you-go"]')
    }

    get buttonCurrecyFilter(){
        return $('main button[id="currency-filter"]')
    }

    get firstRowFirstColOfTable(){
        return $('main div#virtual-cross-connects-pricing-table table>tbody> tr:nth-child(1) > td:nth-child(3)')
    }

    get firstRowSecindColOfTable(){
        return $('main div#virtual-cross-connects-pricing-table table>tbody> tr:nth-child(1) > td:nth-child(5)')
    }

    get firstRowThirdColOfTable(){
        return $('main div#virtual-cross-connects-pricing-table table>tbody> tr:nth-child(1) > td:nth-child(7)')
    }

    async selectCurrencyFilter(value){
        await this.buttonCurrecyFilter.click()
        const currencyFilterOption = $(`span=${value}`);
        await currencyFilterOption.click()
    }
}
export default new ProgrammableNetworking()