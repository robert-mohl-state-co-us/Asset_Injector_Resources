//Clear out empty headers, replace them with p tags to preserve formatting
//1.4 Cougar - Need to snipe empty headers containing &nbsp;

//Custom javascript must wait until the page loads to avoid conflict w. Tyler fixes
window.addEventListener("load", () => {

    //console.log("window has finished loading");

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
                //console.log("The type of the header is "+checkHeader.nodeName);
                //console.log("The parent of the header is "+checkHeader.parentNode.nodeName);
                //Replace empty header with empty p tags to preserve formatting.
                checkHeader.outerHTML = '<p>&nbsp;</p>';


            } else if (checkHeader.innerHTML.trim().length == 0) {
                //Check to see if Header contains only whitespace
                //console.log("Detected whitespace Header at " + index + " of " + allHeadersArray.length);
                //console.log("The style of the header is "+checkHeader.className);
                //Replace empty header with empty p tags to preserve formatting.
                checkHeader.outerHTML = '<p>&nbsp;</p>';

            } else if (checkHeader.innerHTML == "&nbsp;") {
                //Check to see if Header contains &nbsp;
                console.log("Detected &nbsp; Header at " + index + " of " + allHeadersArray.length);
                console.log("The style of the header is "+checkHeader.className);
                //Replace empty header with empty p tags to preserve formatting.
                checkHeader.outerHTML = '<p>&nbsp;</p>';

            }//END WHITESPACE HEADER CHECK 

            index++;
        }); //END HEADER LOOP
	} //END NO HEADERS FOUND CHECK

}) //END ONLOAD WAIT
