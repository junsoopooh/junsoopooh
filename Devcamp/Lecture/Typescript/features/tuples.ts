const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// inference되지만, annotation으로 표시할 수 있다.
const pepsi: [string, boolean, number] = ['brown', true, 40];

// tuple type을 설정하여 여러번 일관되게 적용할 수 있다.
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// type은 알지만 무엇을 의미하는 숫자인 지 알 수 없다.
const carSpecs: [number, number] = [400, 3354];

// 튜플은 number의 의미를 알 수 있음.
const carStats = {
  horsepower: 400,
  weight: 3354,
};
