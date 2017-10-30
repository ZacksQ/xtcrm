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
//var g = {};
var prefix_url = 'http://123.206.221.228:8081/newlivecrm/';
var pagedevied = 10;
// var prefix_url = 'http://www.xiangtazhibo.com/';

$.ajax({
	url: 'icon.html',
	type: 'get',
	dataType: 'html',
	success: function(d){
		$("body").prepend(d);
	}
});

$.ajax({
	url: 'nav.json',
	type: 'get',
	dataType: 'json',
	success: function(d){
		if(d){
			var navbody = ''
			d.forEach(function(item){
				navbody += '<li><a href=' + (item["href"]?item["href"]:'javascript:;') +'><svg class="icon ' + item["icon"] + '"><use xlink:href="#' + item["icon"] + '"></use></svg>' + item["name"] + '</a>';
				if(item["children"]){
					var children = item["children"];
					navbody += '<ul>';
					children.forEach(function(child){
						navbody += '<li><a href="' + child["href"] + '">' + child["name"] + '</a></li>'
					});
					navbody += '</ul>';					
				}
				navbody += '</li>'
 			});
 			$(".framework-sidebar ul").html(navbody);
 			bindnav();
 			var currmenu = location.pathname.match(/\w+(?=.html)/)[0];
 			var pa = $(".framework-sidebar a[href^="+(currmenu)+"]").addClass("on").parent().parent();
 			pa.css("height", pa.children().length * 40 + 'px');
		}
	}
});

function bindnav(){
	$(".framework-sidebar a").bind("click", function(e){
		// e.preventDefault();
		var nextNode = $(this).next();
		if(parseInt(nextNode.css("height"))){
			nextNode.css("height", 0);
		}else{
			nextNode.css("height", nextNode.children().length * 40 + 'px');
		}
	});
}

$(".quiet").bind("click",function(e){
	e.preventDefault();
	$.ajax({
		url: prefix_url + 'mManager/loginOut.do',
		type: 'get',
		dataType: 'json',
		success: function(d){
			if(d.success === true){
				window.location.href = "login.html";
			}else{
				layui.use(['layer'], function(args){
					var layer = layui.layer;
					layer.msg(d.msg);
				});
			}
		}
	});
});

var getRequest = function getRequest() {
		var url = location.search;
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			// var str = url.substr(1);
			var strs = url.substr(1).split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
			}
		}
		return theRequest;
	};