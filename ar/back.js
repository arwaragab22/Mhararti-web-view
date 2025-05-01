
// window.onload = function () {
//       ;
//     let arrOfUrl = [];
//     if (arrOfUrl.length == 0) {
//         let url = window.location.href;

//         allurl.push(url);

//         localStorage.setItem("backs", JSON.stringify(allurl));
//     } else {
//         let array = [];
//         localStorage.setItem("backs", JSON.stringify(array));
//     }

// }
// function prevlink() {
//       ;
//     let ararysurls = JSON.parse(localStorage.getItem("backs"));


//       ;
//     if (localStorage.getItem("language") == "en") {

//         let urlone = ararysurls[ararysurls.length - 1];
//         let urltwo = ararysurls[ararysurls.length - 2];


//         if (urlone.includes("/en/")) {

//             if (urlone.replace("/en/", "/ar/") == urltwo) {
//                 ararysurls.splice(ararysurls.length - 2, 2);

//                 let prevurl = ararysurls.pop();

//                 let ar = prevurl.replace("/ar/", "/en/");
//                 localStorage.setItem("backs", json.stringify(ararysurls));
//                 window.location.href = ar
//             }


//             else {
//                 window.location.href = prevurl;
//             }

//         }


//     }
//     if (localStorage.getItem("language") == "ar") {

//         let urlone = ararysurls[ararysurls.length - 1];
//         let urltwo = ararysurls[ararysurls.length - 2];


//         if (urlone.includes("/ar/")) {

//             if (urlone.replace("/ar/", "/en/") == urltwo) {
//                 ararysurls.splice(ararysurls.length - 2, 2);

//                 let prevurl = ararysurls.pop();

//                 let ar = prevurl.replace("/en/", "/ar/");
//                 localStorage.setItem("backs", json.stringify(ararysurls));
//                 window.location.href = ar
//             }


//             else {
//                 window.location.href = prevurl;
//             }

//         }


//     }

// }




// //window.onload = function () {
// //      ;
// //    if (localStorage.getItem("backs")) {
// //        let url = window.location.href;
// //        let allurl = JSON.parse(localStorage.getItem("backs"));

// //        allurl.push(url);
// //        localStorage.setItem("backs", JSON.stringify(allurl));
// //    } else {
// //        let array = [];
// //        localStorage.setItem("backs", JSON.stringify(array));
// //    }

// //}
// //function prevlink() {
// //      ;
// //    let ararysurls = JSON.parse(localStorage.getItem("backs"));


// //      ;
// //    if (localStorage.getItem("language") == "en") {

// //        let urlone = ararysurls[ararysurls.length - 1];
// //        let urltwo = ararysurls[ararysurls.length - 2];


// //        if (urlone.includes("/en/")) {

// //            if (urlone.replace("/en/", "/ar/") == urltwo) {
// //                ararysurls.splice(ararysurls.length - 2, 2);

// //                let prevurl = ararysurls.pop();

// //                let ar = prevurl.replace("/ar/", "/en/");
// //                localStorage.setItem("backs", json.stringify(ararysurls));
// //               window. location.href = ar
// //            }


// //            else {
// //                window.location.href = prevurl;
// //            }

// //        }


// //    }
// //    if (localStorage.getItem("language") == "ar") {

// //        let urlone = ararysurls[ararysurls.length - 1];
// //        let urltwo = ararysurls[ararysurls.length - 2];


// //        if (urlone.includes("/ar/")) {

// //            if (urlone.replace("/ar/", "/en/") == urltwo) {
// //                ararysurls.splice(ararysurls.length - 2, 2);

// //                let prevurl = ararysurls.pop();

// //                let ar = prevurl.replace("/en/", "/ar/");
// //                localStorage.setItem("backs", json.stringify(ararysurls));
// //                window.location.href = ar
// //            }


// //            else {
// //                window.location.href = prevurl;
// //            }

// //        }


// //    }

// //}
function prevlink() {

if( history.length<2) {
    window.location.href= 'home.html';
} else if( history.length>2){
   window.history.go(-1);
   console.log("prev from back")
} else if( history.length==2){
      window.location.href= 'home.html';
  }
}