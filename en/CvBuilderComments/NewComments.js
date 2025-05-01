// Set Default Selected Country = Egypt
var setDefaultCountry = function () {

    if( ! localStorage.getItem("countryname")){
    $("#countryname").val("Egypt").change();
    }
    else{
        $("#countryname").val(localStorage.getItem("countryname")).change();  
    }
    if ($("#countryname").data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        $("#countryname").data('options', $('#governoratename option').clone());      
    }
if( ! localStorage.getItem("governoratename")){
    var idc1 = "Egypt";
    var optionsc1 = $("#countryname").data('options').filter('[value="' + idc1 + '"]');
    $('#governoratename').html(optionsc1).change();
}
   else{
    var idc1 = localStorage.getItem("countryname");
    var optionsc1 = $("#countryname").data('options').filter('[value="' + idc1 + '"]');
    $('#governoratename').html(optionsc1);
  Array.from(optionsc1).forEach((ele,id)=>{
console.log(ele.innerHTML);

console.log(localStorage.getItem("governoratename"))
if(ele.innerHTML==localStorage.getItem("governoratename")){

  console.log(optionsc1);
    console.log("from newcomm");
    console.log(localStorage.getItem("governoratename"));
    console.log( document.getElementsByClassName("governoratename")[0].options)

    document.getElementsByClassName("governoratename")[0].options.selectedIndex=id.toString();

    // $('#governoratename').val(localStorage.getItem('governoratename'));
    // if($('#governoratename').attr("key")==localStorage.getItem("governoratename")){
    // }

    // $(`#governoratename options[key=${localStorage.getItem("governoratename")}]`).attr("selected","selected")


  }});
   } 
};

// Set Default Selected Country = Egypt
var setDefaultCountryEdu = function () {
  
    ($('.activeeduxform').find("#eduxcountryfield")).val("Egypt").change();
    

    
    if (($('.activeeduxform').find("#eduxcountryfield")).data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        ($('.activeeduxform').find("#eduxcountryfield")).data('options', $('#eduxcityfield option').clone());
    }

    var idc1 = "Egypt";
    var optionsc2 = ($('.activeeduxform').find("#eduxcountryfield")).data('options').filter('[value="' + idc1 + '"]');
    ($('.activeeduxform').find("#eduxcityfield")).html(optionsc2).change();




};

var setDefaultCountryExp = function () {

    ($('.activeform').find("#expcountryfield")).val("Egypt").change();

    if (($('.activeform').find("#expcountryfield")).data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        ($('.activeform').find("#expcountryfield")).data('options', $('#expcityfield option').clone());
    }

    var idc1 = "Egypt";
    var optionsc2 = ($('.activeform').find("#expcountryfield")).data('options').filter('[value="' + idc1 + '"]');
    ($('.activeform').find("#expcityfield")).html(optionsc2).change();




};


var  setDefaultCountrycoverletteren = function () {
  
    if( ! localStorage.getItem("countrynamecoverletteren")){
    $("#countrynamecoverletteren").val("Egypt").change();
    }
    else{
        $("#countrynamecoverletteren").val(localStorage.getItem("countrynamecoverletteren")).change();  
    }
    if ($("#countrynamecoverletteren").data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        $("#countrynamecoverletteren").data('options', $('#governoratenamecoverletteren option').clone());      
    }
if( ! localStorage.getItem("governoratenamecoverletteren")){
    var idc6 = "Egypt";
    var optionsc6 = $("#countrynamecoverletteren").data('options').filter('[value="' + idc6 + '"]');
    $('#governoratenamecoverletteren').html(optionsc6).change();
}
   else{
    var idc1 = localStorage.getItem("countrynamecoverletteren");
    var optionsc6 = $("#countrynamecoverletteren").data('options').filter('[value="' + idc6 + '"]');
    $('#governoratenamecoverletteren').html(optionsc6);
  Array.from(optionsc6).forEach((ele,id)=>{
console.log(ele.innerHTML);

console.log(localStorage.getItem("governoratenamecoverletteren"))
if(ele.innerHTML==localStorage.getItem("governoratenamecoverletteren")){
   ;
  console.log(optionsc1);
    console.log("from newcomm");
    console.log(localStorage.getItem("governoratenamecoverletteren"));
    console.log( document.getElementsByClassName("governoratenamecoverletteren")[0].options)

    document.getElementsByClassName("governoratenamecoverletteren")[0].options.selectedIndex=id.toString();

    // $('#governoratename').val(localStorage.getItem('governoratename'));
    // if($('#governoratename').attr("key")==localStorage.getItem("governoratename")){
    // }

    // $(`#governoratename options[key=${localStorage.getItem("governoratename")}]`).attr("selected","selected")


  }});
   } 
}
