"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsLetter = exports.newsStory = exports.news = exports.benefitHonors = exports.benefitDonors = exports.benefit = exports.givingQuestion = exports.givingTaxBenefit = exports.givingMyPage = exports.givingOnline = exports.givingAction = exports.giving = exports.campaignReport = exports.campaignFive = exports.campaignBoardOfSponsors = exports.campaignPresident = exports.campaign = exports.partnersOrganization = exports.partnersCouncil = exports.partnersHonors = exports.partnersBOS = exports.partners = exports.wtsMinistry = exports.wtsVision = exports.wtsLeadership = exports.wtsMission = exports.wts = exports.search = exports.home = void 0;

// Home
var home = function home(req, res) {
  return res.render("index", {
    pageTitle: "Home"
  });
};

exports.home = home;

var search = function search(req, res) {
  return res.render("search");
}; // WTS 웨스트민스터 글로벌 미니스트리


exports.search = search;

var wts = function wts(req, res) {
  return res.render("wts", {
    pageTitle: "WTS 글로벌 미니스트리"
  });
};

exports.wts = wts;

var wtsMission = function wtsMission(req, res) {
  return res.render("mission");
};

exports.wtsMission = wtsMission;

var wtsLeadership = function wtsLeadership(req, res) {
  return res.render("leadership");
};

exports.wtsLeadership = wtsLeadership;

var wtsVision = function wtsVision(req, res) {
  return res.render("vision");
};

exports.wtsVision = wtsVision;

var wtsMinistry = function wtsMinistry(req, res) {
  return res.render("ministry");
}; // PARTNERS 파트너스


exports.wtsMinistry = wtsMinistry;

var partners = function partners(req, res) {
  return res.render("partners", {
    pageTitle: "파트너스"
  });
};

exports.partners = partners;

var partnersBOS = function partnersBOS(req, res) {
  return res.render("partnersBOS");
};

exports.partnersBOS = partnersBOS;

var partnersHonors = function partnersHonors(req, res) {
  return res.render("partnersHonors");
};

exports.partnersHonors = partnersHonors;

var partnersCouncil = function partnersCouncil(req, res) {
  return res.render("partnersCouncil");
};

exports.partnersCouncil = partnersCouncil;

var partnersOrganization = function partnersOrganization(req, res) {
  return res.render("partnersOrganization");
}; // CAMPAIGN 기금안내, 기금소개


exports.partnersOrganization = partnersOrganization;

var campaign = function campaign(req, res) {
  return res.render("campaign", {
    pageTitle: "기금소개"
  });
};

exports.campaign = campaign;

var campaignPresident = function campaignPresident(req, res) {
  return res.render("campaignPresident");
};

exports.campaignPresident = campaignPresident;

var campaignBoardOfSponsors = function campaignBoardOfSponsors(req, res) {
  return res.render("campaignBOS");
};

exports.campaignBoardOfSponsors = campaignBoardOfSponsors;

var campaignFive = function campaignFive(req, res) {
  return res.render("campaignFive");
};

exports.campaignFive = campaignFive;

var campaignReport = function campaignReport(req, res) {
  return res.send("campaign report");
}; // GIVING 후원참여, 후원신청


exports.campaignReport = campaignReport;

var giving = function giving(req, res) {
  return res.render("giving", {
    pageTitle: "후원신청"
  });
};

exports.giving = giving;

var givingAction = function givingAction(req, res) {
  return res.render("givingAction");
};

exports.givingAction = givingAction;

var givingOnline = function givingOnline(req, res) {
  return res.render("givingOnline");
};

exports.givingOnline = givingOnline;

var givingMyPage = function givingMyPage(req, res) {
  return res.render("givingMyPage");
};

exports.givingMyPage = givingMyPage;

var givingTaxBenefit = function givingTaxBenefit(req, res) {
  return res.send("Giving TaxBenefit");
};

exports.givingTaxBenefit = givingTaxBenefit;

var givingQuestion = function givingQuestion(req, res) {
  return res.send("Giving FAQ");
}; // BENEFIT 후원자 예우


exports.givingQuestion = givingQuestion;

var benefit = function benefit(req, res) {
  return res.send("Benefit index");
};

exports.benefit = benefit;

var benefitDonors = function benefitDonors(req, res) {
  return res.send("Benefit Donors");
};

exports.benefitDonors = benefitDonors;

var benefitHonors = function benefitHonors(req, res) {
  return res.send("Benefit Honors");
}; // NEWS 기부스토리, 기부소식


exports.benefitHonors = benefitHonors;

var news = function news(req, res) {
  return res.render("news", {
    pageTitle: "뉴스"
  });
};

exports.news = news;

var newsStory = function newsStory(req, res) {
  return res.send("News Story");
};

exports.newsStory = newsStory;

var newsLetter = function newsLetter(req, res) {
  return res.send("News Letter");
};

exports.newsLetter = newsLetter;