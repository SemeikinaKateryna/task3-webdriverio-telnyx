class OneTextStoryPage{
    get header(){
        return $('main h1')
    }

    get increasedInXTimesParagr(){
        return $('main div[id="5l2kYpwRwUVLJsSoOL8kE9"] > div > div:nth-child(1) p:nth-child(1)')
    }

    get moreWordParagr(){
        return $('main div[id="5l2kYpwRwUVLJsSoOL8kE9"] > div > div:nth-child(2) p:nth-child(1)')
    }

    get percentageParagr(){
        return $('main div[id="5l2kYpwRwUVLJsSoOL8kE9"] > div > div:nth-child(3) p:nth-child(1)')
    }

    get startingSmallHeaderInArticle(){
        return $('article h2#starting-small-with-a-prior-vendor')
    }

    get rapidScalingHeaderInArticle(){
        return $('article h2#rapid-scaling-with-telnyx')
    }

    get brightFutureHeaderInArticle(){
        return $('article h2#a-bright-future')
    }
}

export default new OneTextStoryPage()