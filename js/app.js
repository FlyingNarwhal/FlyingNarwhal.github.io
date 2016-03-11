var ViewModel = function() {
	this.showMenu = function(){
		$prof = $('.profile');
		$list = $('.header-navbar-list');
		$button = $('.section-button-link');
		$menuCover = $('.menuCover') || undefined;

		$prof.css('display', $prof.css("display") === 'none' ? '' : 'none');
		$list.css('display', $list.css("display") === 'inline-block' ? '' : 'inline-block');
		$button.css('display', $button.css("display") === 'none' ? '' : 'none');
		$menuCover.css('display', $menuCover.css("display") === 'none' ? '' : 'none');
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

ko.applyBindings(new ViewModel());