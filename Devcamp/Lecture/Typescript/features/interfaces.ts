// 1)
interface Vehicle {
  name: string;
  year: Date; // 모든 type을 interface내의 속성 type으로 설정 가능
  broken: boolean;
  summary(): string; // 함수도 설정 가능
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`; // interface에 적힌대로 함수도 설정해야함.
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  // 짧아졌다!
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic); //oldCivic이 Vehicle 인터페이스와 속성의 이름이나 type이 다르면 오류가 발생한다.

// 2)
interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// 3) 인터페이스에서 코드 재사용성 높이기
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: $[this.name]`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic); // oldCivic은 summary가 올바른 속성으로 존재하기 때문에 Reportable type이다. 따라서 변수로 사용 가능
printSummary(drink); // drink도 summary가 올바른 속성으로 존재하기 때문에 Reportable type이다. 따라서 변수로 사용 가능
// oldCivic과 drink는 다른 속성들을 지녔지만 둘다 Reportable이 type이라 printSummary 함수의 변수로 사용 가능
// 매우 다른 다수의 object를 위해 하나의 단일 인터페이스를 사용할 수 있다.
