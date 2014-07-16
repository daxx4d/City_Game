window.onload = main;

var canvas,
    ctx,
    img,
    panel;

function main(){
    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    panel = new Panel();
    panel.init();
    
    
    run();
    repaint();
    
}

function run(){
    
    
    setTimeout(run,50);
    act();
    paint();
    
}

function repaint(){
    
    requestAnimationFrame(repaint);
    paint();
    
}


function act(){
    
    
    
}// act

function paint(){
    
    var width = canvas.width,
        height = canvas.height,
        anch = 20,
        x = 0, y = 0,
        posX = 0, posY = 0,
        cont = 0;
    
    //dibuja el terreno
    ctx.fillStyle = "#ba7f0b";
    ctx.fillRect(0, 0, width-(anch*3), height)
    
    //se traza una cuadricula en el mapa
    var cont = 0;
    
    for(posY = 0; posY < height;){
    
        for(posX = 0; posX < width-(anch*3);){
        
            ctx.moveTo(posX,      posY);
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
























