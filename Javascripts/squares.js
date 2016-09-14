var width = window.innerWidth;
var height = window.innerHeight;
var columns = 41;
var rows = 20;
var descrip_count = 0;
var array_data = [   [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0], [0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0], [1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0], [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0], [0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0], [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0], [0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0], [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0], [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,2,1,1,1,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0], [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1], [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var title = ["About Us", "Smartphone Based Labor Monitor", "Oxygen Concen -tration Analyzer", "Otoacoustic Emission Device", "Water Purification", "Low-Cost Endoscope"];
var descriptions = ["We are: <ul><li>Passionate</li><li>Dedicated to helping improve the world</li><li>FUN</li></ul>Our <b>Design Teams</b> create solutions to big problems in developing countries. The <b>General Body</b> is responsible for planning and executing all of EWH's programs.</br></br>On this site you will find the general body's mission and current design teams' plans. All Johns Hopkins undergraduate students are eligible to apply to General Body and Design Teams.", 
                    "<ul><li>Complications during labor can be detected by examining the pattern between maternal uterine contractions and fetal heart rate.</li><li>Monitoring these parameters currently requires skilled personnel to utilize expensive and bulky machines.</li><li>We designed a low-cost, easy-to-use device to ensure that labor is progressing smoothly.</li></ul>", 
                    "<ul><li>Oxygen therapy is essential in the treatment of a variety of illnesses.</li><li>Current analyzers are too expensive for use in developing countries</li><li>We designed an oxygen analyzer to ensure that optimal levels of oxygen are reaching premature infant incubators</li></ul>", 
                    "<ul><li>Early detection of hearing loss in newborns is critical for language and cognitive development</li><li>There is no required hearing screening in developing countries due to complex, expensive equipment and lack of access to quiet rooms</li><li>Our Otoaucostic Emission Device uses a novel bone conduction technique to identify hearing impairment.</li></ul>", 
                    "<ul><li>Water purification remains a sizable issue in a number of developing world nations. Over 700 million people worldwide lack access to clean water.</li><li>We have built two full size prototypes with numerous physical, chemical and biological layers that will effectively purify dirty water.</li><li>Our team has also acquired a sizable grant to produce additional, more efficient prototypes in the near future as well as devices used to test the purity of the water.</li></ul>", 
                    "<ul><li>A nasal endoscope will provide necessary diagnostic technologies to developing countries</li></ul>"];
var des_loc = new Array(rows);
var loc_des = new Array(descriptions.length);

function clicked(id) {
	$(".head-links").each(function(index) {
		$(this).removeClass("active-link");
	});
	$("#" + id).addClass("active-link");
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function isMobile2() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$( document ).ready(function() {
    if(isMobile.any() || isMobile2()){
		window.location.replace("m/index.html");	
	}
    
    for(i = 0; i < rows; i++) {
		des_loc[i] = new Array(columns);
	}
	
	var box_cont = null;
	var description = null;
	var box = null;
    setTimeout(function() {
        height = window.innerHeight;

        var box_width = ((height - 190) / rows);
        for(i = 0; i < columns; i++) {
            for(j = 0; j < rows; j++) {
                box_cont = $("<div class='box-cont' id='" + i + "-" + j+ "'></div>");
                $(box_cont).css("width", box_width + "px");
                $(box_cont).css("padding-bottom", box_width + "px");

                $(box_cont).css("left", ((box_width + 10) * i) + "px")
                $(box_cont).css("top", ((box_width + 10) * j) + "px");

                $(box_cont).fadeIn(250);

                if(array_data[j][i] == 0) {
                    $(box_cont).addClass("inactive");
                } else if(array_data[j][i] == 2) {
                    $(box_cont).addClass("active");
                    $(box_cont).html("<p class='title'>" + title[descrip_count] + "</p>");
                    description = $("<div class='description' id='desp" + descrip_count + "'></div>");
                    if(descrip_count == 0) {
                        description.append("<div class='paragraph'>" + descriptions[descrip_count] + "</div>");
                    } else {
                        description.append("<div class='paragraph paragraph-list'>" + descriptions[descrip_count] + "</div>");
                    }
                    description.css("left", (((box_width + 10) * i + box_width + 10) + (box_width * (3.0 - 1)/2) + 10) + "px");
                    description.css("top", (((box_width + 10) * j) - (box_width * (3.0 - 1)/2) - 10) + "px");		
                    des_loc[j][i] = descrip_count;
                    loc_des[descrip_count] = i + "-" + j;
                    descrip_count++;
                } else if(array_data[j][i] == 3) {
                    $(box_cont).addClass("inactive");
                    $(box_cont).addClass("active");
                } else if(array_data[j][i] == 4) {
                    $(box_cont).addClass("inactive");
                    $(box_cont).addClass("letter-black");
                }

                $("body").on("mouseover", ".box-cont", function(e){
                    if(!$(this).hasClass("inactive") && !$(this).hasClass("deactive")) {
                        factor = 0.9;
                        var x = $(this).attr('id').split("-")[0];
                        var y = $(this).attr('id').split("-")[1];
                        if(array_data[y][x] == 2) {
                            factor = 3.0;
                            var id = "#desp" + des_loc[y][x];
                            $(id).css("width", ((box_width * factor + 20) * 4 + 30) + "px");
                            if(des_loc[y][x] == 0) {
                                $(id).css("height", ((box_width * factor + 20) * 3 + 20) + "px");
                            } else {
                                $(id).css("height", ((box_width * (factor/2) + 20) * 3 - 5) + "px");
                            }
                            $(id).css("left", (((box_width + 10) * x + box_width + 10) + (box_width * (factor - 1)/2) + 10) + "px");
                            $(id).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");		
                            $(id).css("opacity", 1);	
                            $(id).css("transition-delay", "0.25s");	
                            $(id).css("transition-duration", "0.25s");								
                        }
                        
                        $(this).css("width", (box_width * factor + 20) + "px");
                        $(this).css("padding-bottom", (box_width * factor + 20) + "px");
                        $(this).css("left", (((box_width + 10) * x) - (box_width * (factor - 1)/2) - 10) + "px");
                        $(this).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");				
                        $(this).children().css("opacity", "1");
                        $(this).children().css("transition-delay", "0.4s");
                        $(".paragraph").css("transition-delay", "0.5s");
                        $(".paragraph").css("opacity", 1);
                    }
                });

                $("body").on("mouseover", ".description", function(e){	
                    factor = 0.9;
                    var id = "#" + loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)];

                    var x = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[0];
                    var y = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[1];

                    factor = 3.0;
                    $(this).css("width", ((box_width * factor + 20) * 4 + 30) + "px");
                    if(loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)] == "9-5") {
                        $(this).css("height", ((box_width * factor + 20) * 3 + 20) + "px");
                    } else {
                        $(this).css("height", ((box_width * (factor/2) + 20) * 3 - 5) + "px");
                    }
                    $(this).css("left", (((box_width + 10) * x + box_width + 10) + (box_width * (factor - 1)/2) + 10) + "px");
                    $(this).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");		
                    $(this).css("opacity", 1);	
                    $(this).css("transition-delay", "0.25s");	
                    $(this).css("transition-duration", "0.25s");								


                    $(id).css("width", (box_width * factor + 20) + "px");
                    $(id).css("padding-bottom", (box_width * factor + 20) + "px");
                    $(id).css("left", (((box_width + 10) * x) - (box_width * (factor - 1)/2) - 10) + "px");
                    $(id).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");				
                    $(id).children().css("opacity", "1");
                    $(id).children().css("transition-delay", "0.4s");
                    $(".paragraph").css("transition-delay", "0.5s");
                    $(".paragraph").css("opacity", 1);
                });

                $("body").on("mouseout", ".description", function(e){
                    var id = "#" + loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)];

                    var x = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[0];
                    var y = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[1];

                    $(id).css("width", (box_width) + "px");
                    $(id).css("padding-bottom", (box_width) + "px");

                    $(id).css("left", ((box_width + 10) * x) + "px");
                    $(id).css("top", ((box_width + 10) * y) + "px");

                    $(id).children().css("opacity", "0");
                    $(id).children().css("transition-delay", "0s");
                    $(".paragraph").css("transition-delay", "0s");
                    $(".paragraph").css("transition-duration", 0);

                    $(".paragraph").css("opacity", 0);

                    $(this).css("width", "0px");
                    $(this).css("height", "0px");
                    $(this).css("opacity", 0);		
                    $(this).css("transition-delay", "0.05s");
                    $(this).css("transition-duration", "0.25s");								
                });

                $("body").on("mouseout", ".box-cont", function(e){
                    if(!$(this).hasClass("inactive")) {
                        $(this).css("width", (box_width) + "px");
                        $(this).css("padding-bottom", (box_width) + "px");

                        var x = $(this).attr('id').split("-")[0];
                        var y = $(this).attr('id').split("-")[1];

                        $(this).css("left", ((box_width + 10) * x) + "px");
                        $(this).css("top", ((box_width + 10) * y) + "px");

                        if(array_data[y][x] == 2) {

                            $(this).children().css("opacity", "0");
                            $(this).children().css("transition-delay", "0s");
                            $(".paragraph").css("transition-delay", "0s");
                            $(".paragraph").css("transition-duration", 0);

                            $(".paragraph").css("opacity", 0);

                            //$(this).css("z-index", 2);							
                            //$(".description").css("z-index", 1);
                            $(".description").css("width", "0px");
                            $(".description").css("height", "0px");
                            $(".description").css("opacity", 0);		
                            $(".description").css("transition-delay", "0.05s");
                            $(".description").css("transition-duration", "0.25s");								
                        }
                        /**for(k = -2; k <= 2; k++) {
                            for(l = -2; l <= 2; l++) {
                                //console.log(k);
                                //console.log("#" + (1.0 * x + k) + "-" + y);
                                if(k == 0 && l == 0) {
                                    l++
                                }
                                $("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("left", (((box_width + 10) * (1.0 * x + k))) + "px");
                                $("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("top", (((box_width + 10) * (1.0 * y + l))) + "px");
                            }	
                        }**/
                    }
                });
                $("body").append(box_cont);
                if(description != null) {
                    $("body").append(description);
                }
                description = null;
            }
        }
    }, 100);
    
	$("#home").addClass("active-link");
});