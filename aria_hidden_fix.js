//Aria Hidden Fix
//v1.1 - Bilbo. Updated selector to match new boostrap code

hiddenPaginationValues = document.querySelectorAll('.pager__item a span');

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
