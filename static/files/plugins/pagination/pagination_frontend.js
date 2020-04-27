getPagination('.frontend_pagination');
	function getPagination (table){

        		var lastPage = 1 ; 

		  $('#max_rows').on('change',function(evt){
		  	//$('.1paginationprev').html('');						// reset pagination 


		lastPage = 1 ; 
         $('.frontend_paginated').find("button").slice(1, -1).remove();
		  	var trnum = 0 ;									// reset tr counter 
		  	var maxRows = parseInt($(this).val());			// get Max Rows from select option

		  	if(maxRows == 5000 ){

		  		$('.frontend_paginated').hide();
		  	}else {
		  		
		  		$('.frontend_paginated').show();
		  	}

		  	var totalRows = $(table+' tbody .tr-body').length;		// numbers of rows 
			 $(table+' .tr-body:gt(0)').each(function(){			// each TR in  table and not the header
			 	trnum++;									// Start Counter 
			 	if (trnum > maxRows ){						// if tr number gt maxRows
			 		
			 		$(this).hide();							// fade it out 
			 	}if (trnum <= maxRows ){$(this).show();}// else fade in Important in case if it ..
			 });											//  was fade out to fade it in 
			 if (totalRows > maxRows){						// if tr total rows gt max rows option
			 	var pagenum = Math.ceil(totalRows/maxRows);	// ceil total(rows/maxrows) to get ..  
			 												//	numbers of pages 
			 	for (var i = 1; i <= pagenum ;){			// for each page append pagination li 
			 	$('.frontend_paginated #next_page').before('<button data-page="'+i+'">\
'+ i++ +'\</button>').show();
			 	}											// end for i 
			} 												// end if row count > max rows
			$('.frontend_paginated [data-page="1"]').addClass('page-disabled'); // add page-disabled class to the first li 
			$('.frontend_paginated button').on('click',function(evt){		// on click each page
				evt.stopImmediatePropagation();
				evt.preventDefault();
				var pageNum = $(this).attr('data-page');	// get it's number

				var maxRows = parseInt($('#max_rows').val());			// get Max Rows from select option

				if(pageNum == "prev" ){
					if(lastPage == 1 ){return;}
					pageNum  = --lastPage ; 
				}
				if(pageNum == "next" ){
					if(lastPage == ($('.frontend_paginated button').length -2) ){return;}
					pageNum  = ++lastPage ; 
				}

				lastPage = pageNum ;
				var trIndex = 0 ;							// reset tr counter
				$('.frontend_paginated button').removeClass('page-disabled');	// remove page-disabled class from all li 
				$('.frontend_paginated [data-page="'+lastPage+'"]').addClass('page-disabled');// add page-disabled class to the clicked 
				// $(this).addClass('page-disabled');					// add page-disabled class to the clicked 
				 $(table+' .tr-body:gt(0)').each(function(){		// each tr in table not the header
				 	trIndex++;								// tr index counter 
				 	// if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
				 	if (trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){
				 		$(this).hide();		
				 	}else {$(this).show();} 				//else fade in 
				 }); 										// end of for each tr in table
					});										// end of on click pagination list

		}).val(100).change();

												// end of on select change 
		 
    
  
								// END OF PAGINATION 
	}	
/*
$(function(){
	// Just to append id number for each row  
					$('table .tr-body:eq(0)').prepend('<th> ID </th>')

					var id = 0;

					$('table .tr-body:gt(0)').each(function(){	
						id++
						$(this).prepend('<td>'+id+'</td>');
					});
})
*/