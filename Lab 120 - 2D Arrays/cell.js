class Cell(this, r, c, num){
    constructor() {
    
    }//  +++++++++  end constructor

    run() {
        this.render();
        this.update();
    }

    render() {
      let ctx = this.ctx1;
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.fillStyle = "green";
      ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
      ctx.stroke();
      ctx.restore();
    }

    update() {

    }
}//+++++++++++++++++++++  end of Cell class
