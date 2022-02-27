// Làm việc với Number
// là số nguyên: 1,2,3,4,5,777,2312,123123,
// là số thập phân: 1.3, 2.35, 0.4

/**
 * Các hàm hay dùng của number
 * -- parseInt
 * -- parseFloat
 * -- toFixed
 * -- isInteger
 * -- Math.floor
 * -- Math.round
 * -- Math.ceil
 * -- Math.random
 * -- Math.abs
 * -- Math.pow
 * -- Math.min
 * -- Math.max
 * -- isNan
 * -- Number.isNan
 */

// Phép toán: Cộng, trừ, nhân chia, lũy thừa, chia lấy dư
/**
 * |----------------------|
 * | + : Cộng             |
 * | - : Trừ              |
 * | * : Nhân             |
 * | / : Chia             |
 * | % : Chia lấy dư      |
 * | ** : lũy thừa        |
 * |----------------------|
 */
console.log('%', 35 % 2); // Chia lấy dư kết quả ra phần dư

console.log('^', 2 ** 3); // 2 mũ 3 = 8

// Check kiểu dữ liệu typeof
const num = 10;
const num2 = '9';
const numNegative = -20;

const numDecimal1 = 3.4;
const numDecimal2 = 3.5;
const numDecimal3 = 3.8;

console.log('typeof: ', typeof num);

console.log('typeof: ', typeof parseInt(num2)); // ép kiểu sang số
console.log('typeof: ', typeof +num2); // ép kiểu sang số

// Giá trị tuyệt đối
// Math.abs()
console.log('Math.abs():', Math.abs(numNegative)); //20

// Làm tròn (Quan trọng) => Lấy phần nguyên
// Math.ceil() // làm tròn lên
console.log('ceil under 5', Math.ceil(numDecimal1)); // 4
console.log('ceil equal 5', Math.ceil(numDecimal2)); // 4
console.log('ceil more than 5', Math.ceil(numDecimal3)); // 4

// Math.floor() // làm tròn xuống
console.log('floor under 5', Math.floor(numDecimal1)); // 3
console.log('floor equal 5', Math.floor(numDecimal2)); // 3
console.log('floor more than 5', Math.floor(numDecimal3)); // 3

// Math.round() // Lớn hơn .5 sẽ làm tròn lên, Nhỏ hơn .5 sẽ làm tròn xuống
console.log('round under 5', Math.round(numDecimal1)); // 4
console.log('round equal 5', Math.round(numDecimal2)); // 4
console.log('round more than 5', Math.round(numDecimal3)); // 4
