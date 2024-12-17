class AiModelPage{
    get header1(){
       return $('main h1')
    }

    get userPrompt(){
        return $('main form textarea[name="prompt"]')
    }

    get userInput(){
        return $('main form textarea[placeholder="Enter text here"]')
    }

    get amountOfSymbolsInUserPrompt(){
        return $('main form textarea[name="prompt"]~p')
    }

    get sendButton(){
        return $('main form button[type="submit"]')
    }

    get selectModel(){
        return $('//main//form//button/span')
    }

    get modelByName() {
        return (modelValue) => $(`div[aria-label="${modelValue}"]`);
    }

    get sliderRow(){
        return $('main form label#temperature~span[data-orientation="horizontal"]>span[data-orientation="horizontal"]>span[style]')
    }

    get sliderButton(){
        return $('main form #temperature-slider > span:nth-child(2)')
    }

    get sliderButton2(){
        return $('main form span[role="slider"]')
    }

    get sliderHiddenValue(){
        return $('main form input[style="display:none"]')
    }

    get assistantDiv() {
        return $('main form div:nth-child(2) > div.c-jiXXol');
    }

    async selectModelByName(modelValue) {
        const modelElement = await this.modelByName(modelValue)
        await this.selectModel.click()
        await modelElement.click()
    }

    async moveSlider(value) {
        const sliderButton = await this.sliderButton;
        const sliderRow = await this.sliderRow;
        const sliderButton2 = await this.sliderButton2;
        const sliderHiddenValue = await this.sliderHiddenValue;
    
        const sliderPosition = `${parseFloat(value) * 100}%`; // Dynamically calculate the slider position as a percentage
    
        await browser.execute(
            "arguments[0].setAttribute('style', 'transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(" + sliderPosition + " - 8px);')",
            sliderButton
        );
        await browser.execute(
            "arguments[0].setAttribute('style', 'left:0%;right:" + sliderPosition + "')",
            sliderRow
        );
        await browser.execute(
            "arguments[0].setAttribute('aria-valuenow', arguments[1])",
            sliderButton2,
            value
        );
        await browser.execute(
            "arguments[0].setAttribute('value', arguments[1])",
            sliderHiddenValue,
            value
        );
    }    

    async setUserPromptAndInputToAi(userPromptValue, userInputValue){
        await this.userPrompt.setValue(userPromptValue)
        await this.userInput.setValue(userInputValue)
    }

    async sendUserRequestToAi(){
        await this.sendButton.click()
    }
}

export default new AiModelPage()