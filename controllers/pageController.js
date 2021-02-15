// Home
export const home = (req, res) => res.send("home")
export const search = (req, res) => res.send("search")


// CAMPAIGN 기금안내, 기금소개
export const campaign = (req, res) => res.send("Campaign index")
export const campaignPresident = (req, res) => res.send("campaign president")
export const campaignProgram = (req, res) => res.send("campaign program")
export const campaignBrochure = (req, res) => res.send("campaign brochure")
export const campaignReport = (req, res) => res.send("campaign report")


// GIVING 후원참여, 후원신청
export const giving = (req, res) => res.send("Giving index")
export const givingAction = (req, res) => res.send("Giving Action")
export const givingOnline = (req, res) => res.send("Giving Online")
export const givingMyPage = (req, res) => res.send("Giving Mypage")
export const givingTaxBenefit = (req, res) => res.send("Giving TaxBenefit")
export const givingQuestion = (req, res) => res.send("Giving FAQ")


// BENEFIT 기부자 예우
export const benefit = (req, res) => res.send("Benfit Index")
export const benefitDonors = (req, res) => res.send("Benefit Donors")
export const benefitHonors = (req, res) => res.send("Benefit Honors")


// NEWS 기부스토리, 기부소식
export const news = (req, res) => res.send("News Index")
export const newsStory = (req, res) => res.send("News Story")
export const newsLetter = (req, res) => res.send("News Letter")