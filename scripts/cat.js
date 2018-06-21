class Cat extends Entity {
  constructor(args) {
    args = args || {};
    super(args);
    this.direction = args.direction || 0;
    this.velocity = args.velocity || { x: 150, y: 0 };
    this.isJumping = false;
  }

  jump() {
    if (this.position.y >= 0) { 
      this.isJumping = true;
      this.velocity.y = 450;
    }
  }

  update(step, gravity, canvas) {
    if (this.isJumping) {
      if (this.velocity.y <= 0) {
        this.isJumping = false;
      } else {
        this.velocity.y -= gravity * step;
      }
    }
    if (!((this.direction > 0 && this.position.x + this.size.x >= canvas.width) ||
      (this.direction < 0 && this.position.x <= 0))) {
      this.position.x += this.velocity.x * this.direction * step;
    }
    if ((!(this.position.y + this.size.y >= canvas.height)) || this.isJumping) {
      this.position.y += (gravity * step) - (this.velocity.y * step);
    }
    if (this.position.y + this.size.y >= canvas.height) {
      this.position.y = canvas.height - this.size.y;
      this.isJumping = false;
      this.velocity.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = 0;
      this.isJumping = false;
      this.velocity.y = 0;
    }
  }
}