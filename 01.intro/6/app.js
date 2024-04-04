(() => {

    NextExercice("6.1");

    class Circle
    {
        constructor(x,y,radius) {
            this.xPos = x;
            this.yPos = y;
            this.radius = radius;
        }

        move(xOffset, yOffset) {
            this.xPos += xOffset;
            this.yPos += yOffset;
            return [this.xPos, this.yPos];
        }

        surface(){
            return Math.PI * (this.radius * this.radius);
        }
    }

    let a = new Circle(0,0,5)
    console.log(a);
    console.log(a.surface());

    console.log("Move: " + a.move(1,1))

    NextExercice("6.2");

    class Rectangle {
        constructor(topLeftXPos, topLeftYPos, width, height) {
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.height = height;
        }

        collides(otherRectangle) {
            if (
                this.topLeftXPos + this.width >= otherRectangle.topLeftXPos
                &&     
                this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width
                &&      
                this.topLeftYPos + this.height >= otherRectangle.topLeftYPos
                &&     
                this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.height
            )
            {       
                return true;
            }
            return false;

        }
    }

    let r1 = new Rectangle(1, 1, 5, 5)
    let r2 = new Rectangle(4, 4, 2, 2)
    let r3 = new Rectangle(-2, -2, 2, 2)

    console.log(r1.collides(r2))
    console.log(r2.collides(r1))
    console.log(r1.collides(r3))



    NextExercice("6.3");
    

    let GrpRectangle = [];
    let i = 0;
    while (i < 1000)
    {
        GrpRectangle.push(new Rectangle(Math.random() * 200, Math.random() * 200, Math.random() * 10, Math.random() * 10));
        i++;
    }
    let RectangleInCollision = [];

    GrpRectangle.forEach(x => {
        GrpRectangle.forEach(x2 => {
            if (x2 != x) {
                if (x.collides(x2)) {
                    RectangleInCollision.push(x);
                }
            }
        })
    });

    console.log(RectangleInCollision);
})();


function NextExercice(Tittle)
{
    console.log("");
    console.log("");
    console.log(Tittle);
    console.log("");
}
