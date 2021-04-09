// Home
export const home = (req, res) => res.send("home")
export const search = (req, res) => res.send("search")

// WTS 웨스트민스터 글로벌 미니스트리
export const wts = (req, res) => res.send("WTS Global Ministry")
export const wtsMission = (req, res) => res.send("WTS Mission")
export const wtsLeadership = (req, res) => res.send("WTS Leadership")
export const wtsVision = (req, res) => res.send("WTS Vision")
export const wtsMinistry = (req, res) => res.send("WTS Ministry")

// PARTNERS 파트너스
export const partners = (req, res) => res.send("Partners")
export const partnersBOS = (req, res) => res.send("Partners Board Of Sponsors")
export const partnersHonors = (req, res) => res.send("Partners Honors Club")
export const partnersCouncil = (req, res) => res.send("Partners Korean Council")
export const partnersOrganization = (req, res) => res.send("Partners Organization")

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


// BENEFIT 파트너스
export const benefit = (req, res) => res.send("파트너스")
export const benefitDonors = (req, res) => res.send("Benefit Donors")
export const benefitHonors = (req, res) => res.send("Benefit Honors")


// NEWS 기부스토리, 기부소식
export const news = (req, res) => res.send("News Index")
export const newsStory = (req, res) => res.send("News Story")
export const newsLetter = (req, res) => res.send("News Letter")