
//获取文档中指定元素的属性 有兼容性
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

//获取指定元素的子元素节点
function getChilds(obj){
	var childs=obj.childNodes;
	var arr=[];
	 // childs.forEach(function(value){
	 // 	if(value.nodeType==1){
	 // 		arr.push(value);
	 // 	}
	 // });
	 for(let i = 0;i<childs.length;i++){
	 	if(childs[i].nodeType==1){
	 		arr.push(childs[i]);
		}
	 }
	 return arr;
}
//获取第一个
function getFirst(obj){
	return getChilds(obj)[0];
}
//获取最后一个
function getLast(obj){
	let childs=getChilds(obj);
	return childs[childs.length-1];
}

