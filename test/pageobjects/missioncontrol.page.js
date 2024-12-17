class MissionControlPage{
    get header1(){
        return $('main section[contenttype="heroSolutions"] h1')
    }

    get requestByNumber(){
        return (number) => $(`main div[role="tablist"] button:nth-child(${number}) h3`)
    }

    get responseByNumber(){
        return (number) => $(`main div[role="tablist"] button:nth-child(${number}) p`)
    }

    get expandArrowByNumber(){
        return (number) => $(`main div[role="tablist"] button:nth-child(${number}) svg`)
    }

    async clickOnExpandArrowByNumber(number){
        const expandArrow = this.expandArrowByNumber(number)
        await expandArrow.click()
    }
}

export default new MissionControlPage()