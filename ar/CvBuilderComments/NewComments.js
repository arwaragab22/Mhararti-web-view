// // Set Default Selected Country = Egypt
var setDefaultCountry = function () {
    if( ! localStorage.getItem("countryname")){
    $("#countryname").val("مصر").change();
    }
    else{
        $("#countryname").val(localStorage.getItem("countryname")).change();  
    }
    if ($("#countryname").data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        $("#countryname").data('options', $('#governoratename option').clone());      
    }
if( ! localStorage.getItem("governoratename")){
    var idc1 = "مصر";
    var optionsc1 = $("#countryname").data('options').filter('[value="' + idc1 + '"]');
    $('#governoratename').html(optionsc1).change();
}
   else{
    var idc1 = localStorage.getItem("countryname");
    var optionsc1 = $("#countryname").data('options').filter('[value="' + idc1 + '"]');
    $('#governoratename').html(optionsc1);
  Array.from(optionsc1).forEach((ele,id)=>{

if(ele.innerHTML==localStorage.getItem("governoratename")){


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
  
    ($('.activeeduxform').find("#eduxcountryfield")).val("مصر").change();
    

    
    if (($('.activeeduxform').find("#eduxcountryfield")).data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        ($('.activeeduxform').find("#eduxcountryfield")).data('options', $('#eduxcityfield option').clone());
    }

    var idc1 = "مصر";
    var optionsc2 = ($('.activeeduxform').find("#eduxcountryfield")).data('options').filter('[value="' + idc1 + '"]');
    ($('.activeeduxform').find("#eduxcityfield")).html(optionsc2).change();




};

var setDefaultCountryExp = function () {

    ($('.activeform').find("#expcountryfield")).val("مصر").change();

    if (($('.activeform').find("#expcountryfield")).data('options') === undefined) {
    
        ($('.activeform').find("#expcountryfield")).data('options', $('#expcityfield option').clone());
    }

    var idc1 = "مصر";
    var optionsc2 = ($('.activeform').find("#expcountryfield")).data('options').filter('[value="' + idc1 + '"]');
    ($('.activeform').find("#expcityfield")).html(optionsc2).change();




};
// var  setDefaultCountrycoverletter = function () {
//   ;
//     if( ! localStorage.getItem("countrynamecoverletter")){
//     $("#countrynamecoverletter").val("مصر").change();
//     }
//     else{
//         $("#countrynamecoverletter").val(localStorage.getItem("countrynamecoverletter")).change();  
//     }
//     if ($("#countrynamecoverletter").data('options') === undefined) {

//         $("#countrynamecoverletter").data('options', $('#governoratenamecoverletter option').clone());      
//     }
// if( ! localStorage.getItem("governoratenamecoverletter")){
//     var idc6 = "مصر";
//     var optionsc6 = $("#countrynamecoverletter").data('options').filter('[value="' + idc6 + '"]');
//     $('#governoratenamecoverletter').html(optionsc6).change();
// }
//    else{
//     var idc1 = localStorage.getItem("countrynamecoverletter");
//     var optionsc6 = $("#countrynamecoverletter").data('options').filter('[value="' + idc6 + '"]');
//     $('#governoratenamecoverletter').html(optionsc6);
//   Array.from(optionsc6).forEach((ele,id)=>{



// if(ele.innerHTML==localStorage.getItem("governoratenamecoverletter")){
 

//     document.getElementsByClassName("governoratenamecoverletter")[0].options.selectedIndex=id.toString();


//   }});
//    } 
// };

// var  setDefaultCountrycoverletteren = function () {
//       ;
//     if( ! localStorage.getItem("countrynamecoverletteren")){
//     $("#countrynamecoverletteren").val("Egypt").change();
//     }
//     else{
//         $("#countrynamecoverletteren").val(localStorage.getItem("countrynamecoverletteren")).change();  
//     }
//     if ($("#countrynamecoverletteren").data('options') === undefined) {

//         $("#countrynamecoverletteren").data('options', $('#governoratenamecoverletteren option').clone());      
//     }
// if( ! localStorage.getItem("governoratenamecoverletteren")){
//     var idc6 = "Egypt";
//     var optionsc6 = $("#countrynamecoverletteren").data('options').filter('[value="' + idc6 + '"]');
//     $('#governoratenamecoverletteren').html(optionsc6).change();
// }
//    else{
//     var idc1 = localStorage.getItem("countrynamecoverletteren");
//     var optionsc6 = $("#countrynamecoverletteren").data('options').filter('[value="' + idc6 + '"]');
//     $('#governoratenamecoverletteren').html(optionsc6);
//   Array.from(optionsc6).forEach((ele,id)=>{


// if(ele.innerHTML==localStorage.getItem("governoratenamecoverletteren")){
 

//     document.getElementsByClassName("governoratenamecoverletteren")[0].options.selectedIndex=id.toString();

    


//   }});
//    } 
// }

// // Set Default Selected Country = Egypt
var setDefaultCountrycoverletter = function () {
    console.log("from cover letter")
    if( ! localStorage.getItem("countrynamecoverletter")){
    $("#countrynamecoverletter").val("مصر").change();
    }
    else{
        $("#countrynamecoverletter").val(localStorage.getItem("countrynamecoverletter")).change();  
    }
    if ($("#countrynamecoverletter").data('options') === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the countryname*/
        $("#countrynamecoverletter").data('options', $('#governoratenamecoverletter option').clone());      
    }
if( ! localStorage.getItem("governoratenamecoverletter")){
    var idc1 = "مصر";
    var optionsc1 = $("#countrynamecoverletter").data('options').filter('[value="' + idc1 + '"]');
    $('#governoratenamecoverletter').html(optionsc1).change();
}
   else{
    var idc1 = localStorage.getItem("countrynamecoverletter");
    var optionsc1 = $("#countrynamecoverletter").data('options').filter('[value="' + idc1 + '"]');
    $('#governoratenamecoverletter').html(optionsc1);
  Array.from(optionsc1).forEach((ele,id)=>{

if(ele.innerHTML==localStorage.getItem("governoratenamecoverletter")){


    document.getElementsByClassName("governoratenamecoverletter")[0].options.selectedIndex=id.toString();




  }});
   } 
};
