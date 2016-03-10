var data = "%data%";

var bio = {
	"name": "Joe Dahle",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "(623) 349-1206",
		"email": "joe.dahle at gmail.com",
		"github": "FlyingNarwhal",
		"twitter": "@FlyingNarwhal",
		"location": "Phoenix, Arizona"
	},
	"welcomeMessage": "",
	"skills": ["HTML/ CSS", "JavaScript", "Sass", "Git", "Linux"],
	"bioPic": "../images/profile.jpg",
	"display": function() {
		// variables for header
		var $header = $("#header");
		var $topContacts = $("#topContacts");
		var $footerContacts = $("#footerContacts");

		var formattedName    	  = HTMLheaderName.replace(data, bio.name);
		var formattedRole    	  = HTMLheaderRole.replace(data, bio.role);
		var formattedPic     	  = HTMLbioPic.replace(data, bio.bioPic);
		var formattedMobile  	  = HTMLmobile.replace(data, bio.contacts.mobile);
		var formattedEmail   	  = HTMLemail.replace(data, bio.contacts.email);
		var formattedGit     	  = HTMLgithub.replace(data, bio.contacts.github);
		var formattedTwitter 	  = HTMLtwitter.replace(data, bio.contacts.twitter);
		var formattedLocation	  = HTMLlocation.replace(data, bio.contacts.location);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
		var formattedSkills     = HTMLskills.replace(data, bio.skills);

		// append header variables to page
		$header.prepend(formattedName, formattedRole);
		$topContacts.append(formattedMobile, formattedEmail, formattedGit, formattedTwitter, formattedLocation);
		$header.append(formattedWelcomeMsg, formattedPic, HTMLskillsStart);
		$footerContacts.append(formattedMobile, formattedEmail, formattedGit, formattedTwitter, formattedLocation);

		for(var skill in bio.skills){
			formattedSkills = HTMLskills.replace(data, bio.skills[skill]);
			$header.append(formattedSkills);
		}
	}
};

var education = {
	"schools": [{
		"school": {
			"name": "Poston Butte",
			"location": "San Tan Valley, Arizona",
			"degree": "High School Diploma",
			"majors": "",
			"dates": "2008-2012",
			"url": ""
		}
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "https://udacity.com"
	}],
	"display": function() {
		var $edu = $("#education");
		$edu.append(HTMLschoolStart);
		for(var i = 0; i < education.schools.length; i++){
			var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].school.degree);
			var formattedschoolDate = HTMLschoolDates.replace(data, education.schools[i].school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].school.location);
			// var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].school.majors);

			//apply formatted text
			$(".education-entry").append(formattedSchoolName,
																	formattedSchoolDegree,
																	formattedschoolDate,
																	formattedSchoolLocation); //TO add majot, append formattedSchoolMajor, and uncomment above line
		}

		$edu.append(HTMLonlineClasses);		
		$edu.append(HTMLonlineStart);

		for(var course in education.onlineCourses){
			//variables for online courses

			var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[course].date);
			var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);

			//append online course HTML
			$(".online-entry").append(formattedOnlineTitle, 
															formattedOnlineSchool,
															formattedOnlineDates,
															formattedOnlineURL);
		}
	}
};

var work = {
	"jobs": [{
		"employer": "Florence Unified School District",
		"title": " Bus Driver",
		"location": "San Tan Valley, Arizona",
		"dates": "May 2015 - Currently 	",
		"description": "I drive kids all over town, to home, to school-- you know everywhere those kids need to go."
	},
	{
		"employer": "The Church of Jesus Christ of Latter-Day Saints",
		"title": " Full-Time Missionary",
		"location": "Louisville, Kentucky",
		"dates": "April 2013 - April 2015 ",
		"description": "Finding people to teach our message- Building a network of people, and appealing to their specific needs. Teaching- Creating lessons specific to the individual that would enable them to overcome their weaknesses, and improve the overall quality of their life. \nServing- Whether serving food at a soup kitchen, or cleaning someones gutters, I helped improve the community anyway I could. \nDistrict Leader- I was put in charge of 15 other missionaries to help with their duties to the community. I did this by keeping regular/daily communication with each of them, and holding weekly meetings to provide motivation and understanding to our purpose. \nAccomplishments Most notably: I helped one man quit smoking 5-6 packs of cigarettes a day, to zero. I helped another get the courage to go to rehab and finally give up alcohol. I helped another realize how important their life was, and not end it. Skills Used Charity, humility, diligence, perseverance, preparation, honesty. Ability to adapt to quickly changing circumstances. Budgeting- I had to live on a fixed $130 a month for 2 years."
	},
	{
		"employer": "Kroger",
		"title": " Day Stock",
		"location": "San Tan Valley, Arizona",
		"dates": "May 2011 - March 2013 ",
		"description": "Responsibilities I kept shelves stocked, and received shipments. On top on this, I helped the front end during peak business times. Accomplishments I was often referred to as the best day stocker at the store, and most reliable. Skills Used Self-discipline, I rarely had a supervisor on duty, so I had to manage my time and efforts to the best of my ability. Planning- I never knew when I would be asked to help up front, or when a shipment would arrive, so I had to make sure the shelves were in order at any given moment. Mild-temper- During extremely difficult and stressful times, I kept my composure, and focused on the task at hand."
	}],
	"display": function() {
		$("#workExperience").append(HTMLworkStart);
		for(var job in work.jobs){
			//variables for work
			var formattedEmployer        = HTMLworkEmployer.replace(data, work.jobs[job].employer);
			var formattedTitle           = HTMLworkTitle.replace(data, work.jobs[job].title);
			var formattedWorkLocation    = HTMLworkLocation.replace(data, work.jobs[job].location);
			var formattedWorkDate        = HTMLworkDates.replace(data, work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

			// append work values
			$(".work-entry").append(formattedEmployer);
			$(".work-entry").append(formattedTitle);
			$(".work-entry").append(formattedWorkLocation);
			$(".work-entry").append(formattedWorkDate);
			$(".work-entry").append(formattedWorkDescription);
		}
	}
};

var projects = {
	"projects": [{
		"title": "Frogger Clone",
		"link": "https://FlyingNarwhal.github.io/arcadeClone",
		"dates": "November 2015",
		"description": "A recreation of frogger. Project 3, in the Udacity Nanodegree program.",
		"images": ["../images/arcadeClone.jpg"]
	},
	{
		"title": "Neighborhood Map Project",
		"link": "https://FlyingNarwhal.github.io/neighborhood-map-project",
		"dates": "December 2015",
		"description": "Want to find some decent restaurants around the east valley? Here's the place to look.",
		"images": ["../images/neighborhoodMapProject.png"]
	},
	{
		"title": "Feed Reader Testing with Jasmine",
		"link":  "https://flyingnarwhal.github.io/feed-reader-testing",
		"dates": "January 2016",
		"description": "Create unit tests with Jamsmine for a simple feed reader built by the Udacity Team.",
		"images": ["../images/jasmine.png"]
	},
	{
		"title": "Website optimization",
		"link": "https://flyingnarwhal.github.io/FENDoptimization",
		"dates": "November 2015",
		"description": "Optimize a webpage to reach above 90 in a Google PageSpeed, optimize framerates to hit those 60FPS and remove the pesky jank",
		"images": ["../images/optimization.png"]
	}],
	"display": function() {
		$("#projects").append(HTMLprojectStart);
		for(var project in projects.projects){
			var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
			var formattedProjectLink = HTMLprojectLink.replace(data, projects.projects[project].link);
			var formattedProjectDate = HTMLprojectDates.replace(data, projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
			var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[project].images);
			
			$(".project-entry").append(formattedProjectLink + formattedProjectTitle);
			$(".project-entry").append(formattedProjectDate);
			$(".project-entry").append(formattedProjectDescription);
			$(".project-entry").append(formattedProjectImage);
		}

	}
};

work.display();
bio.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);