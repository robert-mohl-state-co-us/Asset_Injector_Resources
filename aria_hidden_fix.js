//Aria Hidden Fix
//v1.0 - Aragorn. Downloaded from AIR website


hiddenPaginationValues = document.querySelectorAll('.pager-nav a span');

		if(typeof hiddenPaginationValues !== 'undefined' && hiddenPaginationValues !== null && hiddenPaginationValues.length > 0 ) { 

			console.log("Improperly hidden text found: "+hiddenPaginationValues.length);

			var badPagearray = [...hiddenPaginationValues];

			badPagearray.forEach(badPageElement => {

				badPageElement.removeAttribute('aria-hidden');

				if(badPageElement.innerHTML == "››") {

					badPageElement.setAttribute('aria-label', 'Next');

				}

				if(badPageElement.innerHTML == "‹‹") {

					badPageElement.setAttribute('aria-label', 'Previous');

				}

			});

} 
