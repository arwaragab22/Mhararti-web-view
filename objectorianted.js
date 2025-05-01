class personalinformation {
    constructor(fullname, address, countrynamecoverletteren,
        governoratenamecoverletteren, email, mobile, phone, zipcode, personalinformationflag) {
        this.fullname = fullname;
        this.address = address;
        this.countrynamecoverletteren = countrynamecoverletteren;
        this.governoratenamecoverletteren = governoratenamecoverletteren;
        this.email = email;
        this.mobile = mobile;
        this.phone = phone;
        this.zipcode = zipcode;
        this.personalinformationflag = personalinformationflag;
    }
}
class employerinformation {
    constructor(em_name, em_gender, em_jobtitle, em_coname, em_coaddress, employerflag) {

        this.em_name = em_name;
        this.em_gender = em_gender;
        this.em_jobtitle = em_jobtitle;
        this.em_coname = em_coname;
        this.em_coaddress = em_coaddress;
        this.employerflag = employerflag;
    }
}
class introduction {
    constructor(introduction, inreoductionflag) {
        this.introduction = introduction;
        this.inreoductionflag = inreoductionflag;
    }
}
class body {
    constructor(xbody, bodyflag) {
        this.xbody = xbody;
        this.bodyflag = bodyflag;
    }
}
class closing {
    constructor(closing, closingflag) {
        this.closing = closing;
        this.closingflag = closingflag;
    }
}
var cvbuilder = {};
function fetchcvbuilder() {
    if (localStorage.getItem("cvbuilder")) {
        cvbuilder = JSON.parse(localStorage.getItem("cvbuilder"));
        console.log(cvbuilder)
        return cvbuilder;
    }
    if (!localStorage.getItem("cvbuilder")) {
        cvbuilder = { "coverletteren": {}, "coverletterar": {}, "cvar": {}, "cven": {} };
        console.log(cvbuilder);
        return cvbuilder;
    }
}

function readystate() {


    if (localStorage.getItem("cvbuilder")) {
        cvbuilder = JSON.parse(localStorage.getItem("cvbuilder"));
        console.log(cvbuilder)
        return cvbuilder
    }
    if (!localStorage.getItem("cvbuilder")) {
        cvbuilder = { "coverletteren": {}, "coverletterar": {}, "cvar": {}, "cven": {} };
        return cvbuilder;
    }
    if (localStorage.getItem("cvbuilder") == '{}') {
        cvbuilder = { "coverletteren": {}, "coverletterar": {}, "cvar": {}, "cven": {} };
        return cvbuilder;
    }







}
class personalinformationcv {

    constructor(fullname, address, countryname,
        governoratename, email, mobile, phone, zipcode, personalinformationflag) {
        this.fullname = fullname;
        this.address = address;
        this.countrynamecoverletteren = countrynamecoverletteren;
        this.governoratenamecoverletteren = governoratenamecoverletteren;
        this.email = email;
        this.mobile = mobile;
        this.phone = phone;
        this.zipcode = zipcode;
        this.personalinformationflag = personalinformationflag;
    }
}

class jobobjectivecv {

    constructor(jobobjective, jobobjectiveflag) {
        this.jobobjective = jobobjective;
        this.jobobjectiveflag = jobobjectiveflag;

    }
}

class summaryar {

    constructor(summary, summaryflag) {
        this.summary = summary;
        this.summaryflag = summaryflag;

    }
}
class experiencedataar {

    constructor(id, expitem) {
        this.id = id;
        this.expitem = expitem;

    }
}
class educationexdataar {

    constructor(id, eduxitem) {
        this.id = id;
        this.eduxitem = eduxitem;


    }
}
class references {

    constructor(id, refnamefield, refphone, refaddressfield, refconamefield, refpersonfield) {
        this.id = id;
        this.refconamefield = refnamefield;
        this.refphone = refphone;
        this.refaddressfield = refaddressfield;
        this.refconamefield = refconamefield;
        this.refpersonfield=refpersonfield


    }
}
