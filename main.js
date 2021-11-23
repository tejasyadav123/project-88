
var canvas = new fabric.Canvas('myCanvas');

boll_y=0;
boll_x=0;
hole_y=400
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(img){
		hole_obj=img;
		hole_obj.scaleToWidth(50)
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_obj)
	}) 
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png" , function(img){
		boll_obj=img;
		boll_obj.scaleToWidth(50)
		boll_obj.scaleToHeight(50)
		boll_obj.set({
			top:boll_y,
			left:boll_x
		})
		canvas.add(boll_obj)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((boll_x==hole_x)&&(boll_y==hole_y)){
	canvas.remove(boll_obj);
    document.getElementById("hd3").innerHTML="!!You have hit the Goal!!";
	document.getElementById("myCanvas").style.borderColor=red
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(boll_y>=0){
			boll_y = boll_y - block_image_height
			console.log("block_image_height = "+block_image_height)
			console.log("when up arrow preesd, x = " + boll_x + ",y = " +boll_y)
			canvas.remove(boll_obj)
			new_image()
		}
	}	
	

	function down()
	{
	    if(boll_y<=450){
			boll_y = boll_y + block_image_height
			console.log("block_image_height = "+block_image_height)
			console.log("when down arrow preesd, x = " + boll_x + ",y = " +boll_y)
			canvas.remove(boll_obj)
			new_image()
		}
	}

	function left()
	{
		if(boll_x >5)
		{
				boll_x = boll_x - block_image_height
				console.log("block_image_height = "+block_image_height)
				console.log("when left arrow preesd, x = " + boll_x + ",y = " +boll_y)
				canvas.remove(boll_obj)
				new_image()
			}
		
		
	}

	function right()
	{
		if(boll_x <=1050)
		{
			boll_x = boll_x + block_image_height
				console.log("block_image_height = "+block_image_height)
				console.log("when left arrow preesd, x = " + boll_x + ",y = " +boll_y)
				canvas.remove(boll_obj)
				new_image()
		}
	}
	
}

