class Entity {
  constructor(args) {
    args = args || {};
    this.color = args.color || '#FFFFFF';
    this.position = args.position || { x:100, y:100 };
    this.size = args.size || { x:50, y:50 };
  };

  collides(entity) {
    return (
      (
        this.position.x + this.size.x >= entity.position.x &&
        this.position.x <= entity.position.x + entity.size.x
      ) &&
      (
        this.position.y + this.size.y >= entity.position.y &&
        this.position.y <= entity.position.y + entity.size.y
      )
    );
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
  };

  update(step, gravity, canvas) {
    
  };
}
