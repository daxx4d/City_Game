

///////////////////////////////////////////* Node *////////////////////////////////////////////////

function Node(x, y){

    this.pos = [ (x === null)? 0 : x, (y === null)? 0 : y ];
    this.image = null;
    
    this.zone = null;
    
    this.init = function(type){
    
        var path;
        switch(type){
        
            case "res":
                this.zone = new Res();
                this.zone.type = "res";
                break;
                
            case "com":
                this.zone = new Com();
                this.zone.
                break;
                
            case "ind":
                this.zone = new Ind();
                break;
                
            case "road":
                this.zone = new Road();
                path = "Borradores/simple_Road.jpg";
                break;
                
            case "policeSt":
                this.zone = new PoliceSt();
                break;
                
            case "electFact":
                this.zone = new electFact();
                break;
                
            case "empty":
                this.zone = null;
                break;
                
            default:
                console.error("valor no encontrado : "+type);
                console.warn(this);
                break;
        
        }
        
    
    
    }
    
    this.loadImage = function(path){
    
        var img = new Image();
        img.src = path;
    
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

function Road(){

    this.traffic = 0;
    this.maxUsage = 1000;
    this.usage = 0;

}
Road.prototype = Object.create(Zone);

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
                nod.init("empty");
                this.mtrz[x][y] = nod;
            
            }
        
        }//end for
    
    }


}























