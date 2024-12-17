class SmsApiPage{
    get header1() { 
        return $('main h1'); 
    }
    
    get faqHeader(){
        return $('//section//strong[text()="FAQ"]')
    }

    get question(){
        return (question) => $(`//section//h3[text()="${question}"]`)
    }

    get answer(){
        return $('div[data-state="open"]>p')
    }

    async goToTheNextSection(){
        await this.nextButton.click()
    }

    async showAnswerToQuestion(question){
        const selectedQuestion = await this.question(question)
        await selectedQuestion.click()
    }
}

export default new SmsApiPage()