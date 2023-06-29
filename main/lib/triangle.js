const Shapes = require("./shapes")
class Triangle extends Shapes{
  render(){
    return `<polygon points="0,100 200,100 100,0" height"50%" width"50%" fill="${this.color}"/>`
  }
}
module.exports = Triangle