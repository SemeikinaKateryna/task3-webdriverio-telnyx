class PricingPage{
    get header1(){
        return $('main section[contenttype="heroOverview"] h1')
    }
    
    get voiceApiLink(){
        return $('main div#communications a[href="/pricing/call-control"] > div')
    }

    get storageLink(){
        return $('main div#compute a[href="/pricing/storage"] > div')
    }

    get programmableNetworkingLink(){
        return $('div#networking a[href="/pricing/networking"] > div')
    }

    get messagingApiLink(){
        return $('div#communications a[href="/pricing/messaging"] > div')
    }

    async goToVoiceApi(){
        await this.voiceApiLink.click()
    }

    async goToStorage(){
        await this.storageLink.click()
    }

    async goToProgrammableNetworking(){
        await this.programmableNetworkingLink.click()
    }

    async goToMessagingApi(){
        await this.messagingApiLink.click()
    }
}

export default new PricingPage()