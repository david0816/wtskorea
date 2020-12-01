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

// WTS
const WTS = "/wts"
const WTS_HISTORY = "/history"
const WTS_PRESIDENT = "/president"
const WTS_FACULTY = "/faculty"
const WTS_KOREAOFFICE = "/korea-office"

// Campaign
const CAMPAIGN = "/campaign"
const CAMPAIGN_OVERVIEW = "/overview"
const CAMPAIGN_DOCUMENTS = "/documents"
const CAMPAIGN_DONATION = "/donation"

// Conference
const CONFERENCE = "/conference"
const CONFERENCE_REGISTER = "/register"
const CONFERENCE_LECTURE = "/lecture"
const CONFERENCE_NOTICE = "/notice"

// Alumni
const ALUMNI = "/alumni"


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
    wtsHistory: WTS_HISTORY,
    wtsPresident: WTS_PRESIDENT,
    wtsFaculty: WTS_FACULTY,
    wtsKoreaOffice: WTS_KOREAOFFICE,
    campaign: CAMPAIGN,
    campaginOverview: CAMPAIGN_OVERVIEW,
    campaignDocuments: CAMPAIGN_DOCUMENTS,
    campaignDonation: CAMPAIGN_DONATION,
    conference: CONFERENCE,
    conferenceRegister: CONFERENCE_REGISTER,
    conferenceLecture: CONFERENCE_LECTURE,
    conferenceNotice: CONFERENCE_NOTICE,
    alumni: ALUMNI
}

export default routes