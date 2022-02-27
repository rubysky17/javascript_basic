const str = 'Vo Manh Dat';

// Split : Cắt chuỗi
console.log('This is split', str.split(''));
console.log('This is 3 dots', [...str]);

// toUpperCase: In Hoa
console.log('to uppercase', str.toUpperCase());

// toLowerCase: in thường
console.log('to uppercase', str.toLowerCase());

// length: độ dài chuỗi (Đếm từ 1)
console.log('length', str.length);

// startsWith : bắt đầu với
console.log('startsWith', str.startsWith('Vo')); // true
console.log('startsWith', str.startsWith('vo')); // false

// endsWith: kết thúc với
console.log('endsWith', str.endsWith('Dat')); //true
console.log('endsWith', str.endsWith('Manh')); //false

// includes: bao gồm
console.log('includes', str.includes('Manh')); //true
console.log('includes', str.includes('Minh')); //false

// indexOf: xác định vị trí của ký tự
console.log('indexOf', str.indexOf('a')); //4

// lastIndexOf: Xác định vị trí của ký tự cuối cùng
console.log('indexOf', str.lastIndexOf('a')); //4

// replace: thay thế chuỗi
console.log('replace', str.replace('Manh', 'Minh')); // Vo Minh Dat

// repeat: lặp đi lặp lại chuỗi
console.log('repeat', str.repeat(5)); // Vo Manh DatVo Manh DatVo Manh DatVo Manh DatVo Manh Dat

// trim: Xóa khoảng trắng 2 đầu
console.log('trim', str.trim()); //Vo Manh Dat

// trimEnd: Xóa khoảng trắng cuối
console.log('trimEnd', str.trimEnd()); //Vo Manh Dat

// trimStart: Xóa khoảng trắng đầu
console.log('trimStart', str.trimStart()); //Vo Manh Dat

// Sử dụng nhiều phương thức string cùng lúc
const exercise =
  '  Tôi tên là đạt, công việc của tôi là Coder, tôi làm việc tại thành phố hồ chí minh, thị trấn tân bình.   ';
/**
 * 1/ tạo 1 chuỗi đúng nội dung ? bỏ 2 khoảng trắng đầu coder => lập trình viên, hồ chí minh => Hồ Chí Minh, thị trấn => quận
 * 2/ tên của nhân vật ?
 * 3/ Công việc của tôi ?
 * 5/ Cắt từng đâu ra thành mảng, gợi ý cắt theo dấu "," ?
 */

// Giải
// console.log(
//   '1/',
//   exercise
//     .trim()
//     .replace('đạt', 'Đạt')
//     .replace('Coder', 'lập trình viên')
//     .replace('hồ chí minh', 'Hồ Chí Minh')
//     .replace('thị trấn', 'quận')
// );

// console.log('2/', exercise.trim().slice(11, 14));

// console.log('3/', exercise.trim().slice(37, 42));

// console.log('4/', exercise.trim().split(','));
