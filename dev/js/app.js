var ViewModel = function() {
	title = ko.observable("");
	this.showMenu = function(){
		console.log('click');
		// $prof = $('.profile');
		$list = $('.header-navbar-list');
		$menuCover = $('.menuCover') || undefined;
		$aboutMe = $('.contact-about') || undefined;

		// $prof.css('display', $prof.css("display") === 'none' ? '' : 'none');
		$list.css('display', $list.css("display") === 'block' ? '' : 'block');
		$menuCover.css('display', $menuCover.css("display") === 'none' ? '' : 'none');
	};

	this.showCredit = function(){
		$credit = $('.credit');
		console.log("click");

		$credit.css('display', $credit.css("display") === 'block' ? '' : 'block');
	}

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
};

ko.applyBindings(new ViewModel());