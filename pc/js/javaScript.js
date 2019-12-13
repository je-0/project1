window.addEventListener("load",function(){
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

	timer=setInterval(function(){
		if (n2 < 4) {
			n2++
		}
		pos2=n2*-100;
		keyMoving.style.left=pos2+"%"
	},4000)

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
							0;
						}
						myfn1()
					});

				}
				else {
					keyBtn.children[j].addEventListener("click", function(e){
						e.preventDefault()
						if(n < 4){
							n= n+1
						}
						else {
							0;
						}
						myfn1();
					});
				}
			}
		}
	}
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
			// console.log(depth1li.children[1].children.length);
			if(j == (depth1li.children[1].children.length-1)){ // nav > ul > li > ul > li:last-child
				// console.log(depth1li.children[1].children[j]);
				depth1li.children[1].children[j].addEventListener("focusout", function(e){
					// console.log(e.currentTarget.parentElement.previousElementSibling);
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
	//popup
		// var popup=document.getElementsByClassName("popup")[0]
		// popupA=popup.children[1].children[1].children[0];
		// popupA.addEventListener("click",function(e){
		// 	e.preventDefault()
		// 	popup.classList.add("close")
		// })

})
