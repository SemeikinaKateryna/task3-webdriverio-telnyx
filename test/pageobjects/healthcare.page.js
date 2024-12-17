class HealthcarePage{
    get header(){
        return $('main h1')
    }

    get header2(){
        return $('//main//div//h2[contains(text(),"use cases")]')
    }

    get seeAllLink(){
        return $('//main//span[text()="See all use cases"]')
    }

    async clickOnSeeAllLink(){
        await this.seeAllLink.click()
    }
}

export default new HealthcarePage()