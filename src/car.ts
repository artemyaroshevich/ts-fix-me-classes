class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(speedAccelerate :number): number {
        return this.speed + 20

    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate(0)) // After fixing: will print 120
