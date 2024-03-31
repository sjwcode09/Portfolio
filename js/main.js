window.addEventListener("load", function(){

	let video=document.getElementById("main_video");
	main_video.muted=true;
	// video.setAttribute("src","videos/abstract_-_47713 (540p).mp4");
	// video.setAttribute("src","videos/moon_-_116594 (540p).mp4");
	// video.setAttribute("src","videos/connection_-_113380 (1080p).mp4");
	video.setAttribute("src","videos/black_-_13495 (540p).mp4");
	// video.setAttribute("src","videos/network_-_12716 (1080p).mp4");
	video.addEventListener("loadeddata", function() {
		console.log("loaded event");
		video.play();
	});

	video.addEventListener("ended", function(){
		console.log("ended event");
		video.currentTime=0;
		video.play();
	}); 

	const linkArray=["#start", "#page1", "#page2", "#page3", "#contact"];
	let pageList=document.querySelectorAll("section");		
	let gnb=document.getElementById("gnb");
	let menuList=gnb.firstElementChild.children;
	let controller=document.getElementById("controller")	;
	let controllerList=controller.querySelectorAll("#controller > li");
	let body=document.querySelector("body");

	body.classList.add("on");

	let total=document.querySelector(".total");
	let totalList=document.querySelectorAll("#header .total .total_inner > ul > li");
	let tab=document.querySelector(".tab");

	let n=0;
	let t;
	let winh;

	function resizeHandler(){
		winh=window.innerHeight;
	}

	resizeHandler();

	window.addEventListener("resize", resizeHandler);

	function scrollInteraction(){
		t=window.scrollY+20;
		console.log(t);

		if(t < pageList[1].offsetTop){
			n=0;
		}
		else if(t < pageList[2].offsetTop){
			n=1;
		}
		else if(t < pageList[3].offsetTop){
			n=2;
		}
		else if(t < pageList[4].offsetTop){
			n=3;
			if(window.innerHeight+t == document.body.scrollHeight){
				n=4;
			}
		}
		else{
			n=4;
		}

		if(t > pageList[1].offsetTop+(winh/-4) && t < pageList[4].offsetTop-(winh/2)){
			body.classList.remove("on");
		}
		else{
			body.classList.add("on");
		}

		for(let i=0; i<menuList.length; i++){
			if(i == n){
				if(menuList[i].classList.contains("active") == false){
					menuList[i].classList.add("active");
				}
			}
			else{
				if(menuList[i].classList.contains("active") == true){
					menuList[i].classList.remove("active");
				}
			}
		}
		for(let i=0; i<totalList.length; i++){
			if(i == n){
				if(totalList[i].classList.contains("active") == false){
					totalList[i].classList.add("active");
				}
			}
			else{
				if(totalList[i].classList.contains("active") == true){
					totalList[i].classList.remove("active");
				}
			}
		}
		for(let i=0; i<controllerList.length; i++){
			if(i == n){
				if(controllerList[i].classList.contains("on") == false){
					controllerList[i].classList.add("on");
				}
			}
			else{
				if(controllerList[i].classList.contains("on") == true){
					controllerList[i].classList.remove("on");
				}
			}
		}
	}
	scrollInteraction();

	window.addEventListener("scroll", scrollInteraction);

	for(let i=0; i<controllerList.length; i++){
		controllerList[i].addEventListener("click", function(e){
			e.preventDefault();
			targety=pageList[i].offsetTop+1;
			gsap.to(window, {scrollTo: targety, oppacity: 1,duration: 0.5});
		});
	}

	const trigger=new ScrollTrigger.default({
		trigger: {
			once: true,
			toggle: {
				class: {
					in: "active",
					out: "inactive"
				}
			},
			offset: {
				viewport: {
					x: 0,
					y: 0.25
				}
			}
		}
	});


		for(let i=0; i<menuList.length; i++){
			menuList[i].addEventListener("click", function(e){
				e.preventDefault();
				targety=pageList[i].offsetTop+1;
				gsap.to(window, {scrollTo: targety, oppacity: 1,duration: 0.5});
			});
		}



		tab.addEventListener("click", function(e){
			e.preventDefault();

			if(tab.classList.contains("active") == false){
				document.querySelector("body").classList.add("fixed");
				tab.classList.add("active");
				total.classList.add("active");
			}
			else{
				document.querySelector("body").classList.remove("fixed");
				tab.classList.remove("active");
				total.classList.remove("active");
			}
		})

		for(let i=0; i<totalList.length; i++){
			totalList[i].addEventListener("click", function(e){
				e.preventDefault();
				targety=pageList[i].offsetTop+1;
				gsap.to(window, {scrollTo: targety, oppacity: 1,duration: 0.5});
				tab.classList.remove("active")
				document.querySelector("body").classList.remove("fixed")
				total.classList.remove("active")
				for(let j=0; j<totalList.length; j++) {
					if(i === j){
						totalList[j].classList.add("active")
					}
					else {
						totalList[j].classList.remove("active")
					}
				}
			});
		}

		let mainText=document.querySelector(".main_title");
		let subText=document.querySelector(".main_title p");
		let subjectText=document.querySelector("#start .sub_text ul" );
		const mainTyping=new TypeIt(".main_title h2", {
			speed: 30,
			startDelay: 900,
			afterComplete: function(instance){
				instance.destroy();
				// console.log("after complete");

				subText.classList.add("active");
				mainText.classList.add("active");
				gsap.fromTo(subjectText, {display: "flex", opacity: 0}, {opacity: 1, duration: 0.7});
			}
		})
		// .type("trendy", {delay: 100})
		// .delete(6, {delay: 100})

		.type("ront-End", {delay: 30})
		.move(-8, {delay: 10})
		.type(" F", {delay: 50})
		.move(8, {delay: 30})
		.break() // 줄 바꿈 효과
		.type(" Developer ", {
			speed: 100,
		})
		.go();

		const circle=$('.circle');

		function moveCircle(e) {
			TweenLite.to(circle, 0.3, {
			css: {
				left: e.pageX,
				top: e.pageY
			}
			});
		}
		
		$(window).on('mousemove', moveCircle);

		AOS.init({
			easing: "ease-in-out-sine",
			// once: true
		});

		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 4,
			centeredSlides: true,
			spaceBetween: 30,
			grabCursor: true,
			pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		});
});