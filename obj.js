

///////////////////////////////////////////* Node *////////////////////////////////////////////////

function Node(x, y){

    this.pos = null;
    this.image = new Image();
    this.imgAngl = 0;
    
    this.zone = null;
    
    this.init = function(type, x, y){
    
        var path;
        switch(type){
        
            case "res":
                this.zone = new Res();
                this.zone.type = "res";
                break;
                
            case "com":
                this.zone = new Com();
                
                break;
                
            case "ind":
                this.zone = new Ind();
                break;
                
            case "road":
                this.zone = new Road();
                this.zone.type = "road";
                
                var dat = this.zone.imgCheck(this.pos);
                path = dat[0];
                this.imgAngl = dat[1];
                break;
                
            case "policeSt":
                this.zone = new PoliceSt();
                break;
                
            case "electFact":
                this.zone = new electFact();
                break;
                
            case "empty":
                this.zone = new Zone();
                this.zone.type = "empty";
                break;
                
            default:
                console.error("valor no encontrado : "+type);
                console.warn(this);
                break;
        
        }
        
        this.pos = (x === undefined || y === undefined)? this.pos : [x, y];
        
        this.loadImage(path); 
    
    }
    
    this.loadImage = function(path){
    
        if(path !== undefined){
            
            console.log("cragando imagen.. : "+path);
            var img = new Image();
            img.src = path;
            this.image = img;
            
        }
    
    }
    
    

}

///////////////////////////////////////////* Zone *////////////////////////////////////////////////
    
function Zone(){

    this.type = null;
    
    this.elect = false;
    this.cont = 0;
    this.landValue = 0;
    this.crime = 0;

}  


function Res(){

    this.pop = 0;

}

Res.prototype = Object.create(Zone);

function Com(){

    this.jobs = 0;

}
Com.prototype = Object.create(Zone);
    
function Ind(){

    this.jobs = 0;

}
Ind.prototype = Object.create(Zone);

function electFact(){

    this.maxMwh = 0;
    this.usage = 0;

}
electFact.prototype = Object.create(Zone);

function PoliceSt(){

    this.funds = 0;

}
PoliceSt.prototype = Object.create(Zone);

///////////////////////////////////////////* Road */////////////////////////////////////////////// 

function Road(){

    this.traffic = 0;
    this.maxUsage = 1000;
    this.usage = 0;
    
    //pos : las coordenadas del nodo actual; repeat : si es true se llamar a esta funcion de los nodo adyacentes
    this.imgCheck = function(pos, repeat){
    
        var adyctConec = [false, false, false, false],
            cont = 0,
            angl = 0,
            nod = null;
        
        var adyctPos = [ [ pos[0], pos[1]-1 ], [ pos[0]+1, pos[1] ], [ pos[0], pos[1]+1 ], [ pos[0]-1, pos[1] ] ];
        
        repeat = (repeat === undefined)? true : repeat;
        
        for(var x = 0; x < 4;x++){
        
            nod = map.mtrz[ adyctPos[x][0] ][ adyctPos[x][1] ];
            
            if(nod.zone.type === "road"){
            
                adyctConec[x] = true;
                cont++;
            
            }
            
        }//end for
        
        var path = null,
            dat;
        switch(cont){
        
            case 0:
                path = "Resource/simple_road.png";
                break;
                
            case 1:
                path = "Resource/simple_road.png";
                
                //se revisa la imgen del nodoadyacente cambia en ese caso se haran los cambios necesarios
                if(adyctConec[0] && repeat){
                    
                    nod = map.mtrz[ pos[0] ][ pos[1]-1 ];
                    dat = nod.zone.imgCheck( map.mtrz[ pos[0] ][ pos[1]-1 ].pos, false );
                    
                    nod.loadImage(dat[0]);
                    nod.imgAngl = dat[1];
                
                }
                
                else if(adyctConec[1]){
                
                    angl = 90;
                    
                    if(repeat){
                        
                        nod = map.mtrz[ pos[0]+1 ][ pos[1] ];
                        dat = nod.zone.imgCheck( map.mtrz[ pos[0]+1 ][ pos[1] ].pos, false );
                            
                        nod.loadImage(dat[0]);
                        nod.imgAngl = dat[1];
                        
                    }
                    
                }
                
                else if(adyctConec[2] && repeat){
                    
                    nod = map.mtrz[ pos[0] ][ pos[1]+1 ];
                    dat = nod.zone.imgCheck( map.mtrz[ pos[0] ][ pos[1]+1 ].pos, false );
                            
                    nod.loadImage(dat[0]);
                    nod.imgAngl = dat[1];
                
                }
                
                else if(adyctConec[3]){
                
                    angl = 90;
                    
                    if(repeat){
                        
                        nod = map.mtrz[ pos[0]-1 ][ pos[1] ];
                        dat = nod.zone.imgCheck( map.mtrz[ pos[0]-1 ][ pos[1] ].pos, false );
                            
                        nod.loadImage(dat[0]);
                        nod.imgAngl = dat[1];
                        
                    }
                
                }
                
                break;
                
            case 2:
                path = "Resource/simple_road.png"; 
                
                if( adyctConec[0] && adyctConec[2] && repeat){
                
                    //se revisa la imagen de los nodos adyacentess
                    nod = map.mtrz[ pos[0] ][ pos[1]-1 ];
                    dat = nod.zone.imgCheck( map.mtrz[ pos[0] ][ pos[1]-1 ].pos, false );
                            
                    nod.loadImage(dat[0]);
                    nod.imgAngl = dat[1];
                    
                    //se revisa la imagen de los nodos adyacentess
                    nod = map.mtrz[ pos[0] ][ pos[1]+1 ];
                    dat = nod.zone.imgCheck( map.mtrz[ pos[0] ][ pos[1]+1 ].pos, false );
                            
                    nod.loadImage(dat[0]);
                    nod.imgAngl = dat[1];
                    
                }
                else if( adyctConec[1] && adyctConec[3] ){
                
                    angl = 90;
                    
                    if(repeat){
                        
                        //se revisa la imagen de los nodos adyacentess
                        nod = map.mtrz[ pos[0]+1 ][ pos[1] ];
                        dat = nod.zone.imgCheck( map.mtrz[ pos[0]+1 ][ pos[1] ].pos, false );
                            
                        nod.loadImage(dat[0]);
                        nod.imgAngl = dat[1];
                        
                        //se revisa la imagen de los nodos adyacentess
                        nod = map.mtrz[ pos[0]-1 ][ pos[1] ];
                        dat = nod.zone.imgCheck( map.mtrz[ pos[0]-1 ][ pos[1] ].pos, false );
                            
                        nod.loadImage(dat[0]);
                        nod.imgAngl = dat[1];
                        
                    }    
                    
                }
                //else{ path = "Resource/curva.png"; }
                break
                
            case 3:
                path = "Resource/cruce.png";
                break;
                
            case 4:
                path = "Resource/cruce.png";
                break;
        
            default:
                console.warn("Opcion no encontrada, se utilizara la opcion por defecto 'imgCheck()' "+ this);
                path = "Resource/simple_road.png";
                break;
        
        }//end switch
        
        return [path, angl];
    
    }//end this.check

}
Road.prototype = new Zone();

///////////////////////////////////////////* Panel */////////////////////////////////////////////// 

function Panel(){

    this.img = null;
    
    this.init = function(){
    
        this.img = new Image();
        this.img.src = "Resource/road_ico.png";
    
    }


}

///////////////////////////////////////////* Mapa *////////////////////////////////////////////////

function Mapa(){

    this.sizeX = 0;
    this.sizeY = 0;
    
    this.mtrz = null;
    
    this.init = function(sizeX, sizeY){
    
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        
        this.mtrz = new Array(sizeX);
        for(var x = 0; x < sizeY; x++){
        
            this.mtrz[x] = new Array(sizeY); 
        
        }//end for
        
        for(x = 0; x < sizeX; x++){
        
            for(var y = 0; y < sizeY; y++){
            
                var nod = new Node();
                nod.init("empty", x, y);
                this.mtrz[x][y] = nod;
            
            }
        
        }//end for
    
    }


}























