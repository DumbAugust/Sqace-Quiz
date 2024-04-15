const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
c = canvas.getContext("2d")
c.translate(canvas.width/2,canvas.height/2);

let a = 0;

function globalNum(){
    a += 0.0002
    console.log(a)
    if (a > Math.PI * 20) {
        a -= Math.PI * 20
    }
}

/*function planet(xPath, yPath, size, factor) {
    let angle = ((a/factor)*180) / 3.14

    let x = Math.cos(angle) * xPath
    let y = Math.sin(angle) * yPath

    c.beginPath()
    c.arc(x, y, size, Math.PI*2, false)
    c.fill()
    c.stroke();

} */

class planet {
    constructor(radius, factor, xPath, yPath) {

        this.radius = radius
        this.factor = factor
        this.xPath = xPath
        this.yPath = yPath
    }

    

}

function createPlanet(obj) {

    let angle = ((a/obj.factor)*180) / 3.14

    let x = Math.cos(angle) * obj.xPath
    let y = Math.sin(angle) * obj.yPath

    c.beginPath()
    c.arc(x, y, obj.radius, Math.PI*2, false)
    c.fill()
    c.stroke();
    console.log('drew ' + obj)
}


let blackHole = new planet(50, 1, 0, 0)
let mercury = new planet(10, 1, 100, 100)

function animate(){
    requestAnimationFrame(animate);
    globalNum();

    c.beginPath();
    c.fillStyle = '#000000'
    c.fillRect(-canvas.width,-canvas.height, canvas.width*2, canvas.height*2)
    c.closePath()

    c.strokeStyle = '#ffffff';
    createPlanet(blackHole)
    c.fillStyle = '#ffffff';
    createPlanet(mercury)

}

animate();