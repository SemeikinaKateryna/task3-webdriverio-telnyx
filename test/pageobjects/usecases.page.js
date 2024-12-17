class UseCasesPage{
    get searchInput(){
        return $('main header input#search')
    }

    get firstResultHeader(){
        return $('main ul li:nth-child(1) h3')
    }

    get noResultsMessage(){
        return $('section#use-cases p')
    }

    async setSearchInput(searchValue){
        await this.searchInput.setValue(searchValue)
    }
}

export default new UseCasesPage()