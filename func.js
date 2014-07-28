
function canvasEvent(evt){
    
    console.log("canvasEvent");/////*********
    
    var rect = canvas.getBoundingClientRect();
        
    var posX = evt.clientX - rect.left,
        posY = evt.clientY - rect.top;
    
    console.log("pos "+posX+" : "+posY);
    
    //busca que elemento fue seleccionado en el panel
    if(posX >= canvas.width-60){
    
        if(posY <  60){ optionSelct = "road"; }
    
    }
    else{//si no busca el nodo selecciondao
    
        var x, y;
        
        for(var num = 0; num < map.sizeX; num++){
        
            if(posX > num*20 && posX < num*20+20){ x = num; break; }
        
        }
        for(num = 0; num < map.sizeY; num++){
            
            if(posY > num*20 && posY < num*20+20){ y = num; break; }
            
        }
        
        console.log("posicion del nodo "+x+" : "+y);
        nodeSelct = map.mtrz[x][y];
    
    }

}

function drawImageR(context, image, x, y, anch, angle){
    
    var w_half = image.width/2;
    var h_half = image.height/2;

    context.save();
    context.translate(x,y);
    context.rotate(angle*Math.PI/180);
    context.drawImage(image, -w_half+20, -h_half, anch, anch);
    context.restore(); 

}

/*function drawImageR(context, image, x, y, anch, angle){
    
    var w_half = image.width/2;
    var h_half = image.height/2;

    context.save();
    context.translate(x + w_half, y + h_half);
    context.rotate(angle*Math.PI/180);
    context.drawImage(image, -w_half, -h_half, anch, anch);
    context.restore(); 

}*/















