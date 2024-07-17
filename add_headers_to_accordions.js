//Header Accordion Fix
//v1.0 - Arches - Change accordions to headers per BIT audit
//We have two accordion styles. The accordion row cards are already headers
//See example here: https://dmv.test.colorado.gov/license-plates
//This script adds header attributes to accordions built using the ckEditor.
//See example here https://dmv.colorado.gov/faqs-investigations

//Pseudocode
//Wait for page to finish rendering.
//Look for all buttons with class ckeditor-accordion-toggler.
//Adding actual h2 tags to the page creates style issues
//Instead Add role="header" and aria-level="2" attributes to make them into headers.

//var version=1.0;
//console.log("add_headers_to_accordions.js is loaded");
//console.log("this is version  "+version);


//Tyler is also rewriting our ckeditor accordions, wait until they are done by running only after page loads
window.addEventListener("load", () => {  


	//console.log("window has finished loading");
	
var ckAccordionButtons = document.querySelectorAll('.ckeditor-accordion-toggler');



	//console.log("Accordions found on page: "+ckAccordionButtons.length);


if(typeof ckAccordionButtons !== 'undefined' && ckAccordionButtons !== null && ckAccordionButtons.length > 0) {

			var ckAccordionArray = [...ckAccordionButtons];

			ckAccordionArray.forEach(ckAccordionButtons => {

				ckAccordionButtons.setAttribute("role", "heading");
				ckAccordionButtons.setAttribute("aria-level", "2");

			});

		}
		
		
})//END ONLOAD 
