var canvas = new fabric.Canvas('myCanvas');
var part_height = 30;
var part_width = 30;
var god_x = 10;
var god_y = 10;
var god_object = "";
function god_add(){
    fabric.Image.fromURL("shiva.jpg",function(Img){
        god_object = Img;
        god_object.scaleToWidth(150);
        god_object.scaleToHeight(140);
        god_object.set({
    top: god_y,
    left: god_x
        });
        canvas.add(god_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        part_object = Img;
        part_object.scaleToWidth(part_width);
        part_object.scaleToHeight(part_height);
        part_object.set({
    top: god_y,
    left: god_x
        });
        canvas.add(part_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (e.shiftKey == true && keyPressed == '65')
{
console.log("Shift key and a are pressed together.");
part_width = part_width + 10;
part_height = part_height + 10;
document.getElementById("current_width").innerHTML = part_width;
document.getElementById("current_height").innerHTML = part_height;
}
if (e.shiftKey == true && keyPressed == '66')
{
  console.log("Shift key and b are pressed together.")
  part_width = part_width - 10;
  part_height = part_height - 10;
  document.getElementById("current_width").innerHTML = part_width;
  document.getElementById("current_height").innerHTML = part_height;
}
if (keyPressed == '38')
{
  up();
  console.log("up");
}
if (keyPressed == '40')
{
  down();
  console.log("down");
}
if (keyPressed == '37')
{
  left();
  console.log("left");
}
if (keyPressed == '39')
{
  right();
  console.log("right");
}
if (keyPressed == '72'){
    new_image("anubis head.jpg");
    console.log("head");
}
if(keyPressed == '84'){
    new_image("Torso 2.png");
    console.log("torso");
    console.log("torso borso");
}
if (keyPressed == '76'){
    new_image("Left hand.png");
    console.log("left hand");
    
}
if(keyPressed == '82'){
    new_image("Right hand.png");
    console.log("right hand");
}
if (keyPressed == '87'){
    new_image("Left Leg.png");
    console.log("west leg");
}
if(keyPressed == '69'){
    new_image("right leg.jpeg");
    console.log("east leg");
}
}
function up(){
      if(god_y >= 0){
    god_y = god_y - part_height;
    console.log("The body part height is ", + part_height);
    console.log("When Up, the X is ", + god_x, ".The Y is ", + god_y,".");
    canvas.remove(god_object);
    god_add();
    }
    }
    function down(){
      if(god_y <= 460){
    god_y = god_y + part_height;
    console.log("The body part height is ", + part_height);
    console.log("When Down, the X is ", + god_x, ".The Y is ", + god_y,".");
    canvas.remove(god_object);
    god_add();
    }
    }
    function left(){
    if(god_x >= 0){
    god_x = god_x - part_width;
    console.log("The body part width is ", + part_width);
    console.log("When left, the X is ", + god_x, ".The Y is ", + god_y,".");
    canvas.remove(god_object);
    god_add();
    }
    }
    function right(){
        if(god_x <= 1000){
            god_x = god_x + part_width;
            console.log("The body part width is ", + part_width);
            console.log("When right, the X is ", + god_x, ".The Y is ", + god_y,".");
            canvas.remove(god_object);
            god_add();
            }
    }