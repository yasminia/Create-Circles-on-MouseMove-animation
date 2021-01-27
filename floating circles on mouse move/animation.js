const canvas= document.getElementById('canvas1');
const ctx= canvas.getContext('2d');
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
const mouse={
    x:null,
    y:null,

}
let particleArray=[];


function particle(x,y,directionX,directionY,size,color){
    this.x=x;
    this.y=y;
    this.directionX=directionX;
    this.directionY=directionY;
    this.size=size;
    this.color=color;
}

particle.prototype.draw=function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fillStyle=this.color;
    ctx.fill();
}

particle.prototype.update=function(){
    this.x+=this.directionX;
    this.y+=this.directionY;
    this.draw();
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<particleArray.length;i++){
        particleArray[i].update()
    }
}

window.addEventListener('mousemove',function(e){
    mouse.x=e.x;
    mouse.y=e.y;
    for(let i=0 ; i<5;i++){
    let x =mouse.x;
    let y=mouse.y;
    let directionX=(Math.random()*0.2)-0.2;
   let  directionY= (Math.random()*0.2)-0.2;
   let size= Math.random()*20;
   let color='white';
   particleArray.push(new particle(x,y,directionX,directionY,size,color))
 animate()
    }
})
