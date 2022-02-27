/**
 * Định nghĩa mảng ?
 * Mảng là 1 danh sách chứa nhiều giá trị
 */
// Dùng biến để lưu trự giá trị
// let studentA = 'Nguyễn Văn A';
// let studentB = 'Nguyễn Văn B';

// => Tốn 2 vùng nhớ

// const studentList = ['Nguyễn Văn A', 'Nguyễn Văn B']; // Dùng mảng để lưu lại giá trị
// => Tốn 1 vùng nhớ

/**
 * Cách tạo mảng: có 2 cách
 */
// Cách 1: Array literal
// const list = []; // Sử dụng nhiều

// cách 2: Array constructor
// const list2 = new Array();

/**
 * Mảng có thể chứa nhiều giá trị và nhiều kiểu dữ liệu khác nhau, ngoài ra mảng có thể chứa mảng bên trong.
 * Mảng đơn giản: ["string 1", 2, true, undefined]: chứa nhiều kiểu dữ liệu khác nhau.
 * Mảng phức tạp: ["abc", ["abcd", 98, 7], 3, true]; mảng lồng mảng
 */

/**
 * Truy xuất đến giá trị của mảng
 */
// const studentList = [
//   'Nguyễn Văn A',
//   'Nguyễn Văn B',
//   'Nguyễn Văn C',
//   'Nguyễn Văn D',
//   'Nguyễn Văn E',
// ];

/**
 * length: lấy động dài của mảng
 */
// console.log(studentList.length);

/**
 * index: lấy vị trí phần tử trong mảng tính từ 0
 */
// console.log(studentList[3]); // 'Nguyễn Văn D'
// console.log(studentList[7]); // 'undefined'

// Lưu ý: để lấy phần tử cuối: length-1
// console.log(studentList[studentList.length - 1]); // 'Nguyễn Văn E'

/**
 * Array methods (Phuông thức hay dùng trong mảng)
 * length: lấy độ dài mảng
 * reverse(): Đảo ngược mảng
 * join(): nối các phần tử trong mảng thành chuỗi (" "), prefix: nếu truyền ký tự nào thì ký tự đó sẽ được nối
 * includes(): Kiểm tra xem phần tử đó có nằm trong mảng (return true false)
 * indexOf(): tìm ra vị trí đầu tiên của nó trong mảng
 * lastIndexOf(): tìm ra vị trí cuối cùng của nó trong mảng
 * push(): thêm phần tử vào cuối mảng
 * unshift(): thêm phần tử vào cuối mảng
 * pop(): xóa phần tử cuối cùng của mảng
 */

// const nameList = ['tuan', 'danh', 'dat', 'thuy', 'ngoc', 'dat'];
// console.log('nameList', nameList);
// console.log('length', nameList.length);
// console.log('reverse', nameList.reverse());
// console.log('join không prefix', nameList.join());
// console.log('join với prefix', nameList.join(' '));
// console.log('includes', nameList.includes('dat'));
// console.log('includes', nameList.includes('linh'));
// console.log('indexOf', nameList.indexOf('dat'));
// console.log('lastIndexOf', nameList.lastIndexOf('dat'));
// console.log('push', nameList.push('bao'));
// console.log('unShift', nameList.unshift('hello'));

/**
 * Phương thức slice: sao chép mảng (rất hay dùng sau này)
 *
 */

// Không truyền tham số
// const newNameList = nameList.slice(); // sao chép tất cả
// console.log('newNameList', newNameList);

// truyền tham số start. slice(start) Là vị trí (index trong mảng)
// const item = newNameList.slice(2); // sao chép phần tử 2 đến phần tử cuối cùng
// console.log(item);

// truyền tham số start và end slice(start, end)
// const item2 = newNameList.slice(0, 3); // sao chép phần tử start đến phần tử (end - 1)
// console.log(item2);

// truyền tham số là số âm: ví dụ -1 là lấy 1 phần tử cuối, -2 lấy 2 phần tử cuối
// const item3 = newNameList.slice(-3); //lấy 3 thằng cuối

/**
 * Phương thức splice: xóa phần tử trong mảng hoặc thay thế phần tử trong mảng (dễ nhầm với slice)
 *
 */
// const petList = ['dog', 'cat', 'fish', 'bird'];

//  truyền tham số splice(start) giống với slice
// const pet = petList.splice(1); // tính từ phần tử thứ start đến hết
// console.log('pet', pet);

// truyền tham số splice(start, deleteCount): deleteCount là số phần tử muốn xóa
// const petRemove = petList.splice(1, 1);
// console.log('mảng cũ', petList);
// console.log('phần tử xóa', petRemove);

// truyền tham số splice(start, deleteCount, item1, item2, item3,...): phàn tử được thêm vào ngay vị trí xóa
// xóa dog và thêm pig, lion
// petList.splice(0, 1, 'pig', 'lion');
// console.log('petList', petList);

/**
 * phương thức sort: sắp xếp các phần tử trong mảng
 */
// hàm sắp xếp của JS sẽ sắp xếp theo UTF-16
// hàm sort nên sử dụng callback function bên trong

// const numberArray = [1, 100, 4.5, 2, 3];
// console.log(numberArray.sort()); // Sắp xếp theo UTF-16

// numberArray.sort(function (a, b) {
//   if (a > b) return 1;

//   if (a < b) return -1;

//   return 0;
// });

// ternary operators
// numberArray.sort(function (a, b) {
//   return a > b ? 1 : -1;
// });

// numberArray.sort(function (a, b) {
//   return a - b;
// });

// console.log(numberArray);

//------------------------------ Tìm kiếm
/**
 * Phương thức find: tìm kiếm và trả về phần tử được tìm thấy đầu tiên trong mảng
 */

// const strArr = ['manh', 'dung', 'ngoc', 'thuy', 'bao', 'duy'];
// const numberArr = [3, 5, 6, 8, 10, 70, 90, 100, 20000];

/**
 * Find có 3 tham số:
 * 1/ phẩn tử trong mảng
 * 2/ index của phần tử trong mảng
 * 3/ mảng
 */

// const findItem = strArr.find(function (item, index, array) {
//   console.log('item', item);
//   console.log('index', index);
//   console.log('array', array);
// });

// const findItem = strArr.find(function (item) {
//   return item === 'manh';
// });

// const findItem = numberArr.find(function (item) {
//   return item >= 90;
// });

// const findItem = numberArr.find(function (item) {
//   return item >= 90;
// });
// console.log(findItem);

// => không tim thấy trả về undefined

/**
 * phương thức findIndex: tìm kiếm vị trí phần tử được tìm thấy đầu tiên trong mảng
 *
 */

/**
 * findIndex có 3 tham số:
 * 1/ phẩn tử trong mảng
 * 2/ index của phần tử trong mảng
 * 3/ mảng
 */

// const itemIndex = numberArr.findIndex(function (item, index, array) {
//   return item === 1;
// });
// console.log(itemIndex); // không tìm thấy trả về -1

// const itemIndex = numberArr.findIndex(function (item, index, array) {
//   return item >= 10;
// });

// console.log(itemIndex); // tìm thấy trả về vị trí index của phần tử đó trong mảng khác -1

/**
 * Phương thức map: từ 1 mảng tạo ra 1 mảng mới với cùng số phần tử với mảng cũ
 */

/**
 * map có 3 tham số:
 * 1/ phẩn tử trong mảng
 * 2/ index của phần tử trong mảng
 * 3/ mảng
 */

// const mapArray = [1, 2, 5, 9, 5, 7, 1000];

// const newList = mapArray.map(function (item) {
//   return item > 7 ? 'lớn hơn 7' : 'nhỏ hơn 7';
// });

// console.log(newList);

/**
 * forEach: lặp qua từng phần tử của mảng
 * Không trả mảng mới
 * Không có return
 * Hay dùng với DOM
 */

/**
 * forEach có 3 tham số:
 * 1/ phẩn tử trong mảng
 * 2/ index của phần tử trong mảng
 * 3/ mảng
 */

// const forEachArray = [1, 2, 5, 9, 5, 7, 1000];

// forEachArray.forEach(function (item) {
//   if (item > 9) {
//     console.log('Thực hiện chức năng 1');
//   } else {
//     console.log('Thực hiện chức năng 2');
//   }
// });

// So sánh map và forEach ?
// -- forEach không có return, map có return
// -- forEach không trả về mảng mới, map trả về mảng mới

/**
 * filter: lặp qua từng phần tử của mảng là lọc phần tử trong mảng để thỏa điều kiện nào đó
 */

/**
 * filter có 3 tham số:
 * 1/ phẩn tử trong mảng
 * 2/ index của phần tử trong mảng
 * 3/ mảng
 */

// Filter phần tử lớn hơn 5
// const filterArr = [4, 7, 1, 5, 6, 100, 0.3];
// const newList = filterArr.filter(function (item) {
//   return item > 5;
// });
// console.log(newList);

// không thỏa trả về mảng rỗng

/**
 * Some và Every
 * Chỉ trả về true và false
 * dừng ngay khi thỏa điều kiện
 */
/**
 * Some và Every có 3 tham số:
 * 1/ phẩn tử trong mảng
 * 2/ index của phần tử trong mảng
 * 3/ mảng
 */

/**
 * Some: 1 điều kiện true là xuất ra true, không có true xuất ra false
 * Every: 1 điều kiện false là xuất ra false, không có false xuất ra true
 */

/**
 * Reduce: Gom các phần tử trong mảng về 1 giá trị
 */
/**
 * reduce có 4 tham số:
 * 1/ previousValue: giá trị phần tử trước đó
 * 2/ currentValue: giá trị phần tử hiện tại
 * 3/ currentIndex: index của phần tử hiện tại
 */
// const reduceArray = [1, 3, 8, 22, 55, 23];

// console.log(
//   reduceArray.reduce(function (previousValue, currentValue) {
//     return (previousValue += currentValue);
//   }, 0)
// );

// -----------------------------------------------------------------------------------------------------
/**
 * Bài tập
 * 1/ Đảo ngược chuỗi: "My name is Võ Mạnh Đạt" => "Đạt Mạnh Võ is name My"
 * 2/ Đảo ngược ký tự "i love you" => "uoy evol i"
 * 3/ In hoa chữ cái đầu của từ: nam -> Nam. nhưng lúc nào là 1 chuỗi gồm họ và tên.
 */
