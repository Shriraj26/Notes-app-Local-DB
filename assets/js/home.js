//Date Time JS
$('#datetime').datetimepicker();

//Select All button
$('#select-all-btn').click(function(){
	const allcards = document.querySelectorAll('.card');
	for (i=0; i<allcards.length; i++){
		selectAll(allcards[i]);
	}
});
//Unselect All Button
$('#unselect-all-btn').click(function(){
	const allcards = document.querySelectorAll('.card');
	for (i=0; i<allcards.length; i++){
		unselectAll(allcards[i]);
	}
});

//Card Click Event
$('.card').click(function(elem){
	
	if(this.classList.contains('select-cards')){
		unselectAll(this);
	}else{
		selectAll(this);
	}
});

function selectAll(element){
	element.classList.add('select-cards');
}

function unselectAll(element){
	element.classList.remove('select-cards');
}

$('#delete-selected-id').click(function(){
	
	var selectedList = document.querySelectorAll('.select-cards a');
	const arrList = [];
	for(i = 0; i<selectedList.length; i++){
	 	
		arrList.push(selectedList[i].href.split('=')[1])
	}
	
	$.post('http://localhost:8000/deleteSelected',
		{
			arrList : arrList
		},
		function(err){
			if(err){
				console.log('Cannot post data to be deleted to the Server');
				return;
			}
			console.log('Request to delete data sent to Server successfully');

		}
	);
	
					
});


