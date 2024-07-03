//H1 Header Fix
//v1.5 - Avocado - Skipped over Drupal editing headers.

console.log("Fix version 1.5 to correct issues introduced by Tyler including hidden headings, improper nesting, multiple h1s, etc.")

  var headingLevelOneCount = document.getElementsByTagName("h1");

	var totalH1s = 0;

	if(typeof headingLevelOneCount !== 'undefined' && headingLevelOneCount.length > 0) {

		totalH1s = headingLevelOneCount.length;

		console.log("H1s found on page: "+headingLevelOneCount.length);

		hiddenH1s = document.querySelectorAll('.page-node-type-landing-page h1');

		if(typeof hiddenH1s !== 'undefined' && hiddenH1s !== null && hiddenH1s.length > 0 ) { 

				console.log("Removed first hidden h1: "+hiddenH1s[0].innerHTML);

				hiddenH1s[0].remove(); 

				// you could alter the display style (currently none) for hidden H1s instead of removing

		}

		var badH1s = document.querySelectorAll('.row__title h1');

		if(typeof badH1s !== 'undefined' && badH1s !== null && badH1s.length > 0) {

			console.log("Improper H1s found: "+badH1s.length);

			var badH1array = [...badH1s];

			badH1array.forEach(badH1 => {

				console.log("Row title H1 converted to H2: "+badH1.innerHTML);

				badH1.outerHTML = '<h2>' + badH1.innerHTML + '</h2>';

			});

		}

		// recount h1s

		var doRecountH1s = document.getElementsByTagName("h1");

		if(doRecountH1s !== 'undefined' && doRecountH1s !== null  ) {

			totalH1s = document.getElementsByTagName("h1").length;

		} else {

			totalH1s = 0;

		}

		

	} 

	 var badJumboHeading = document.querySelectorAll('.jumbo_slide__title h2');

		if(typeof badJumboHeading !== 'undefined' && badJumboHeading !== null && badJumboHeading.length > 0) {

			console.log("Jumbotron heading issues on page: "+badJumboHeading.length);

			badJumboHeading[0].outerHTML = '<h1 style="font-size:calc(1.85rem + 1vmin)">' + badJumboHeading[0].innerHTML + '</h1>';

			console.log("Jumbotron heading issue resolved (h2->h1) with inline font size applied."); // class would be better but application is spotty

			totalH1s = 1;

		} 

		

	//IF NO h1 headers exist we must create them
	if(totalH1s == 0) {

		console.log("No H1s found on page, attempting first h2 conversion.");

		var headingLevelTwoCount = document.getElementsByTagName("h2");

		if(typeof headingLevelTwoCount !== 'undefined' && headingLevelTwoCount !== null &&  headingLevelTwoCount.length > 0) {
  	 
			for (index = 0; index < headingLevelTwoCount.length; index++) {
    
    	var headerClass=headingLevelTwoCount[index].className;
    	
    	//console.log("Header number "+index+" has className "+headerClass);

			//first header that's not in the drupal editing menu gets promoted
			if (headerClass!="visually-hidden") {
				var firstLevelTwoheading = document.getElementsByTagName('h2')[index];
				//console.log("Converting header number"+ index);
				break;
			} //END STYLE TEST				
		   
			} //END LOOP
		
			console.log("First H2 converted to H1: "+firstLevelTwoheading.innerHTML);

			firstLevelTwoheading.outerHTML = '<h1>' + firstLevelTwoheading.innerHTML + '</h1>';

		}

	} 
