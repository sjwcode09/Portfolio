$(function(){
	let gnb=document.getElementById("gnb");
	let menuList=gnb.firstElementChild.children;
	let total=document.querySelector(".total");
	let totalList=document.querySelectorAll("#header .total .total_inner > ul > li");
	let tab=document.querySelector(".tab");

	menuList[3].classList.add("active");

	setTimeout(function(){
		$("section").addClass("active");
		$(".project:first").addClass("active");
	}, 1000);

	let projectN=1;

	$(".project .title_area").click(function(e){
		e.preventDefault();

		let project=$(this).parents(".project");

		if(projectN != project.index()){
			
			projectN=project.index();
			$(".project .fixed_area").removeClass("active");
			project.addClass("active");

			let projectY=$(this).offset().top-60;

			$("html").animate({scrollTop: projectY}, 800);
		}
	});

	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},	
		loop: true,
		breakpoints: {
			200: {
				slidesPerView: 1
			},
			875: {
				slidesPerView: 2
			},
			1300: {
				slidesPerView: 3	
			}
		}

	  });
});