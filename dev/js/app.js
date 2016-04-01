var ViewModel = function() {
	title = ko.observable("");
	this.showMenu = function(){
		$prof = $('.profile');
		$list = $('.header-navbar-list');
		$button = $('.section-button-link');
		$menuCover = $('.menuCover') || undefined;
		$aboutMe = $('.contact-about') || undefined;

		$prof.css('display', $prof.css("display") === 'none' ? '' : 'none');
		$list.css('display', $list.css("display") === 'block' ? '' : 'block');
		$button.css('display', $button.css("display") === 'none' ? '' : 'none');
		$menuCover.css('display', $menuCover.css("display") === 'none' ? '' : 'none');
		// var rect = $('.contact-about').scrollTop();
		// console.log(window.pageYOffset);
		if($(".about-picture").css('display') === 'none'){
			$(".header").ScrollTo();
		};
	};

	//anything over 23px yAxis height should transition the picture to the smaller state

	this.titleSwitch = function(el){
		switch(el){
			case 'linkedin': 
				title("Let's connect");
				break;
			case 'email': 
				title('Email me');
				break;
			case 'git':
				title("Fork me");
				break;
			case 'none':
				title("");
				break;
		}
	};

	this.comingSoon = function(){
		$('.coming-soon').html('coming soon');
	};

	$("#blog").hover(function(){
		$(".coming-soon").css("opacity", "1");
	});
	$("#blog").mouseout(function(){
		$(".coming-soon").css("opacity", "0");
	});
	$("#blog").click(function(){
		$(".coming-soon").css("opacity", "1");
	});
};

$(window).load(function(){
	if($(".about-picture")){
		var $img = $(".about-picture");
		var scrollHeight = window.pageYOffset;
		console.log(scrollHeight);
	}
});

$(function(){
	$(window).scroll(function(){
		var aTop = window.pageYOffset;
		console.log(aTop);
		if(aTop >= 23){
			$(".contact-section").addClass("small");
		}
	})
})

ko.applyBindings(new ViewModel());