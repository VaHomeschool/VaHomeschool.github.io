var working=false;																						

$(document).ready(function(){ 																		
	$(".group_toggle").click(function(event){													
		if (working){return}																					
		var group_id=parseInt(this.id.substring(5));  												
		for (var location in simplemaps_statemap_mapdata.locations){				
			loc=simplemaps_statemap_mapdata.locations[location];
			if (loc.group==group_id){						
				if (loc.hide!='yes'){loc.hide='yes'}						
				else{loc.hide='no'}
		}
		}
		working=true;																						
		simplemaps_statemap.refresh();																
	});
});

simplemaps_statemap.hooks.refresh_complete=function(){											
	working=false;																							
}	




