var canvas = new fabric.Canvas('myCanvas');
var part_height = 30;
var part_width = 30;
var part_object = "";
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
if (e.shiftKey == true && keyPressed == '80')
{
console.log("Shift key and p are pressed together.");
part_width = part_width + 10;
part_height = part_height + 10;
document.getElementById("current_width").innerHTML = part_width;
document.getElementById("current_height").innerHTML = part_height;
}
if (e.shiftKey == true && keyPressed == '77')
{
  console.log("Shift key and m are pressed together.")
  part_width = part_width - 10;
  part_height = part_height - 10;
  document.getElementById("current_width").innerHTML = part_width;
  document.getElementById("current_height").innerHTML = part_height;
}
if (keyPressed == ''){
    new_image('');
    console.log("head");
}
if(keyPressed == ''){
    new_image('');
    console.log("torso");
}
if (keyPressed == ''){
    new_image('');
    console.log("left hand");
}
if(keyPressed == ''){
    new_image('');
    console.log("right hand");
}
if (keyPressed == ''){
    new_image('');
    console.log("west leg");
}
if(keyPressed == ''){
    new_image('');
    console.log("east leg");
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