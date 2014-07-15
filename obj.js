

///////////////////////////////////////////* Node *////////////////////////////////////////////////

function Node(x, y){

    this.pos = [ (x === null)? 0 : x, (y === null)? 0 : y ];
    this.image = null;
    this.Zone = null;
    
    this.zone = null;
    
    this.init = function(type){
    
        var path;
        switch(type){
        
            case "res":
                this.zone = new Res();
                break;
                
            case "com":
                this.zone = new Com();
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

Res.prototype = Object.create(Zone.prototype);

function Com(){

    this.jobs = 0;

}
Com.prototype = Object.create(Zone.prototype);
    
function Ind(){

    this.jobs = 0;

}
Ind.prototype = Object.create(Zone.prototype);

function electFact(){

    this.maxMwh = 0;
    this.usage = 0;

}
electFact.prototype = Object.create(Zone.prototype);

function PoliceSt(){

    this.funds = 0;

}
PoliceSt.prototype = Object.create(Zone.prototype);

function Road(){

    this.traffic = 0;
    this.maxUsage = 1000;
    this.usage = 0;

}
Road.prototype = Object.create(Zone.prototype);

///////////////////////////////////////////* Panel */////////////////////////////////////////////// 

function Panel(){

    


}

























