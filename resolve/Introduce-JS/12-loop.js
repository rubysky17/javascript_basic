// Vòng lặp là gì ?
// Vòng lặp là cái gì đó lặp đi lặp lại (Vòng lặp không kết thúc là vòng lặp vô tận, vòng lặp có điểm kết thúc).

// For -------------------------------------------------------------
// const numberArray = [1, 2, 3, 4, 5];

// console.log('bắt đầu vòng lặp');

// for (let i = 0; i < numberArray.length; i++) {
//   console.log('trong vòng lặp');

//   console.log(numberArray[i]);
// }

// console.log('thoát vòng lặp');

// *for (điểm bắt đầu, điều kiện so sánh để chạy tiếp (true là chạy tiếp, false là dừng), điều kiện chạy sau khi hết 1 vòng)
// Mẹo
// Chạy tăng dần: let i = 0; i < array.length; i++
// Chạy giảm dần: let i = array.length - 1; i >= 0; i--
// for (let i = numberArray.length - 1; i >= 0; i--) {
//   console.log(numberArray[i]);
// }

// ------------------------------------------------------------------------------------
// Bài toán
// Cho cái mảng const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12]
// Log ra các số chẵn và lẻ
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (let i = 2; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

// ----------------------------------------------------------
// Vòng lặp lồng nhau
// const numberArray = [0, 1, 2, 3, 4, 5];

// for (let i = 0; i < numberArray.length; i++) {
//   console.log('Hết 1 vòng: ', i);

//   for (let j = 0; j < numberArray.length; j++) {
//     console.log(numberArray[j]);
//   }
// }

// Hiểu như sau : const numberArray = [0, 1, 2, 3, 4, 5];
// const numberArray = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]];

// ------------------------------------------------------------------------------------

// Bài tập
// 1/ Sao chép mảng dùng vòng lặp for
// 2/ Đảo ngược từ: "i love" => "evol i"

// ------------------------------------------------------------------------------------
// While và do while

// While check điều kiện xong mới xử lý
// while (condition) {
//   // doing somthing
// }

// let num = 1; //Khai báo number bằng 1

// while (num < 10) {
//   console.log('number is' + ' ' + num);

//   num++; // Sau 1 lần lặp number tăng lên 1
// }

// console.log('End of while');

// Tương tự với khi sử dụng for
// for (let i = 1; i < 10; i++) {
//   console.log('number is' + ' ' + i);
// }

// ------------------------
// Do While chạy trước xong mới check điều kiện xong mới xử lý
// let num = 1;

// do {
//   // Do something first
//   num++;
//   console.log('number is ' + num);
// } while (num < 10);

// Khi trường hợp num = 10 thì code trong do vẫn chạy bth sau đó mới check điều kiện theo while

// -----------------------------------------------------------------------------------------
// For Of
// For of thường dùng cho mảng và dùng cho string
// for (const number of [1, 2, 3, 4, 5, 6, 7]) {
//   console.log(number);
// }

// ---------------------------------------------------------- Bài tập
// bài tập 1: Cho 1 mảng gồm các gái trị ngẫu nhiên, loại bỏ hết tất cả các giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthy
const defaultArray = [
  'a',
  0,
  false,
  'Manh Dat',
  '4',
  NaN,
  null,
  32,
  '',
  1,
  100,
  undefined,
  [1, 2, 3],
];

// const result = [];

// for (const item of defaultArray) {
//   if (!!item === true) {
//     result.push(item);
//   }
// }

// const result2 = defaultArray.filter(function (item) {
//   if (!!item) {
//     return item;
//   }
// });

// console.log('Kết quả: ', result2);

// Bài tập 2: Cho 1 mảng phức tạp gồm nhiều cấp. Hãy trả về mảng đơn gồm 1 cấp của mảng (Mảng đơn giản).
// const defaultArray1 = [
//   'a',
//   [0, [false, 'Manh Dat'], '4'],
//   NaN,
//   null,
//   [32, '', [1], [100]],
//   [undefined, [1, 2, 3]],
// ];

// const complexArray = defaultArray1.flat(9); // Tham số tùy thuộc vào cấp của mảng con tùy thuộc vào mảng đó bao nhiu thằng con

// console.log(complexArray);

// Bài tập 3: Đảo ngược 1 số nguyên 4321 => 1234
// bước 1: Chuyển sang mảng
// bước 2: loop
// bước 3: đảo ngược
// bước 4: convert sang số và chuyển từ array sang number

// function reverseNumber(number) {
//   const newStr = `${number}`;
//   let newArrayNumber = newStr.split('');

//   newArrayNumber.reverse();
//   console.log(newArrayNumber.join(''));
// }

// reverseNumber(23485);

// Bài tập 4: Cho dữ liệu đầu vào là 1 số nguyên và vòng lặp chạy theo số nguyên đó nếu số nguyên chia hết cho 2 thì log ra "ha", nếu số chia hết cho 3 thì log ra "ho", cha hết cho 2 và 3 thì "haho".

// Bước 1: loop số nguyên
// bước 2: check điều kiện
// Bước 3: console log

// function logText(number) {
//   const numToStr = String(number);
//   let arrayStr = numToStr.split('');
//   let result = [];

//   arrayStr.forEach((num) => {
//     if (+num % 2 === 0 && +num % 3 === 0) {
//       result.push('haho');
//     } else if (+num % 2 === 0) {
//       result.push('ha');
//     } else if (+num % 3 === 0) {
//       result.push('ho');
//     }
//   });

//   console.log('result', result);
// }

// logText(39612);

// Bài tập 5: Đếm số lượng ký tự có trong chuỗi
// const sample = ['a', 't', 'm', 'n'];
// const sampleStr = 'aahhht';

// Bước 1: loop qua cái mảng string
// bước 2: so sánh với điều kiện
// bước 3 đếm độ dài

// const result = [];

// for (const char of sampleStr) {
//   sample.filter((charSample) => {
//     if (char === charSample) {
//       result.push(char);
//     }
//   });
// }

// console.log('result', result.length);

// Sử dụng includes
// const sample = 'atmn';
// const sampleStr = 'aahdghwamnmng';

// let count = 0;

// for (const char of sampleStr) {
//   sample.includes(char) && count++;
// }

// console.log('count', count);

// Bài tập 6: Viết 1 function trả về giá trị unique ví dụ (1,2,2,3,4,6,6,6,8,7,8,8,9) => (1,2,3,4,6,7,8,9) remove giá trị trùng nhau

// let a = [1, 2, 2, 3, 4, 6, 6, 6, 8, 7, 8, 8, 9];
// let unique = a.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// console.log(unique);
