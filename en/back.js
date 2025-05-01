
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