// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
	event.preventDefault();
	var width = $('#inputWidth').val();
	var height = $('#inputHeight').val();
	makeGrid(height, width);
})


function makeGrid(height,width){
	for(var j = 1 ; j <= height ; j++){
		$('#pixelCanvas').append('<tr id = table' + j +'></tr>');
		for(var i = 1 ; i <= width ; i++){
			$('#table'+j).append('<td></td>');
		}
	}

	$('td').addEventListener('click',function (){
		if($(this).attr('style')){
			$(this).removeAttr('style')
		}else{
			var color = $('#colorPicker').val();
			$(this).attr('style','background-color:'+ color);
		}
	})
	
}
