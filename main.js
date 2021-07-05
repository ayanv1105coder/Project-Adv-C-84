//Variables
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
img_width = 300;
img_height = 100;
var img_image = img_image;
img_x = 100;
img_y = 100;
window.addEventListener("keydown", my_keydown);

//function add
function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploading;
	img_imgTag.src = img_image;
}

//function uploading
function uploading() 
{
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


//function my_keydown
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=65 && keyPressed<=90)|| (keyPressed >=97 && keyPressed<=122))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed an alphabet key";
			console.log("Alphabet Key Pressed");
		}
		
		if((keyPressed >=48 && keyPressed<=57)) 
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed a number key";
			console.log("Number Key Pressed");
		}
		if((keyPressed >=37 && keyPressed<=40)) 
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an arrow key";
			console.log("Arrow Key Pressed");
		}
		if((keyPressed =17) || (keyPressed=18) || (keyPressed=27)) 
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed a special key";
			console.log("Special Key Pressed");
		}	
		if((keyPressed =8) || (keyPressed=9) || (keyPressed=13) || (keyPressed =16) || (keyPressed=20) || (keyPressed=32) || (keyPressed=91)) 
		{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed another key";
			console.log("Other Key Pressed");
		}	
}
//number, alphabet, arrow, special, other keys
function alphabetkey()
{
		img_image = "Alpkey.png";
	add();
}
function numberkey()
{
		img_image = "numkey.png";
	add();	
}
function arrowkey()
{
		img_image = "Arrkey.png";
	add();
}
function otherkey()
{
		img_image = "otherkey.png";
	add();
}
//function specialkey()
{
	img_image = "spkey.png";
add();
}
	
