window.addEventListener("load",function(){
	var url="/project1/pc/imgpath.json"
	var request= new XMLHttpRequest()
	request.open("GET",url);
	request.responseType="json"
	request.send();
	request.addEventListener("load",function(){
		var imgpath=request.response;
		var keyMoving=document.getElementsByClassName("key_moving")[0]
		var appendHTML="";

		appendHTML+='<ul>\n'
		for(key1 in imgpath){
			appendHTML+='<li>\n'
			// console.log(key1+" : "+imgpath[key1]);// key1 : Object
			for(key2 in imgpath[key1]){
				appendHTML+='<a href="" class="'+key2+'"><img src="images/'+imgpath[key1][key2]+'" alt="key1"></a>\n'
				// console.log(key2+" : "+imgpath[key1][key2]);
			}
			appendHTML+='</li>\n'
		}
		appendHTML+='</ul>'
		// console.log(appendHTML);
		keyMoving.innerHTML=appendHTML
		var keyvisual=document.getElementsByClassName("keyvisual")[0]
		var n = 0;
		var t;
		function myfn1(){
			t=n*-100;
			keyMoving.style.left=t+"%"
		}
		var n2=0
		var pos2=0;
		var timer;


		for (var i = 0; i < keyvisual.children.length; i++) {
			if (keyvisual.children[i].className == "key_moving") {
				var keyMoving=keyvisual.children[i]
			}
			else {
				var keyBtn=keyvisual.children[i]
				for (var j = 0; j < keyBtn.children.length; j++) {
					if (keyBtn.children[j].className == "left") {
						keyBtn.children[j].addEventListener("click", function(e){
							e.preventDefault();
							if(n > 0){
								n= n-1
							}
							else {
								n=0;
							}
							myfn1()
						});

					}
					else {
						keyBtn.children[j].addEventListener("click", function(e){
							e.preventDefault()
							if(n < 3){
								n= n+1
							}
							else {
								n=0;
							}
							myfn1();
						});
					}
				}
			}
		}
	})//request close

	var url2="/project1/pc/menupath.json"
	var request2= new XMLHttpRequest()
	request2.open("GET",url2);
	request2.responseType="json"
	request2.send();
	request2.addEventListener("load",function(){
		var menupath=request2.response;
		var nav=document.getElementById("nav")
		var appendHTML="";
		appendHTML+='<ul>\n'
		for(key1 in menupath){
			appendHTML+='<li>\n'
			appendHTML+='<a href="">'+key1+'</a>\n'
			appendHTML+='<ul class="sub">\n'
			for(key2 in menupath[key1]){
				appendHTML+='<li><a href="">'+menupath[key1][key2]+'</a></li>\n'
			}
			appendHTML+='</ul>\n'
			appendHTML+='</li>\n'
		}
		appendHTML+='</ul>'
		nav.innerHTML=appendHTML
		var nav =document.getElementById("nav");
		var navul =nav.children[0];
		var depth1 =navul.children; // nav > ul > li

		for (var i = 0; i < depth1.length; i++) {
			var depth1li =depth1[i];
			depth1li.index =i;

			depth1li.addEventListener("mouseenter", function(e){
				var liA =e.currentTarget.children[0];
				liA.classList.add("over");
				navul.classList.add("over");
			});
			depth1li.addEventListener("mouseleave", function(e){
				var liA =e.currentTarget.children[0];
				liA.classList.remove("over");
				navul.classList.remove("over");
			});

			depth1li.children[0].addEventListener("focusin", function(e){ // nav > ul > li > a
				e.currentTarget.classList.add("over");
			});

			for(var j=0; j<depth1li.children[1].children.length; j++){
				if(j == (depth1li.children[1].children.length-1)){ // nav > ul > li > ul > li:last-child
					depth1li.children[1].children[j].addEventListener("focusout", function(e){
						e.currentTarget.parentElement.previousElementSibling.classList.remove("over");
					});
				}
			}
			if(i == 0){
				depth1li.children[0].addEventListener("focusin", function(){ // nav > ul > li:first-child > a
					navul.classList.add("over");
				});
			}
			if(i == (depth1.length-1)){
				depth1li.children[0].addEventListener("focusin", function(){ // nav > ul > li:last-child > a
					console.log("last li last li!!");
					var depth2ul =depth1li.children[1] // nav ul li:last-child ul
					for (var k= 0; k< depth2ul.children.length; k++) {
						depth2ul.children[1].addEventListener("focusout",function(){
							navul.classList.remove("over");
						})
					}
				});
			}
		}
	})//request2 close

}) //load close
