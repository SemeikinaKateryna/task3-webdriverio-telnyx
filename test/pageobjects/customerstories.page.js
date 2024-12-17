class CustomerStories{
    get header(){
        return $('section[contenttype="heroOverview"] h1')
    }

    get storyByName(){
        return (storyName) => $(`//main//a[@href="/customer-stories/${storyName.toLowerCase()}"]//div`)
    }

    async clickOnStoryByName(storyName){
        const storyOption = await this.storyByName(storyName)
        await storyOption.click()
    }
}

export default new CustomerStories()