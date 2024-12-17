class TelnyxPricingVoiceApiPage{
    get header1(){
        return $('main>section[contenttype="heroOverview"] h1')
    }

    get payAsYouGoParag(){
        return $('main p[id="pay-as-you-go"]')
    }

    get buttonCountryFilter(){
        return $('main button[id="country-filter"]')
    }

    get buttonCurrecyFilter(){
        return $('main button[id="currency-filter"]')
    }

    get firstRowOfTable(){
        return $('main div[id="Optional-features"] table>tbody>tr:nth-child(1)>td>span')
    }

    async selectCountryFilter(value) {
        await this.buttonCountryFilter.click();
        const countryFilterOption = $(`span=${value}`);
        await countryFilterOption.click();
    }

    async selectCurrencyFilter(value){
        await this.buttonCurrecyFilter.click()
        const currencyFilterOption = $(`span=${value}`);
        await currencyFilterOption.click()
    }
}
export default new TelnyxPricingVoiceApiPage()