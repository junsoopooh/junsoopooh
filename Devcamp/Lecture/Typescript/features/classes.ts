// 1) class 정의
class Vehicle {
    drive(): void {
        console.log('yeeeees');
    }

    honk(): void {
        console.log('liverpool');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
// 출력결과
// yeeeees
// liverpool


// 2) extends 는 메소드를 복사 붙여넣기 해준다.
class Vehicle {
    drive(): void {
        console.log('yeeeees');
    }

    honk(): void {
        console.log('liverpool');
    }
}

class Car extends Vehicle { // Car 클래스는 Vehicle이 가진 메소드들을 복사한것과 똑같다.
    drive(): void { // extends의 원본인 Vehicle의 drive method와 다르게 입력하면 덮어쓰여진다.
        console.log('nooooooo');
    }
}

const car = new Car();
car.drive();
car.honk();
// 출력
// yeeees ( drive 메서드를 다시 정의하면 noooooo가 출력된다!)
// liverpool


// 3) private 사용
class Vehicle {
    // public drive(): void {
    //     console.log('yeeeees');
    // }

    public honk(): void {
        console.log('liverpool');
    }
}

class Car extends Vehicle {
    private drive(): void { // Vehicle의 자손 클래스인 Car에서 drive를 private로 수정할 수 없다.
        console.log('nooooooo'); // 해결1 : private를 제거한다. 해결2 : 부모 클래스인 Vehicle에서 drive 메서드를 제거한다.
    }

    startDrivingProcess(): void {
        this.drive();
    }
}

const car = new Car();
car.drive();
car.honk();


// 4) Protected 사용
class Vehicle {
    private honk(): void { // 여기를 protected로 수정하면 Car 클래스에서 honk 호출 가능
        console.log('liverpool');
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log('nooooooo');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk(); // 부모 클래스에서 honk가 private이기 때문에 호출될 수 없다. 자식 클래스에서 사용하려면 protected로 바꿔준다.
    }
}

const vehicle = new Vehicle();
vehicle.honk(); // public이 아니기 때문에 외부에서 호출할 수 없다.


// 5) Field
class Vehicle {
    color: string;
    constructor(color: string) { // constructor : class 안에 새 instance 생성할 때 사용
        this.color = color;
    }

    protected honk(): void {
        console.log('liverpool');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// 위 Vehicle 클래스 내부를 다음과 같이 줄일 수 있다.
class Vehicle {
    constructor(public color: string) { // 이렇게 햐도 똑같음
    }
}


// 6) field inheritance
class Vehicle {
    constructor(public color: string) {}
  
    protected honk(): void {
      console.log('beep');
    }
  }
  
  class Car extends Vehicle {
    constructor(color: string) {
      super(color); // vehicle의 자식 클래스인 Car도 color를 받은 변수로 설정하기 위해 super 사용
    } // color같은 인자 대신 설정하고 싶은 값으로 넣어도 된다.
  
    private drive(): void {
      console.log(this.color);
    }
  
    startDrivingProcess(): void {
      this.drive();
      this.honk();
    }
  }
  
  const car = new Car('here'); // 'here'가 color로 지정된다.
  car.startDrivingProcess(); // 'here'와 'beep'이 출력된다.

