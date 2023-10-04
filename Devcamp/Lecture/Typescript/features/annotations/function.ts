const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

// void : return하지 않는 함수. null 이나 undefined를 반환해도 된다.
const logger = (message: string): void => {
  console.log(message);
};

// never : 함수가 끝까지 도달하지 않음. void로 해도 된다.
const throwError = (message: string): never => {
  throw new Error(message);
};

// 에러 메시지 출력 코드 예시
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
// destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
