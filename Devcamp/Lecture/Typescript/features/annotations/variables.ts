let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array, 왼쪽에 타입을 적어서 내부 원소의 타입 지정
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes, 첫 글자만 대문자인 것은 일반적으로 클래스 이름을 나타낸다.
class Car {}
let car: Car = new Car();

// Object literal, 세미콜론(;)으로 분리해야한다.
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function, : 부분이 annotation 이고 '=' 이후로 함수가 시작된다.
const logNumber: (i: number) => void = (i) => {
    console.log(i);
};

// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20};

// 2) when we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i< words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}