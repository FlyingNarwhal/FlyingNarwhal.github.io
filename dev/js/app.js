var ViewModel = function() {
	that = this;
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

	// this.titleSwitch = function(el){
	// 	switch(el){
	// 		case 'linkedin': 
	// 			title("Let's connect");
	// 			break;
	// 		case 'email': 
	// 			title('Email me');
	// 			break;
	// 		case 'git':
	// 			title("Fork me");
	// 			break;
	// 		case 'none':
	// 			title("");
	// 			break;
	// 	}
	// };

	// This is for the web worker mailWorker.js
	// TODO create form field checks

	// to be used with senderEmail in formValue
	// Check validity of users input as email address
	this.emailQuery = ko.observable('');
	this.validEmail = ko.computed(function(){
		var filter = ko.observable(that.emailQuery())
		if(filter()){
			// Check that the email provided is a of type "johndoe@example.com"
			var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			if(testEmail.test(filter())){
				$('.contact-submit-btn').removeClass('invalid-email');
				$('.contact-submit-btn').addClass('valid-email');
				return true;
			} else {
				$('.contact-submit-btn').addClass('invalid-email');
				return false;
			}
		}
	});
	this.senderName = ko.observable('');
	this.emailSubject = ko.observable('');
	this.emailBody = ko.observable('');
};

ko.applyBindings(new ViewModel());