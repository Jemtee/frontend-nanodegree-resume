

var name = 'Andreas Nordin';
var role = 'Rhynocerous';


var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderName.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName + '<br>');

var skills = ["Eating donuts","Painting portraits","Being calm"];

var bio = {
	"name" : formattedName,
	"role" : role,
	"contact" : {
		"email" : "andreas.nordin@hyperisland.se",
		"mobile" : "+46703248168",
		"github" : "Jemtee",
		"twitter" : "@CreativeBeeing",
		"location" : "Stockholm"
	},
	"bioPicurl" : "<img url='https://d1xyydhs6aldil.cloudfront.net/wp-content/uploads/2016/04/Andreas-Nordin_avatar_1460457207-160x160.jpg'>",
	"welcome message" : "Hello and welcome to me, a creative all-eater with a analytical twist",
	"skills" : skills
};

var work = {};
	work.curJob = "Conversion Specialist";
	work.curEmployer = "Conversionista";
	work.years = 2.6;
	work.location = "Stockholm";
}

var education = {};
education["name"] = "Hyper Island";
education["years"] = "2013-2014";
education["city"] = "Stockholm, Sweden";

$('#main').append(work["curJob"]);
$('#main').append(education.name);


$('#main').append(bio.location);
$('#main').append(bio.name);
$('#main').append(bio.contact.email);
$('#main').append(bio.skills);
$('#main').append(bio.bioPicurl);
$('#main').append(bio.role);






