const HOME = "/"
const JOIN = "/join"
const LOGIN = "/login"
const LOGOUT = "/logout"
const SEARCH = "/search"

// User
const USERS = "/users"
const USER_DETAIL = "/:id"
const EDIT_PROFILE = "/edit-profile"
const CHANGE_PASSWORD = "/change-password"

// Westminster Global Ministry 웨스트민스터 글로벌 미니스트리
const WTS = "/wts"
const WTS_MISSION = "/mission" // 사명선언문
const WTS_LEADERSHIP = "/leadership" // 리더쉽
const WTS_VISION = "/vision" // 우리의 비전
const WTS_MINISTRY = "/ministry" // 사역(?)

// Partners 파트너스
const PARTNERS = "/partners"
const PARTNERS_BOS = "/bos" // WTS 후원이사
const PARTNERS_HONORS = "/honors" // 후원이사 아너스클럽
const PARTNERS_COUNCIL = "/council" // 한국 자문위원단
const PARTNERS_ORGANIZATION = "/organization" //협력기관

// Campaign 기금소개, 기금안내
const CAMPAIGN = "/campaign" 
const CAMPAIGN_PRESIDENT = "/president" //총장인사말
const CAMPAIGN_BOARDOFSPONSORS = "/boardofsponsors" //기금소개(후원이사 기금)
const CAMPAIGN_FIVE = "/five" //기금소개(오병이어 장학기금)
const CAMPAIGN_REPORT = "/report" // 기부금 연간보고서?

// Giving 후원신청 및 참여
const GIVING = "/giving"
const GIVING_ACTION = "/action" // 참여방법
const GIVING_ONLINE = "/online" // 온라인 후원신청
const GIVING_MYPAGE = "/myPage" // 나의 기부, 기부자 페이지 (후원내역_연도별, 후원자정보, 기부금 영수증)
const GIVING_TAX_BENEFIT = "/taxBenefit" // 세제혜택
const GIVING_FAQ = "/question" // FAQ

// Benefit 기부자 예우
const BENEFIT = "/benefit"
const BENEFIT_DONORS = "/donors" // 후원자 예우
const BENEFIT_HONORS = "/honors" // 아너스 클럽

// News 기부스토리, 기부뉴스
const NEWS = "/news" 
const NEWS_STORY = "/story" // 기부뉴스, 기부스토리
const NEWS_LETTER = "/letter" // 발전기금 뉴스레터


const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    wts: WTS,
    wtsMission: WTS_MISSION,
    wtsLeadership: WTS_LEADERSHIP,
    wtsVision: WTS_VISION,
    wtsMinistry: WTS_MINISTRY,
    partners: PARTNERS,
    partnersBOS: PARTNERS_BOS,
    partnersHonors: PARTNERS_HONORS,
    partnersCouncil: PARTNERS_COUNCIL,
    partnersOrganization: PARTNERS_ORGANIZATION,
    campaign: CAMPAIGN,
    campaignPresident: CAMPAIGN_PRESIDENT,
    campaignBoardOfSponsors: CAMPAIGN_BOARDOFSPONSORS,
    campaignFive: CAMPAIGN_FIVE,
    campaignReport: CAMPAIGN_REPORT,
    giving: GIVING,
    givingAction: GIVING_ACTION,
    givingOnline : GIVING_ONLINE,
    givingMyPage: GIVING_MYPAGE,
    givingTaxBenefit: GIVING_TAX_BENEFIT,
    givingQuestion: GIVING_FAQ,
    benefit: BENEFIT,
    benefitDonors: BENEFIT_DONORS,
    benefitHonors: BENEFIT_HONORS,
    news: NEWS,
    newsStory: NEWS_STORY,
    newsLetter: NEWS_LETTER
}

export default routes