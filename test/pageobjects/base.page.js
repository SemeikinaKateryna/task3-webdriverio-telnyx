class BasePage{
    async navigate(){
        await browser.url('https://telnyx.com')
    }

    get closeCookieButton(){
        return $('div#onetrust-close-btn-container button')
    }

    async clickOnCloseCookieButton(){
        await this.closeCookieButton.click()
    }

    get keyElement(){
        return $('main h1')
    }
}

export default new BasePage()