$(function () {
    var Top = $('.news-wrapper')[0].offsetTop;
    scroll(Top - 150);

    ///////////////////////////////////////////////////
    //第二条新闻轮播
    var obj = $('.left-img')[0];
    var imgBox=$('ul',obj)[0];
    var imgBoxLi=$('li',imgBox);
    var index=0;
    var pause=setInterval(time,2000);
    var lis = $('.boxs');
    var btnl = $('.left-button')[0];
    var btnr = $('.right-button')[0];
    //鼠标移入停止自动轮播
    obj.onmouseover=function(){
        clearInterval(pause);
    };
    obj.onmouseout=function(){
        pause=setInterval(time,2000);
    };
    btnl.onclick=function(){
        moveDown();
    };
    btnr.onclick=function(){
        time();
    };
    // 图片自动轮播
    function time(){
        index++;
        if(index == imgBoxLi.length){
            index=0;
        }
        for(let i=0;i<imgBoxLi.length;i++){
            imgBoxLi[i].style.display='none';
            lis[i].style.display='none';
        }
        imgBoxLi[index].style.display='block';
        lis[index].style.display='block';
    }
    function moveDown(){
        index--;
        if(index<0){
            index=imgBoxLi.length-1;
        }
        for(let i=0;i<imgBoxLi.length;i++){
            imgBoxLi[i].style.display='none';
            lis[i].style.display='none';
        }
        imgBoxLi[index].style.display='block';
        lis[index].style.display='block';
    }




    /////////第三条新闻轮播/////////////////////////////////////////
    var obj1 = $('.left-img')[1];
    console.log(obj1);
    var imgBox1=$('ul',obj1)[0];
    var imgBoxLi1=$('li',imgBox1);
    var index1=0;
    var pause1=setInterval(time1,2000);
    var btnl1 = $('.left-button')[1];
    var btnr1 = $('.right-button')[1];
    //鼠标移入停止自动轮播
    obj1.onmouseover=function(){
        clearInterval(pause1);
    };
    obj1.onmouseout=function(){
        pause1=setInterval(time1,2000);
    };
    btnl1.onclick=function(){
        moveDown1();
    };
    btnr1.onclick=function(){
        time1();
    };
    // 图片自动轮播
    function time1(){
        index1++;
        if(index1==imgBoxLi1.length){
            index1=0;
        }
        for(let i=0;i<imgBoxLi1.length;i++){
            imgBoxLi1[i].style.display='none';

        }
        imgBoxLi1[index1].style.display='block';
    }
    function moveDown1(){
        index1--;
        if(index1<0){
            index1=imgBoxLi1.length-1;
        }
        for(let i=0;i<imgBoxLi1.length;i++){
            imgBoxLi1[i].style.display='none';

        }
        imgBoxLi1[index1].style.display='block';
    }
});