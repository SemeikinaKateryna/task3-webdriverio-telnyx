import { browser, expect } from '@wdio/globals'
import basePage from '../pageobjects/base.page.js'
import mainPage from '../pageobjects/main.page.js'
import signupPage from '../pageobjects/signup.page.js'
import aiFormMainPage from '../pageobjects/aiform.main.page.js'
import aiModelPage from '../pageobjects/aimodel.page.js'
import connectWithUsMainPage from '../pageobjects/connectwithus.main.page.js'
import globalCoveragePage from '../pageobjects/globalcoverage.page.js'
import smsApiPage from '../pageobjects/smsapi.page.js'
import pricingPage from '../pageobjects/pricing.page.js'
import voiceApiPricingPage from '../pageobjects/voiceapipricing.page.js'
import mapMainPage from '../pageobjects/map.main.page.js'
import iotSimCardPage from '../pageobjects/iotsimcard.page.js'
import customerStoriesPage from '../pageobjects/customerstories.page.js'
import oneTextStoryPage from '../pageobjects/onetextstory.page.js'
import storagePricingPage from '../pageobjects/storagepricing.page.js'
import partnershipPage from '../pageobjects/partnership.page.js'
import healthcarePage from '../pageobjects/healthcare.page.js'
import useCasesPage from '../pageobjects/usecases.page.js'
import programmableNetworkingPage from '../pageobjects/programmablenetworking.page.js'
import messagingApiPricingPage from '../pageobjects/messagingapipricing.page.js'
import missionControlPage from '../pageobjects/missioncontrol.page.js'

import testData from "../../test-data/test-data.json"

import * as dotenv from "dotenv"
dotenv.config()

describe('Telnyx testing', () => {
    before(async() => {
        await basePage.navigate()
        await expect(browser).toHaveTitle(expect.stringContaining('Telnyx'))
        await basePage.clickOnCloseCookieButton()
    });

    beforeEach(async() => {
        await basePage.navigate()
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {
                timeout: 100000,
                timeoutMsg: 'Page did not load completely',
            }
        );
        await browser.waitUntil(
            async () => await basePage.keyElement.isExisting(),
            {
                timeout: 100000,
                timeoutMsg: 'Key element did not appear',
            }
        );
        await browser.maximizeWindow()
    });

    it('should not sign up with invalid credentials (insecure password)', async () => {
        await expect(mainPage.signUpLink).toBeDisplayed()
        await mainPage.clickOnSignUpLink();

        await expect(browser).toHaveUrl(expect.stringContaining('sign-up'))
        await expect(signupPage.header1).toHaveText('Create a Telnyx account')
        await expect(signupPage.companyEmail).toBeDisplayed()

        await signupPage.setSignUpRequiredInputs(testData.signUpForm.companyEmail, testData.signUpForm.firstName, testData.signUpForm.lastName, process.env.INSECURE_PASSWORD);
        await expect(signupPage.companyEmail).toHaveValue(testData.signUpForm.companyEmail)
        await expect(signupPage.firstName).toHaveValue(testData.signUpForm.firstName)
        await expect(signupPage.lastName).toHaveValue(testData.signUpForm.lastName)
        await expect(signupPage.password).toHaveValue( process.env.INSECURE_PASSWORD)
        
        await signupPage.checkTermsCheckboxByState(testData.signUpForm.agreeToTermsCheckboxState)
        if(testData.signUpForm.agreeToTermsCheckboxState === true){
            await expect(signupPage.termsCheckBox).toBeChecked()
        }else{
            await expect(signupPage.termsCheckBox).not.toBeChecked()
        }
        
        await signupPage.submitSignUp()
        await expect(signupPage.passwordMessage).toHaveText(expect.stringContaining('Password'))
        await expect(signupPage.passwordOneSymbolMessage).toHaveText(testData.signUpForm.errorMessage)
    })

    it('should not submit the form to try the AI-powered demo (without an agreement to terms and conditions)', async () =>{
        await expect(mainPage.aiFormText).toBeDisplayed()
        await mainPage.aiFormText.scrollIntoView()

        await expect(mainPage.aiFormText).toHaveText('Receive a call from Telnyx')

        await aiFormMainPage.setAiDemoFormRequiredInputs(testData.aiDemoForm.companyName, testData.aiDemoForm.domain, testData.aiDemoForm.mobilePhone, testData.aiDemoForm.email)
        await expect(aiFormMainPage.companyName).toHaveValue(testData.aiDemoForm.companyName)
        await expect(aiFormMainPage.domain).toHaveValue(testData.aiDemoForm.domain)
        await expect(aiFormMainPage.mobilePhone).toHaveValue(testData.aiDemoForm.mobilePhone)
        await expect(aiFormMainPage.email).toHaveValue(testData.aiDemoForm.email)

        await aiFormMainPage.checkTermsCheckboxByState(testData.aiDemoForm.agreeToTermsCheckboxState)
        if(testData.aiDemoForm.agreeToTermsCheckboxState === true){
            await expect(aiFormMainPage.termsCheckBox).toBeChecked()
        }else{
            await expect(aiFormMainPage.termsCheckBox).not.toBeChecked()
        }

        await aiFormMainPage.submitForm()
        await expect(aiFormMainPage.termsCheckboxErrorMessage).toHaveText(expect.stringContaining(testData.aiDemoForm.errorMessagePart))
    })

    it('should send a prompt and check the appearance of an assistant word in a chat with the AI model', async () => {
        await expect(mainPage.aiModelLink).toBeDisplayed()
        await mainPage.aiModelLink.scrollIntoView()

        await mainPage.clickOnAiModelLink()
        await expect(browser).toHaveUrl(expect.stringContaining('inference'))
        await expect(aiModelPage.header1).toHaveText(expect.stringContaining('Inference'))
    
        await expect(aiModelPage.userPrompt).toBeDisplayed()
    
        await aiModelPage.selectModelByName(testData.aiModelChat.aiModel)
        await expect(aiModelPage.selectModel).toHaveText(testData.aiModelChat.aiModel)

        await aiModelPage.moveSlider(testData.aiModelChat.valueToMoveSlider)
        await expect(aiModelPage.sliderHiddenValue).toHaveValue(testData.aiModelChat.valueToMoveSlider.toString())
    
        await aiModelPage.setUserPromptAndInputToAi(testData.aiModelChat.userPrompt, testData.aiModelChat.userInput)
        await expect(aiModelPage.amountOfSymbolsInUserPrompt).toHaveText(testData.aiModelChat.amountOfSymbolsInUserPrompt)
        await expect(aiModelPage.userInput).toHaveText(testData.aiModelChat.userInput)
    
        await aiModelPage.sendUserRequestToAi()
        await expect(aiModelPage.assistantDiv).toBeDisplayed()
    })

    it('should fill out the connect with us form and check the email in the link of the next page', async ()=> {
        await expect(connectWithUsMainPage.businessEmail).toBeDisplayed()
        await connectWithUsMainPage.businessEmail.scrollIntoView()

        await connectWithUsMainPage.setBusinessEmail(testData.connectWithUsForm.businessEmail)
        await expect(connectWithUsMainPage.businessEmail).toHaveValue(testData.connectWithUsForm.businessEmail)

        await connectWithUsMainPage.submitConnect()
    
        await expect(browser).toHaveUrl(expect.stringContaining('sign-up'))
        await expect(signupPage.header1).toHaveText("Create a Telnyx account")

        await expect(browser).toHaveUrl(expect.stringContaining(`?email=${encodeURIComponent(testData.connectWithUsForm.businessEmail)}`))
    })

    it('should check results in a table of global coverage with selected region', async() => {
        await expect(mainPage.globalCoverageFromFooterLink).toBeDisplayed()
        await mainPage.globalCoverageFromFooterLink.scrollIntoView()
        await mainPage.clickOnGlobalCoverageFromFooterLink()

        await expect(globalCoveragePage.viewFullCoverageLink).toBeDisplayed()
        await globalCoveragePage.clickOnViewFullCoverageLink()

        await globalCoveragePage.clickOnNumberTypesButton()

        await globalCoveragePage.clickOnSearchCountryButton()
        await globalCoveragePage.countryOrRegionByName(testData.globalCoverage.byRegion.region).click()
        await globalCoveragePage.clickOnSearchCountryButton()
        await expect(globalCoveragePage.searchCountryButton).toHaveText(testData.globalCoverage.byRegion.countryOrRegionAmountSelected)
        
        await expect(globalCoveragePage.tableWithResults).toBeElementsArrayOfSize(testData.globalCoverage.byRegion.resultsAmountInTable)
        await expect(globalCoveragePage.anyRowResult(testData.globalCoverage.byRegion.numberOfFirstRes)).toHaveText(testData.globalCoverage.byRegion.firstResultCountry)
        await expect(globalCoveragePage.anyRowResult(testData.globalCoverage.byRegion.numberOfLastRes)).toHaveText(testData.globalCoverage.byRegion.lastResultCountry)
    })

    it("should check an answer for a question about SDKs in SMS API section", async () => {
        await expect(mainPage.productsFromHeaderButton).toBeDisplayed()
        await mainPage.goToSmsApi()
    
        await expect(smsApiPage.header1).toHaveText("SMS API")

        await expect(smsApiPage.faqHeader).toBeDisplayed()
        await smsApiPage.faqHeader.scrollIntoView()
    
        await expect(smsApiPage.question(testData.smsApiFaq.telnyxSDKs.question)).toBeDisplayed()
        await expect(smsApiPage.question(testData.smsApiFaq.telnyxSDKs.question)).toHaveText(testData.smsApiFaq.telnyxSDKs.question)
        
        await smsApiPage.showAnswerToQuestion(testData.smsApiFaq.telnyxSDKs.question)
    
        await expect(smsApiPage.answer).toBeDisplayed()
        await expect(smsApiPage.answer).toHaveText(expect.stringContaining(testData.smsApiFaq.telnyxSDKs.answerPart))
    });

    it("should check an answer for a question about how to get started in SMS API section", async () => {
        await expect(mainPage.productsFromHeaderButton).toBeDisplayed()
        await mainPage.goToSmsApi()
    
        await expect(smsApiPage.header1).toHaveText("SMS API")

        await expect(smsApiPage.faqHeader).toBeDisplayed()
        await smsApiPage.faqHeader.scrollIntoView()
    
        await expect(smsApiPage.question(testData.smsApiFaq.getStarted.question)).toBeDisplayed()
        await expect(smsApiPage.question(testData.smsApiFaq.getStarted.question)).toHaveText(testData.smsApiFaq.getStarted.question)
        
        await smsApiPage.showAnswerToQuestion(testData.smsApiFaq.getStarted.question)
    
        await expect(smsApiPage.answer).toBeDisplayed()
        await expect(smsApiPage.answer).toHaveText(expect.stringContaining(testData.smsApiFaq.getStarted.answerPart))
    });

    it("should check an answer for a question about carrier fees in SMS API section", async () => {
        await expect(mainPage.productsFromHeaderButton).toBeDisplayed()
        await mainPage.goToSmsApi()
    
        await expect(smsApiPage.header1).toHaveText("SMS API")

        await expect(smsApiPage.faqHeader).toBeDisplayed()
        await smsApiPage.faqHeader.scrollIntoView()
    
        await expect(smsApiPage.question(testData.smsApiFaq.carrierFees.question)).toBeDisplayed()
        await expect(smsApiPage.question(testData.smsApiFaq.carrierFees.question)).toHaveText(testData.smsApiFaq.carrierFees.question)
        
        await smsApiPage.showAnswerToQuestion(testData.smsApiFaq.carrierFees.question)
    
        await expect(smsApiPage.answer).toBeDisplayed()
        await expect(smsApiPage.answer).toHaveText(expect.stringContaining(testData.smsApiFaq.carrierFees.answerPart))
    });

    it("should check an answer for a question about images and videos in SMS API section", async () => {
        await expect(mainPage.productsFromHeaderButton).toBeDisplayed()
        await mainPage.goToSmsApi()
    
        await expect(smsApiPage.header1).toHaveText("SMS API")

        await expect(smsApiPage.faqHeader).toBeDisplayed()
        await smsApiPage.faqHeader.scrollIntoView()
    
        await expect(smsApiPage.question(testData.smsApiFaq.imagesVideos.question)).toBeDisplayed()
        await expect(smsApiPage.question(testData.smsApiFaq.imagesVideos.question)).toHaveText(testData.smsApiFaq.imagesVideos.question)
        
        await smsApiPage.showAnswerToQuestion(testData.smsApiFaq.imagesVideos.question)
    
        await expect(smsApiPage.answer).toBeDisplayed()
        await expect(smsApiPage.answer).toHaveText(expect.stringContaining(testData.smsApiFaq.imagesVideos.answerPart))
    });

    it("should check pricing of voice API by selected country and currency", async () => {
        await expect(mainPage.pricingFromHeaderLink).toBeDisplayed()
        await mainPage.clickOnPricingFromHeaderLink()
        await expect(pricingPage.header1).toBeDisplayed()

        await expect(pricingPage.voiceApiLink).toBeDisplayed()
        await pricingPage.voiceApiLink.scrollIntoView()

        await pricingPage.goToVoiceApi()
        await expect(voiceApiPricingPage.header1).toHaveText("Voice API pricing")

        await expect(voiceApiPricingPage.payAsYouGoParag).toBeDisplayed()
        await voiceApiPricingPage.payAsYouGoParag.scrollIntoView()

        await voiceApiPricingPage.selectCountryFilter(testData.voiceApiPricing.country)
        await expect(voiceApiPricingPage.payAsYouGoParag).toHaveText(expect.stringContaining(testData.voiceApiPricing.country))

        await voiceApiPricingPage.selectCurrencyFilter(testData.voiceApiPricing.currency)
        await expect(voiceApiPricingPage.firstRowOfTable).toHaveText(expect.stringContaining(testData.voiceApiPricing.currencySymbol))
    })

    it("should show coverage in selected country on the global coverage map on the main page", async () => {
        await expect(mapMainPage.expoloreMapText).toBeDisplayed()
        await mapMainPage.expoloreMapText.scrollIntoView()

        await expect(mapMainPage.filterByServiceButton).toBeDisplayed()
        await mapMainPage.selectFilterByService(testData.globalCoverageMap.serviceFilter)
        await expect(mapMainPage.filterByServiceButton).toHaveText(testData.globalCoverageMap.serviceFilter)

        await expect(mapMainPage.filterByRegionButton).toBeDisplayed()
        await mapMainPage.selectFilterByRegion(testData.globalCoverageMap.regionFilter)
        await expect(mapMainPage.filterByRegionButton).toHaveText(testData.globalCoverageMap.regionFilter)

        if(process.env.HEADLESS_STATE === 'true') {
            await browser.keys('Enter');
        } else {
            await mapMainPage.updateMap();
        }

        await mapMainPage.selectCountryOnMap(testData.globalCoverageMap.countryCode)
    
        await browser.pause(10000)
        await expect(mapMainPage.countryNameOnMap(testData.globalCoverageMap.countryCode)).toHaveText(testData.globalCoverageMap.country, { ignoreCase: true })
        await expect(mapMainPage.resultAboutUkraineOnMap).toHaveText(testData.globalCoverageMap.expectedResult)
    });

    it("should check sim card pricing depending on input params", async () => {
        await expect(mainPage.exploreIotLink).toBeDisplayed()
        await mainPage.exploreIotLink.scrollIntoView()
        
        await mainPage.clickOnExploreIotLink()

        await expect(browser).toHaveUrl(expect.stringContaining('iot-sim-card'))

        await expect(iotSimCardPage.header2).toBeDisplayed()
        await iotSimCardPage.header2.scrollIntoView()

        await iotSimCardPage.setNumberOfSimCardInput(testData.iotSimCardCalc.numberOfSimCards)
        await expect(iotSimCardPage.numberOfSimCards).toHaveValue(testData.iotSimCardCalc.numberOfSimCards.toString())
        await iotSimCardPage.goToTheNextSection()

        await iotSimCardPage.setDataSimUsePerMonthInput(testData.iotSimCardCalc.dataSimUsePerMonth)
        await expect(iotSimCardPage.dataSimUsePerMonth).toHaveValue(testData.iotSimCardCalc.dataSimUsePerMonth.toString())
        await iotSimCardPage.goToTheNextSection()

        await iotSimCardPage.selectCountryByName(testData.iotSimCardCalc.country)
        await expect(iotSimCardPage.selectCountryButton).toHaveText(testData.iotSimCardCalc.country)
        await iotSimCardPage.goToTheNextSection()

        await iotSimCardPage.setUsagePublicApi(testData.iotSimCardCalc.usagePublicApiState)
        if(testData.iotSimCardCalc.usagePublicApiState === true){
            await expect(iotSimCardPage.yesOfUsagePublicApi).toBeChecked()
        }else{
            await expect(iotSimCardPage.noOfUsagePublicApi).toBeChecked()
        }
        await iotSimCardPage.goToTheNextSection()

        await expect(iotSimCardPage.resultCosts).toHaveText(testData.iotSimCardCalc.expectedResult)
    });

    it("should check telnyx storage pricing depending on input params", async ()=> {
        await expect(mainPage.pricingFromHeaderLink).toBeDisplayed()

        await mainPage.clickOnPricingFromHeaderLink()
        await expect(pricingPage.storageLink).toBeDisplayed()

        await pricingPage.goToStorage()
        await expect(storagePricingPage.header1).toBeDisplayed()

        await expect(storagePricingPage.header2).toBeDisplayed()
        await storagePricingPage.header2.scrollIntoView()

        await storagePricingPage.setInputNumber(testData.storageCostCalc.storage)
        await storagePricingPage.goToTheNextSection()

        await storagePricingPage.setInputNumber(testData.storageCostCalc.data)
        await storagePricingPage.goToTheNextSection()

        await expect(storagePricingPage.header3).toHaveText("Compare costs per month")
        await expect(storagePricingPage.telnyxResultCompany).toHaveText(testData.storageCostCalc.company, { ignoreCase : true })
        await expect(storagePricingPage.telnyxResultPrice).toHaveText(testData.storageCostCalc.expectedResult)
    })

    it("should check customer story `one text`", async ()=> {
        await expect(mainPage.resourcesFromHeaderButton).toBeDisplayed()
        await mainPage.goToCustomerStories()

        await expect(customerStoriesPage.header).toHaveText("Customer Stories")

        await customerStoriesPage.clickOnStoryByName(testData.customerStory.story)

        await expect(oneTextStoryPage.header).toHaveText(testData.customerStory.story)
        await expect(oneTextStoryPage.increasedInXTimesParagr).toHaveText(testData.customerStory.increasedInXTimes)
        await expect(oneTextStoryPage.moreWordParagr).toHaveText(testData.customerStory.moreWord)
        await expect(oneTextStoryPage.percentageParagr).toHaveText(testData.customerStory.percentage)

        await oneTextStoryPage.startingSmallHeaderInArticle.scrollIntoView()
        await expect(oneTextStoryPage.startingSmallHeaderInArticle).toHaveText(testData.customerStory.firstHeaderInTheArticle)
        await expect(oneTextStoryPage.rapidScalingHeaderInArticle).toHaveText(testData.customerStory.secondHeaderInTheArticle)
        await expect(oneTextStoryPage.brightFutureHeaderInArticle).toHaveText(testData.customerStory.thirdHeaderInTheArticle)
    })

    it("should submit the partnership form", async ()=> {
        await expect(mainPage.whyTelnyxFromHeaderButton).toBeDisplayed()
        await mainPage.goToPartnership()

        await expect(browser).toHaveUrl(expect.stringContaining("partnerships"))

        await expect(partnershipPage.header2).toBeDisplayed()
        await partnershipPage.header2.scrollIntoView()

        await partnershipPage.setPartnershipRequiredInputs(testData.partnershipForm.firstName, testData.partnershipForm.lastName, testData.partnershipForm.companyName, 
            testData.partnershipForm.businessEmail, testData.partnershipForm.mobilePhone, testData.partnershipForm.reasonToBePartner)
        await expect(partnershipPage.firstName).toHaveValue(testData.partnershipForm.firstName)
        await expect(partnershipPage.lastName).toHaveValue(testData.partnershipForm.lastName)
        await expect(partnershipPage.company).toHaveValue(testData.partnershipForm.companyName)
        await expect(partnershipPage.email).toHaveValue(testData.partnershipForm.businessEmail)
        await expect(partnershipPage.phoneNumber).toHaveValue(testData.partnershipForm.mobilePhone)
        await expect(partnershipPage.reasonToBePartner).toHaveValue(testData.partnershipForm.reasonToBePartner)

        await partnershipPage.selectCountryByName(testData.partnershipForm.country)
        await partnershipPage.selectPartnerTypeByName(testData.partnershipForm.partnerType)
        await partnershipPage.submitApply()

        await expect(partnershipPage.thankYouText).toHaveText(testData.partnershipForm.thankYouText)
        await expect(partnershipPage.thankYouMessage).toHaveText(testData.partnershipForm.thankYouMessage)
    })

    it("should search the use case by keyword in healthcare and check first result", async ()=> {
        await expect(mainPage.solutionsFromHeaderButton).toBeDisplayed()
        await mainPage.goToHealthcare()

        await expect(browser).toHaveUrl(expect.stringContaining("solutions/healthcare"))
        await expect(healthcarePage.header).toHaveText("Healthcare")

        await expect(healthcarePage.header2).toBeDisplayed()
        await healthcarePage.header2.scrollIntoView()

        await healthcarePage.clickOnSeeAllLink()
        await expect(browser).toHaveUrl(expect.stringContaining("use-cases"))

        await useCasesPage.setSearchInput(testData.useCasesSearch.validSearch.request)
        await browser.keys("Enter")
        await expect(useCasesPage.firstResultHeader).toHaveText(expect.stringContaining(testData.useCasesSearch.validSearch.request))
    })

    it("should search by an invalid keyword in healthcare and check no results message", async ()=> {
        await expect(mainPage.solutionsFromHeaderButton).toBeDisplayed()
        await mainPage.goToHealthcare()

        await expect(browser).toHaveUrl(expect.stringContaining("solutions/healthcare"))
        await expect(await healthcarePage.header).toHaveText("Healthcare")

        await expect(healthcarePage.header2).toBeDisplayed()
        await healthcarePage.header2.scrollIntoView()

        await healthcarePage.clickOnSeeAllLink()
        await expect(browser).toHaveUrl(expect.stringContaining("use-cases"))

        await useCasesPage.setSearchInput(testData.useCasesSearch.invalidSearch.request)
        await browser.keys("Enter")
        await expect(useCasesPage.noResultsMessage).toHaveText(testData.useCasesSearch.invalidSearch.noResultsMessage)
    })

    it("should check programmable networking pricing by selected currency ", async ()=> {
        await expect(mainPage.pricingFromHeaderLink).toBeDisplayed()
        await mainPage.clickOnPricingFromHeaderLink()
        await expect(pricingPage.header1).toBeDisplayed()

        await expect(pricingPage.programmableNetworkingLink).toBeDisplayed()
        await pricingPage.programmableNetworkingLink.scrollIntoView()

        await pricingPage.goToProgrammableNetworking()
        await expect(programmableNetworkingPage.header1).toHaveText("Programmable Networking pricing")

        await expect(programmableNetworkingPage.payAsYouGoParag).toBeDisplayed()
        await programmableNetworkingPage.payAsYouGoParag.scrollIntoView()

        await programmableNetworkingPage.selectCurrencyFilter(testData.programmableNetworkingPricing.currency)
        await expect(programmableNetworkingPage.firstRowFirstColOfTable).toHaveText(expect.stringContaining(testData.programmableNetworkingPricing.currencySymbol))
        await expect(programmableNetworkingPage.firstRowSecindColOfTable).toHaveText(expect.stringContaining(testData.programmableNetworkingPricing.currencySymbol))
        await expect(programmableNetworkingPage.firstRowThirdColOfTable).toHaveText(expect.stringContaining(testData.programmableNetworkingPricing.currencySymbol))
    })

    it("should submit download pricing form on messaging api page", async() => {
        await expect(mainPage.pricingFromHeaderLink).toBeDisplayed()
        await mainPage.clickOnPricingFromHeaderLink()
        await expect(pricingPage.header1).toBeDisplayed()

        await expect(pricingPage.messagingApiLink).toBeDisplayed()
        await pricingPage.messagingApiLink.scrollIntoView()

        await pricingPage.goToMessagingApi()

        await expect(messagingApiPricingPage.header1).toHaveText("Messaging API pricing")

        await expect(messagingApiPricingPage.header2InDownloadForm).toBeDisplayed()
        await messagingApiPricingPage.header2InDownloadForm.scrollIntoView()

        await messagingApiPricingPage.setDownloadPricingRequiredInputs(testData.downloadPricingForm.firstName, testData.downloadPricingForm.lastName,
             testData.downloadPricingForm.businessEmail)
        await expect(messagingApiPricingPage.firstName).toHaveValue(testData.downloadPricingForm.firstName)
        await expect(messagingApiPricingPage.lastName).toHaveValue(testData.downloadPricingForm.lastName)
        await expect(messagingApiPricingPage.businessEmail).toHaveValue(testData.downloadPricingForm.businessEmail)

        await messagingApiPricingPage.submitDownloadPricing()
        
        await expect(messagingApiPricingPage.thankYouText).toHaveText(testData.downloadPricingForm.thankYouText)
        await expect(messagingApiPricingPage.thankYouMessage).toHaveText(expect.stringContaining(testData.downloadPricingForm.thankYouMessagePart))
    })
    
    it("should check `how it works` statments on mission control portal page", async ()=> {
        await expect(mainPage.whyTelnyxFromHeaderButton).toBeDisplayed()
        await mainPage.goToMissionControl()

        await expect(browser).toHaveUrl(expect.stringContaining("mission"))
        await expect(missionControlPage.header1).toHaveText("Mission Control Portal")

        await missionControlPage.requestByNumber(testData.howItWorksStatemnts.monitorUsage.number).scrollIntoView()
        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.setUp.number)).toBeDisplayed()
        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.setUp.number)).toHaveText(testData.howItWorksStatemnts.setUp.request)
        await expect(missionControlPage.responseByNumber(testData.howItWorksStatemnts.setUp.number)).toBeDisplayed()
        await expect(await missionControlPage.responseByNumber(testData.howItWorksStatemnts.setUp.number)).toHaveText(expect.stringContaining(testData.howItWorksStatemnts.setUp.responsePart))

        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.buyPhone.number)).toBeDisplayed()
        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.buyPhone.number)).toHaveText(testData.howItWorksStatemnts.buyPhone.request)
        await missionControlPage.clickOnExpandArrowByNumber(testData.howItWorksStatemnts.buyPhone.number)
        await expect(missionControlPage.responseByNumber(testData.howItWorksStatemnts.buyPhone.number)).toBeDisplayed()
        await expect(await missionControlPage.responseByNumber(testData.howItWorksStatemnts.buyPhone.number)).toHaveText(expect.stringContaining(testData.howItWorksStatemnts.buyPhone.responsePart))
        
        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.configure.number)).toBeDisplayed()
        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.configure.number)).toHaveText(testData.howItWorksStatemnts.configure.request)
        await missionControlPage.clickOnExpandArrowByNumber(testData.howItWorksStatemnts.configure.number)
        await expect(missionControlPage.responseByNumber(testData.howItWorksStatemnts.configure.number)).toBeDisplayed()
        await expect(await missionControlPage.responseByNumber(testData.howItWorksStatemnts.configure.number)).toHaveText(expect.stringContaining(testData.howItWorksStatemnts.configure.responsePart))

        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.monitorUsage.number)).toBeDisplayed()
        await expect(await missionControlPage.requestByNumber(testData.howItWorksStatemnts.monitorUsage.number)).toHaveText(testData.howItWorksStatemnts.monitorUsage.request)
        await missionControlPage.clickOnExpandArrowByNumber(testData.howItWorksStatemnts.monitorUsage.number)
        await expect(missionControlPage.responseByNumber(testData.howItWorksStatemnts.monitorUsage.number)).toBeDisplayed()
        await expect(await missionControlPage.responseByNumber(testData.howItWorksStatemnts.monitorUsage.number)).toHaveText(expect.stringContaining(testData.howItWorksStatemnts.monitorUsage.responsePart))
    })
})

