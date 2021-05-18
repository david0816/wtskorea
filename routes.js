"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; // User

var USERS = "/users";
var USER_DETAIL = "/:id";
var EDIT_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password"; // Westminster Global Ministry 웨스트민스터 글로벌 미니스트리

var WTS = "/wts";
var WTS_MISSION = "/mission"; // 사명선언문

var WTS_LEADERSHIP = "/leadership"; // 리더쉽

var WTS_VISION = "/vision"; // 우리의 비전

var WTS_MINISTRY = "/ministry"; // 사역(?)
// Partners 파트너스

var PARTNERS = "/partners";
var PARTNERS_BOS = "/bos"; // WTS 후원이사

var PARTNERS_HONORS = "/honors"; // 후원이사 아너스클럽

var PARTNERS_COUNCIL = "/council"; // 한국 자문위원단

var PARTNERS_ORGANIZATION = "/organization"; //협력기관
// Campaign 기금소개, 기금안내

var CAMPAIGN = "/campaign";
var CAMPAIGN_PRESIDENT = "/president"; //총장인사말

var CAMPAIGN_BOARDOFSPONSORS = "/boardofsponsors"; //기금소개(후원이사 기금)

var CAMPAIGN_FIVE = "/five"; //기금소개(오병이어 장학기금)

var CAMPAIGN_REPORT = "/report"; // 기부금 연간보고서?
// Giving 후원신청 및 참여

var GIVING = "/giving";
var GIVING_ACTION = "/action"; // 참여방법

var GIVING_ONLINE = "/online"; // 온라인 후원신청

var GIVING_MYPAGE = "/myPage"; // 나의 기부, 기부자 페이지 (후원내역_연도별, 후원자정보, 기부금 영수증)

var GIVING_TAX_BENEFIT = "/taxBenefit"; // 세제혜택

var GIVING_FAQ = "/question"; // FAQ
// Benefit 기부자 예우

var BENEFIT = "/benefit";
var BENEFIT_DONORS = "/donors"; // 후원자 예우

var BENEFIT_HONORS = "/honors"; // 아너스 클럽
// News 기부스토리, 기부뉴스

var NEWS = "/news";
var NEWS_STORY = "/story"; // 기부뉴스, 기부스토리

var NEWS_LETTER = "/letter"; // 발전기금 뉴스레터

var routes = {
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
  givingOnline: GIVING_ONLINE,
  givingMyPage: GIVING_MYPAGE,
  givingTaxBenefit: GIVING_TAX_BENEFIT,
  givingQuestion: GIVING_FAQ,
  benefit: BENEFIT,
  benefitDonors: BENEFIT_DONORS,
  benefitHonors: BENEFIT_HONORS,
  news: NEWS,
  newsStory: NEWS_STORY,
  newsLetter: NEWS_LETTER
};
var _default = routes;
exports["default"] = _default;