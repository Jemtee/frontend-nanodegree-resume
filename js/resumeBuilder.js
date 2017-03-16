/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = 'Andreas Nordin'
var role = 'Rhynocerous'


var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderName.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName + '<br>');