$(function () {
    //banner轮播图 display
    var obj = $('.banner')[0];
    var imgBox=$('.imgbox',obj)[0];//包图片的盒子
    var imgBoxLi=$('li',imgBox);//图片
    var hotbox=$('.button')[0];//包轮播点的盒子
    var hotboxLi=$('li',hotbox);//轮播点
    var index=0;
    var pause=setInterval(time,2000);
    //鼠标移入停止自动轮播
    obj.onmouseover=function(){
        clearInterval(pause);
    };
    obj.onmouseout=function(){
        pause=setInterval(time,2000);
    };
    // 图片自动轮播
    function time(){
        index++;
        if(index==imgBoxLi.length){
            index=0;
        }
        for(let i=0;i<imgBoxLi.length;i++){
            imgBoxLi[i].style.display='none';
            hotboxLi[i].className='';
        }
        imgBoxLi[index].style.display='block';
        hotboxLi[index].className='active';
    }
    //轮播点
    for(let i=0;i<hotboxLi.length;i++){
        hotboxLi[i].onclick=function(){
            for(let j=0;j<hotboxLi.length;j++){
                imgBoxLi[j].style.display='none';//考虑兼容
                hotboxLi[j].className='';
            }
            imgBoxLi[i].style.display='block';
            hotboxLi[i].className='active';
            index=i;
        };
    }
/////////////////////////////////////////////////////////////////////////////////
    //经典产品
    var box=$('.product-wrapper .wrapper')[0];
    var imgbox=$('.img-box',box)[0];
    var lis=$('li',imgbox);
    var widths=parseInt(getStyle(lis[0],'width'))+parseInt(getStyle(lis[0],'margin-right'));
    var btnl=$('.product-wrapper .wrapper .left')[0];
    var btnr=$('.product-wrapper .wrapper .right')[0];
    var t=setInterval(fun,2000);
    var flag=true;
    box.onmouseenter=function(){
        clearInterval(t);
    };
    box.onmouseleave=function(){
        t=setInterval(fun,2000);
    };
    btnl.onclick=function(){
        if(!flag){
            return;
        }
        fun();
        flag=false;
    };
    btnr.onclick=function(){
        if(!flag){
            return;
        }
        fun1();
        flag=false;
    };
    // 从右往左
    function fun(){
        animate(imgbox,{left:-1*widths},function(){
            for(let i=0;i<1;i++){
                let first=getFirst(imgbox);
                imgbox.appendChild(first);
                imgbox.style.left=0;
            }
            flag=true;
        });
    }

    //从左往右
    // setInterval(fun1,2000);
    function fun1(){
        for(let i=0;i<1;i++){
            let last=getLast(imgbox);
            let first=getFirst(imgbox);
            imgbox.insertBefore(last,first);
            imgbox.style.left=-1*widths+'px';
            animate(imgbox,{left:0},function(){
                flag=true;
            });
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    //顶部导航
    var tops = 0;
    var headerEl = $('header')[0];
    var searchTop = $('.search-wrapper')[0].offsetTop;
    var contactTop = $('.contact')[0].offsetTop;
    var serviceTop = $('.service-wrapper')[0].offsetTop;
    var productTop = $('.product-wrapper')[0].offsetTop;
    var aboutTop = $('.about-wrapper')[0].offsetTop;
    var staffTop = $('.staff-wrapper')[0].offsetTop;
    var newsTop = $('.news-wrapper')[0].offsetTop;

    window.onscroll = function () {
        if(document.body.scrollTop){
            tops=document.body.scrollTop;
        }else{
            tops=document.documentElement.scrollTop;
        }
        if(tops>= searchTop - 220){
            headerEl.className="active";
        }else{
            headerEl.className="";
        }
    }
});