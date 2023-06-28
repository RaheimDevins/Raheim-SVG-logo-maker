class Shapes {
  constructor(){
    this.color=''
  }
  setColor(color){
    this.color(color);
  }
}

class Circle extends Shapes{
  render(){
    return `<circle cx="25%" cy="75%" r="20" height="50%" width"50%" fill="${this.color}"/>`
  }
}

class Triangle extends Shapes{
  render(){
    return `<polygon points="0,100 200,100 100,0" height"50%" width"50%" fill="${this.color}"/>`
  }
}

class Square extends Shapes{
  render(){
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
  }
}; 

module.exports = {Circle, Triangle, Square}
