// The code in this file is released under an MIT license: http://opensource.org/licenses/MIT
// The SimpleMaps code that is complementary to this code is copyrighted and subject to this license: http://simplemaps.com/license

// This code requires version 3.0+
// Code explained at: http://simplemaps.com/docs/toggle-locations	



var working=false;																							//Is the map processing right now? No

$(document).ready(function(){ 																			//jQuery waits for the page to load first
	$(".group_toggle").click(function(event){														//When links with this class are clicked...
		if (working){return}																					//Don't do anything if map is processing
		var group_id=parseInt(this.id.substring(5));  												//Get the group # from the link's id	
		for (var location in simplemaps_worldmap_mapdata.locations){					//Iterate over locations in mapdata file
			loc=simplemaps_worldmap_mapdata.locations[location];
			if (loc.group==group_id){																		//If the location is in this link's group
				if (loc.hide!='yes'){loc.hide='yes'}														//Hide or unhide it
				else{loc.hide='no'}
			}
		}
		working=true;																							//The map is processing
		simplemaps_worldmap.refresh();																//Make the map reflect the changes to the mapdata.js file
	});
});

simplemaps_worldmap.hooks.refresh_complete=function(){											
	working=false;																								//The map is done processing
}	




