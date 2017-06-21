// function $(selector){
// 	return document.querySelector(selector);
// }

// //去#text
// function del_ff(elem){
// 	var elem_child = elem.childNodes;
// 	for(var i=0; i<elem_child.length;i++){
// 		if(elem_child[i].nodeName == "#text" && /\s/g.test(elem_child.nodeValue)){
// 			elem.removeChild(elem_child[i]);
// 		}
// 	}
// }

// var frameworkSidebarUl = $(".framework-sidebar ul");
// var frameworkSidebarUlChild = frameworkSidebarUl.childNodes;
// del_ff(frameworkSidebarUl);
// var frameworkSidebarUlChildLength = frameworkSidebarUlChild.length;

// for(var i = 0; i < frameworkSidebarUlChildLength; i++){
// 	debugger;
// 	del_ff(frameworkSidebarUl);
// 	console.log(frameworkSidebarUlChild[i])
// 	del_ff(frameworkSidebarUlChild[i].firstChild.parentNode);
// 	del_ff(frameworkSidebarUlChild[i].firstChild.parentNode.lastChild);

// 	frameworkSidebarUlChild[i].firstChild.addEventListener("click", function(){
// 		var pli = this.parentNode;
// 		var cul = pli.lastChild;	
// 		var clicount = cul.childNodes.length;
// 		if(!parseInt(pli.lastChild.style.height)){
// 			console.log(clicount)
// 			pli.lastChild.style.height = clicount * 40 + 'px';
// 		}else{
// 			pli.lastChild.style.height = 0;
// 		}		
// 	});
// }

$(".framework-sidebar a").bind("click", function(){
	var nextNode = $(this).next();
	if(parseInt(nextNode.css("height"))){
		nextNode.css("height", 0);
	}else{
		nextNode.css("height", nextNode.children().length * 40 + 'px');
	}
});