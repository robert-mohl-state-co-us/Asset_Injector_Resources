//Clear out empty headers, replace them with p tags to preserve formatting
// 1.2 - Added test to kill headers with whitespace

//console.log("Loading up empty header killer");

var allHeaders = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

if (typeof allHeaders !== 'undefined' && allHeaders !== null && allHeaders.length > 0) {

    //console.log("Count of headers is " + allHeaders.length);

    //Cast our collection to an array and loop it
    var allHeadersArray = [...allHeaders];
    var index = 0;

    allHeadersArray.forEach(checkHeader => {

       
        if (checkHeader.childNodes.length == 0) {
			
			 //Check to see if Header is empty
            //console.log("Detected empty Header at " + index + " of " + allHeadersArray.length);

            //Replace empty header with empty p tags to preserve formatting.
            checkHeader.outerHTML = '<p>&nbsp;</p>';


        }  else if (checkHeader.innerHTML.trim().length == 0) {
			
			//Check to see if Header contains only whitespace
            //console.log("Detected whitespace Header at " + index + " of " + allHeadersArray.length);
			//console.log("The style of the header is "+checkHeader.className);

            //Replace empty header with empty p tags to preserve formatting.
            checkHeader.outerHTML = '<p>&nbsp;</p>';


        } 
		
		

        index++;

    }); //END HEADER LOOP

} //END NO HEADERS FOUND CHECK
