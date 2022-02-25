// Type Coercion là sự ràng buộc về kiểu dữ liệu của javascript

// Đối với những phép toán Cộng trừ nhân chia riêng phép cộng là đặc biệt, còn lại ép kiểu sang số
console.log('10' + 10); //1010 luôn ép kiểu sang string
console.log(10 + '10'); //1010 luôn ép kiểu sang string

// Luôn ép kiểu sang number
console.log(10 - '9');
console.log('9' - 8);
console.log(10 * '9');
console.log('9' * 8);
console.log(10 / '9');
console.log('9' / 8);

// Kiểu dữ liệu khác
console.log(null + undefined); //NaN
console.log(NaN + null); //NaN
console.log(NaN + 3); //NaN
console.log(NaN + ''); //"NaN"
console.log(null + ''); //"null"
console.log(false - true); // -1
console.log(false + true); // 1
