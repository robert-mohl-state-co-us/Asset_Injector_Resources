//THIS WORKS AS OF 4-22, but only on a static page, need to run it against actual code.

$(':button.ckeditor-accordion-toggler').click(function(){


console.log("click detected");


//Get the HREF embedded in the button, this will be the id of the DD you want to control.
//there is a leading #, but we don't have to trim this when using jQuery

var button = $(this);
var getHref= button.attr('href');

console.log("getHref is "+ getHref );

/* old code

var formatHref = getHref.substring(1)  //snips of leading #, not needed with jquery
//console.log("formatted substring is "+ formatHref );

var accordionString = "#"+formatHref
console.log("accordion string is "+ accordionString);
*/

var accordion = $(getHref);


//TROUBLESHOOTING TEXT
var accordionClass = accordion.attr('class');
var accordionWiid = accordion.attr('wiid');

console.log("accordion class is "+ accordionClass);
console.log("accordion wiid is "+ accordionWiid);



/*
Dont do anything to style of the dd, just check to see if aria-expanded="true" exists, If doesnt *because this will be the first time tit opens, then set it to true. Otherwise just toggle between the two states. While we are at it, do the same to the controlling button.
*/

if (accordion.attr('aria-expanded')==='false') {

accordion.attr('aria-expanded' , 'true');
button.attr('aria-expanded' , 'true');

} else {

accordion.attr('aria-expanded' , 'false');
button.attr('aria-expanded' , 'false');

}


});

