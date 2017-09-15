
function scroll(num) {
    var tops = 0;
    var headerEl = document.querySelector('header');
    window.onscroll = function () {
        if(document.body.scrollTop){
            tops=document.body.scrollTop;
        }else{
            tops=document.documentElement.scrollTop;
        }
        if(tops>= num){
            headerEl.className="active";
        }else{
            headerEl.className="";
        }
    }
}
