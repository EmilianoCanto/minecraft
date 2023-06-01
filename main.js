var canvas=new fabric.Canvas("canva");
var hblock=30;
var wblock=30;
var xSteve=0;
var ySteve=0;
var Steve="";
var bloque="";
function cargarsteve(){
    fabric.Image.fromURL("player.png", function(Img){
        Steve=Img;
        Steve.scaleToWidth(150);
        Steve.scaleToHeight(140);
        Steve.set({
            top:ySteve,
            left:xSteve
        });
        canvas.add(Steve);
});
}
function cargarbloque(bloqtype){
    fabric.Image.fromURL(bloqtype, function(Img){
        bloque=Img;
        bloque.scaleToWidth(wblock);
        bloque.scaleToHeight(hblock);
        bloque.set({
            top:ySteve,
            left:xSteve
        });
        canvas.add(bloque);
});
}
window.addEventListener("keydown", tecla);
function tecla(e){
    var ASCII=e.keyCode;
    console.log(ASCII)
    if(ASCII=="78"){
    cargarbloque("cloud.jpg");
    }
    if(ASCII=="80"){
        cargarbloque("ground.png");
        }
        if(ASCII=="66"){
            cargarbloque("dark_green.png");
            }
            if(ASCII=="86"){
                cargarbloque("light_green.png");
                }
                if(ASCII=="77"){
                    cargarbloque("roof.jpg");
                    }
                    if(ASCII=="84"){
                        cargarbloque("trunk.jpg");
                        }
                        if(ASCII=="71"){
                            cargarbloque("unique.png");
                            }
                            if(ASCII=="87"){
                                cargarbloque("wall.jpg");
                                }
                                if(ASCII=="67"){
                                    cargarbloque("yellow_wall.png");
                                    }
}
window.addEventListener("keydown", jugador);
function jugador(e){
    var ASCII=e.keyCode;
    if(ASCII=="37"){
        steveleft();
    }
    if(ASCII=="38"){
        steveup();
    }
    if(ASCII=="39"){
        steveright();
    }
    if(ASCII=="40"){
        stevedown();
    }
}
window.addEventListener("keydown", tamanio);
function tamanio(e){
    var ASCII=e.keyCode;
    if(ASCII=="107"){
        hblock=2+hblock;
        wblock=2+wblock;
        document.getElementById("ancho_act").innerHTML=wblock;
        document.getElementById("altura_act").innerHTML=hblock;
    }
    if(ASCII=="109"){
        hblock=hblock-2;
        wblock=wblock-2;
        document.getElementById("ancho_act").innerHTML=wblock;
        document.getElementById("altura_act").innerHTML=hblock;
    }
}
function steveleft(){
    if(xSteve>0){
    xSteve=xSteve-6;
    canvas.remove(Steve);
    cargarsteve();
}
}
function steveright(){
    if(xSteve<850){
        xSteve=6+xSteve;
        canvas.remove(Steve);
        cargarsteve();
    }
}
function steveup(){
    if(ySteve>0){
    ySteve=ySteve-6;
    canvas.remove(Steve);
    cargarsteve();
}
}
function stevedown(){
    if(ySteve<450){
    ySteve=6+ySteve;
    canvas.remove(Steve);
    cargarsteve()
}
}
function borrador(){
    var todo=canvas.getActiveGroup();
    var grupo=todo.getObjects();
    canvas.discardActiveGroup();
    grupo.forEach(function(object){
        canvas.remove(object);
    });
}