// type annotation
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// Date[] 타입으로 inference
const dates = [new Date(), new Date()];

// 2차원. string[][] type이다.
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// 배열에서 추출시 type inference 한다.
const car = carMakers[0]; // string type
const myCar = carMakers.pop(); // string type

// 배열에 동일하지 않은 type의 값은 추가할 수 없다.
carMakers.push(100); // string[]에 number를 넣으면 오류 발생

// 'map, 'forEach', 'reduce' 사용
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 다수의 type 사용.

// const importantDates: (string | Date)[]로 inference 된다.
const importantDates = [new Date(), '2030-10-10'];
// annotation
const importanteDates: (Date | string)[] = [new Date()];
