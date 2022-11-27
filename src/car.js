class Car {
  constructor(brand, color) {
    this.brand = brand;
    if (color) {
      this.color = color;
    } else {
      const index = Car.instancesCount % Car.COLORS.length;
      this.color = Car.COLORS[index];
    }
    Car.instancesCount = Car.instancesCount + 1;
  }
  static instancesCount = 0;
  static COLORS = [];
}

module.exports = Car;
