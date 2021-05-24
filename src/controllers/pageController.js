// Home
export const home = (req, res) => res.render("home", {pageTitle:"Home"})
export const search = (req, res) => res.render("search")

// WTS 웨스트민스터 글로벌 미니스트리
export const wts = (req, res) => res.render("wts", {pageTitle: "WTS 글로벌 미니스트리"})
export const wtsMission = (req, res) => res.render("mission")
export const wtsLeadership = (req, res) => res.render("leadership")
export const wtsVision = (req, res) => res.render("vision")
export const wtsMinistry = (req, res) => res.render("ministry")

// PARTNERS 파트너스
export const partners = (req, res) => res.render("partners", {pageTitle: "파트너스"})
export const partnersBOS = (req, res) => res.render("partnersBOS")
export const partnersHonors = (req, res) => res.render("partnersHonors")
export const partnersCouncil = (req, res) => res.render("partnersCouncil")
export const partnersOrganization = (req, res) => res.render("partnersOrganization")

// CAMPAIGN 기금안내, 기금소개
export const campaign = (req, res) => res.render("campaign", {pageTitle: "기금소개"})
export const campaignPresident = (req, res) => res.render("campaignPresident")
export const campaignBoardOfSponsors = (req, res) => res.render("campaignBOS")
export const campaignFive = (req, res) => res.render("campaignFive")
export const campaignReport = (req, res) => res.send("campaign report")


// GIVING 후원참여, 후원신청
export const giving = (req, res) => res.render("giving", {pageTitle: "후원신청"})
export const givingAction = (req, res) => res.render("givingAction")
export const givingOnline = (req, res) => res.render("givingOnline")
export const givingMyPage = (req, res) => res.render("givingMyPage")
export const givingTaxBenefit = (req, res) => res.send("Giving TaxBenefit")
export const givingQuestion = (req, res) => res.send("Giving FAQ")


// BENEFIT 후원자 예우
export const benefit = (req, res) => res.send("Benefit index")
export const benefitDonors = (req, res) => res.send("Benefit Donors")
export const benefitHonors = (req, res) => res.send("Benefit Honors")


// NEWS 기부스토리, 기부소식
export const news = (req, res) => res.render("news", {pageTitle: "뉴스"})
export const newsNotice = (req, res) => res.render("News Notice")
export const newsStory = (req, res) => res.render("News Story")
export const newsLetter = (req, res) => res.render("News Letter")