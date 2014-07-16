window.onload = main;

var canvas,
    ctx,
    map,
    panel, 
    pause = false;

///////////////////////////////////////////* main *////////////////////////////////////////////////

function main(){
    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    map = new Mapa();
    map.init(20, 20);
    
    panel = new Panel();
    panel.init();
    
    $("#pause").click(function(){
    
        pause = !pause;
        var state = document.getElementById("state");
        state.style.backgroundColor = (pause)? "red" : "green";
    
    });
    
    
    run();
    repaint();
    
}

///////////////////////////////////////////* run */////////////////////////////////////////////////

function run(){
    
    
    setTimeout(run,50);
    act();
    paint();
    
}

function repaint(){
    
    requestAnimationFrame(repaint);
    paint();
    
}

///////////////////////////////////////////* act & repaint *///////////////////////////////////////

function act(){
    
    if(pause){ return; }
    
    
}// act

function paint(){
    
    if(pause){ return; }
    
    var width = canvas.width,
        height = canvas.height,
        anch = 20,
        x = 0, y = 0,
        posX = 0, posY = 0,
        cont = 0;
    
    //dibuja el terreno
    ctx.fillStyle = "#ba7f0b";
    ctx.fillRect(0, 0, map.sizeX*anch, map.sizeY*anch)
    
    //se traza una cuadricula en el mapa
    var cont = 0;
    
    ctx.lineWidth = 2;
    for(posY = 0; posY < map.sizeY*anch;){
    
        for(posX = 0; posX < map.sizeX*anch;){
        
            ctx.moveTo(posX,      posY, 1);
            ctx.lineTo(posX+anch, posY);
            ctx.lineTo(posX+anch, posY+anch);
            ctx.lineTo(posX,      posY+anch);
            ctx.lineTo(posX,      posY);
            cont++;
            
            if(cont > 1000){ break; }
            
            posX += anch;
        
        }
        
        posY += anch;
        posX = 0;
        
        if(cont > 1000){ break; }
    
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();
    
    //se dibuja el panel de opciones
    ctx.drawImage(panel.img, width-(anch*3), 0, width-( width-(anch*3) ),  width-( width-(anch*3) ) ); 
    
}// paint

///////////////////////////////////////////* canvasEvent */////////////////////////////////////////

function canvasEvent(evt){

    var posX = 0,
        posY = 0;

}






















