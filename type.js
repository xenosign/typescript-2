// Array 타입
var numArr = [1, 2, 3, 4, 5, 6];
var strArr = ["월", "화", "수", "목", "금", "토", "일"];
var objArr = [{ name: "kim" }, { name: "lee" }];
var numArr2 = [1, 2, 3, 4, 5, 6];
var strArr2 = ["월", "화", "수", "목", "금", "토", "일"];
var objArr2 = [{ name: "kim" }, { name: "lee" }];
// Tuple 타입
var tupleOne = [1, "tetz", { isMember: false }];
// Enum 타입
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["memver"] = 2] = "memver";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1; // 백엔드에서 받아온 정보라고 가정
if (userGrade !== 3) {
    alert("관리자 권한이 없습니다!");
}
if (userGrade !== MemberGrade.admin) {
    alert("관리자 권한이 없습니다!");
}
// Any 타입
var anyType = "tetz";
anyType = 3;
anyType = [1, 2, 3];
// Union 타입
var unionType = 1;
unionType = "tetz";
unionType = [1, 2, 3, 4];
var gender = "m";
gender = "f";
// gender = "t";
// void 타입 함수
function useConsole(str) {
    console.log(str);
}
// never 타입 함수
function occurError(err) {
    throw new Error(err);
}
function infinite() {
    while (true) {
        console.log("무한~~~~~~ 도전!");
    }
}
// null, undefined
var nullData = null;
var undefinedData = undefined;
var dontKnow = 1;
dontKnow = "1";
var typeArr = [1, "2", 3, "4"];
var tetz = {
    name: "tetz",
    id: "xenosign",
    age: 39,
    isMember: true,
    1: "A",
    2: "B",
};
var userData = [
    { name: "lee", id: "faker", age: 26 },
    { name: "ryu", id: "keria", age: 20, isMember: true },
];
function interfaceAdd(x, y) {
    return x + y;
}
// const interfaceAdd: Add = (x, y) => {
//   return x + y;
// };
// const sumResult = interfaceAdd(1, 5);
// console.log(sumResult);
