// The code in this file is released under an MIT license: http://opensource.org/licenses/MIT
// The SimpleMaps code that is complementary to this code is copyrighted and subject to this license: http://simplemaps.com/license

// This code requires version 3.0+
// Code explained at: http://simplemaps.com/docs/toggle-locations	



var working=false;																							//Is the map processing right now? No

$(document).ready(function(){ 																			//jQuery waits for the page to load first
	$(".group_toggle").click(function(event){														//When links with this class are clicked...
		if (working){return}																					//Don't do anything if map is processing
		var group_id=parseInt(this.id.substring(5));  												//Get the group # from the link's id	
		for (var location in simplemaps_statemap_mapdata.locations){				
			loc=simplemaps_statemap_mapdata.locations[location];
		if (loc.group==group_id){						
			if (loc.hide!='yes'){loc.hide='yes'}						
			else{loc.hide='no'}
		}
		}
		working=true;																							//The map is processing
		simplemaps_statemap.refresh();																//Make the map reflect the changes to the mapdata.js file
	});
});

simplemaps_statemap.hooks.refresh_complete=function(){											
	working=false;																								//The map is done processing
}	




