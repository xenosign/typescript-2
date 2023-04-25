// Array 타입

let numArr: number[] = [1, 2, 3, 4, 5, 6];
let strArr: string[] = ["월", "화", "수", "목", "금", "토", "일"];
let objArr: object[] = [{ name: "kim" }, { name: "lee" }];

let numArr2: Array<number> = [1, 2, 3, 4, 5, 6];
let strArr2: Array<string> = ["월", "화", "수", "목", "금", "토", "일"];
let objArr2: Array<object> = [{ name: "kim" }, { name: "lee" }];

// Tuple 타입
let tupleOne: [number, string, object] = [1, "tetz", { isMember: false }];

// Enum 타입
enum MemberGrade {
  guest = 0,
  user = 1,
  memver = 2,
  admin = 3,
}

let userGrade: number = 1; // 백엔드에서 받아온 정보라고 가정

if (userGrade !== 3) {
  alert("관리자 권한이 없습니다!");
}

if (userGrade !== MemberGrade.admin) {
  alert("관리자 권한이 없습니다!");
}

// Any 타입
let anyType: any = "tetz";
anyType = 3;
anyType = [1, 2, 3];

// Union 타입

let unionType: number | string | number[] = 1;
unionType = "tetz";
unionType = [1, 2, 3, 4];

let gender: "m" | "f" = "m";
gender = "f";
// gender = "t";

// void 타입 함수

function useConsole(str: string): void {
  console.log(str);
}

// never 타입 함수

function occurError(err: string): never {
  throw new Error(err);
}

function infinite(): never {
  while (true) {
    console.log("무한~~~~~~ 도전!");
  }
}

// null, undefined

let nullData: null = null;
let undefinedData: undefined = undefined;

// type 사용하기

type numOrStr = string | number;

let dontKnow: numOrStr = 1;
dontKnow = "1";

let typeArr: numOrStr[] = [1, "2", 3, "4"];

// interface 사용하기

interface User {
  name: string;
  id: string;
  age: number;
  isMember?: boolean;
  [additional: number]: string;
}

let tetz: User = {
  name: "tetz",
  id: "xenosign",
  age: 39,
  isMember: true,
  1: "A",
  2: "B",
};

let userData: User[] = [
  { name: "lee", id: "faker", age: 26 },
  { name: "ryu", id: "keria", age: 20, isMember: true },
];

// interface 를 함수에 적용하기
interface Add {
  (num1: number, num2: number): number;
}

function interfaceAdd(x, y): Add {
  return x + y;
}

// const interfaceAdd: Add = (x, y) => {
//   return x + y;
// };

// const sumResult = interfaceAdd(1, 5);
// console.log(sumResult);
