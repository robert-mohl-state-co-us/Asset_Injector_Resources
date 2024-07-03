//Accordion Status Fix 
//v1.0 - Atlanta.
//THIS WORKS AS OF 4-22, but only on a static page, need to run it against actual code.
//7-3-24 = This looks like it is no longer needed. https://sbg.colorado.gov/salesperson-license-application has correct behavior
// See also BIT audits - https://docs.google.com/spreadsheets/d/1s12TVLa_KcgDHvhOYsLam08Dkj84R2e-Of_OWZOLLiE/edit?gid=2030393469#gid=2030393469



$(':button.ckeditor-accordion-toggler').click(function(){


console.log("click detected");


//Get the HREF embedded in the button, this will be the id of the DD you want to control.
//there is a leading #, but we don't have to trim this when using jQuery

var button = $(this);
var getHref= button.attr('href');

console.log("getHref is "+ getHref );

var accordion = $(getHref);


//TROUBLESHOOTING TEXT
var accordionClass = accordion.attr('class');
var accordionWiid = accordion.attr('wiid');

/*
console.log("accordion class is "+ accordionClass);
console.log("accordion wiid is "+ accordionWiid);
*/


/*
Do not do anything to style of the dd, just check to see if aria-expanded="false" which is the current default. Otherwise just toggle between the two states. While we are at it, do the same to the controlling button.
*/

if (accordion.attr('aria-expanded')==='false') {

accordion.attr('aria-expanded' , 'true');
button.attr('aria-expanded' , 'true');

} else {

accordion.attr('aria-expanded' , 'false');
button.attr('aria-expanded' , 'false');

}


});

