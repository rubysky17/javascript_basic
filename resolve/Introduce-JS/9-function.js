// Function (Hàm)
// Định nghĩa: Hàm là 1 thành phần trong cấu trúc lập trình, làm một nhiệm vụ nào đó có thể tái sử đụng được.
/**
 * Syntax (Cú pháp): cách khai báo hàm
 * function functionName(params...) {
 *    //doing somethin
 * }
 */

// tên hàm: viết theo camelCase
// params: là tham số (dữ liệu đầu vào)
// sử dụng return trong function
// cách gọi hàm;

// 1/ default params: gán giá trị ặc định cho tham số khi hàm không nhận được tham số.
// 2/ giải thích hoisting khi hàm được gọi trước khi khai báo.

// console.log('Vậy tổng là: ', calculateSum(3));

// function calculateSum(number1 = 0, number2 = 1) {
//   return number1 + number2;
// }

// Bài tập: Cho thông tin học sinh bên dưới. Tính trung bình tổng học sinh trên biết toán và văn nhân 2. Xếp loại học sinh nếu học sinh là yếu nếu học sinh nhỏ hơn 5, trung bình nếu lớn hơn 5 và nhỏ hơn 6.5,khá nếu trên 6.5 và nhỏ hơn 8, trên 8 là học sinh giỏi.

// Gợi ý: viết hàm tính trung bình và sau đó sử dụng câu điều kiện để xếp loại học sinh

// let studentA = {
//   math: 9,
//   literature: 3,
//   english: 7,
// };

// Khái niệm callback function: khi function là 1 tham số của 1 function khác.
// Cơ bản
// function total(num1, num2) {
//   return num1 + num2;
// }

// // fn: là 1 cái callback function
// function average(sum) {
//   console.log('sum', sum);
//   return sum / 2;
// }

// console.log(average(total(3, 4)));

// ------------------------------------------------  Function Scope và Block Scope
// Scope là gì ??? Scope là phạm vi của biến
// Global Scope: Phạm vi toàn cục
// let myName = 'đạt'; // Global;

// Function scope là biến đó chỉ được truy cập trong phạm vi function đó
// function logName() {
//   myName = 'hello';
//   let myName2 = 'Mạnh Đạt'; // Function scope
//   console.log(myName);
// }

// logName();
// console.log(myName);

// Block scope: biến đó chỉ được truy vập bên trong phạm vi block đó
// if (true) {
//   var bien1 = 'Mạnh Đạt';
// }

// console.log(bien1); // Error defined if let
// console.log(bien1); // valid defined if var

// Phân biệt global,function,block scope và hoisting với var let const ????
// Nên sử dụng khai báo nào

//----------------------------------------------------
// Anonymous Function

// fn() // lỗi hoisting

// const fn = function () {
//   console.log('hello world');
// };

// fn() // gọi sau khi function được khai báo

//---------------------------------------------------- Các loại function hay dùng
// function declaration
// function logName() {
//   console.log('hello world');
// }
// Điểm khác nhau Anonymous Function không bị hoisting, còn function declaration bị hoisting

// IIFE: Immediately Invoked Function Expression (hàm dược gọi sau khi được khai báo luôn) Chỉ thực hiện bên trong block scope của chính nó
// (function () {
//   // doing somthing
// })();

// let num1 = 3;
// let num2 = 4;

// (function fnOne(num1, num2) {
//   // let num1 = 5; // sử dụng let sẽ bị redeclaration còn var thì không

//   console.log('hàm 1', num1 + num2);
// })(num1, num2);

// console.log(num1);

// fnOne(); // fnOne is not defined

// Arrow function (Nói sau)
// Generator function (Nói sau)

// ---------------------------------Closure (hack não) ------------------------------------
// Closure chỉ định nghìa là phạm vi function bên trong có thể truy xuất được biến của function bên ngoài.

// Outer function
// function hamCha() {
//   let bienCha = 'parent';

//   //Inner function
//   function hamCon() {
//     console.log(bienCha);
//   }

//   return hamCon;
// }

// let run = hamCha(); // Hàm con chưa được chạy lúc này hàm con chỉ được gán cho run
// run();

// Outer Function
// function hamCha(thamSoCha) {
//   // Inner Function
//   return function hamCon(thamSoCon) {
//     console.log(`${thamSoCha} ${thamSoCon}`);
//   };
// }

// let run = hamCha('Xin chào đến với');
// run('javascript');

// function hamCha() {
//   let bienCha = 'Hello';

//   function hamCon() {
//     console.log(bienCha);
//   }

//   return hamCon;
// }

// let run = hamCha(); // Biến Cha khởi tạo và return hàm con nhưng đồng thời biến cha lúc nào không thể truy xuất được nữa
// run(); // Hàm run gọi lại lần nữa và hàm con được chạy nhưng vẫn truy xuất được biến cha là do closure

// Review lại lý thuyết function
// Bài tập-------------------------------------------------------
// Viết function so sánh 2 số a và b trả về số lớn
// In hoa chữ cái đầu của từ ví dụ: nam => Nam, NGOC => Ngoc
// Viết 1 hàm là callback của function khác (function là tham số của function khác) trả về kết quả của function đó sử dụng lại bài so sánh 2 số trên.

// function fnCallBack(a, b, cb) {
//   // tính số lớn nhất
//   cb();
// }

// function printMax(print) {
//   console.log('Giá trị max là', print);
// }

// fnCallBack(3, 5, printMax);

// ------------------------ Nói sơ về Arrow function
// Syntax
// const arrowFn = () => {
// doing somthing
// }

// ví dụ tính diện tích hình vuông
// const square = (x) => {
//   return x * x;
// };

// Shorthand
// const square = (x) =>  x * x;
