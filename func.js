
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



















