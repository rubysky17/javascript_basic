// Object là 1 kiểu dữ liệu của Javascript giống như Array là Non-Primitive

// Cách khai báo:
// Cách 1: Object literal
// const obj = {};

// Cách 2: object constructor
// const obj2 = new Object();

// Object gồm 2 thuộc tính là key và value
// ví dụ:
// const obj = {
//   key: value,
//   ... còn nhiều nữa
// }

// const student = {
//   name: 'Võ Mạnh Đạt',
//   age: 23,
//   gender: 'male',
//   isCoder: true,
//   'parent-name': 'Cường',
// };

// key là name, age, gender, isCoder
// value là Võ Mạnh Đạt, 23, male, true

// Trong object có thể có value là array và object....
// Lưu ý trong Object value có thể là function: nhưng gọi 1 tên gọi khác là method

// --------------------------------------------------------------------------------
// Cách truy xuất Object GET
// Cách 1 sử dụng dot
// student.name; // Võ Mạnh Đạt

// Cách 2 sử dụng bracket
// student['gender']; // 23

// lưu ý không thể truy xuất đối tượng object bằng dot nếu như key có dấu "-"
// student['parent-name'];
// student.parent-name (error)

// --------------------------------------------------------------------------------
// Cách gán lại giá trị
// student.age = 20; // gán lại tuổi = 20
// student.isStudy = true; // auto tạo key nếu object chưa có key đó

// Xóa key
// delete student['parent-name']; // Xóa key parent-name

// ------------------------------------------------------------------------------
// Loop khi sử dụng Object
// for (const key in student) {
//   console.log(key);
//   console.log(student[key]);
// }

// --------------------------------------------------------------
// Các phương thức của Object
// Object.keys() : trả về 1 mảng chứa key của object
// const keys = Object.keys(student);

// console.log('keys', keys);

// // Object.values() : trả về 1 mảng chứa value của object
// const values = Object.values(student);

// console.log('values', values);

// // Object.entries(): Trả về 1 mảng lồng mảng
// const entries = Object.entries(student);

// console.log('entries', entries);

// // Object.assign(): Dùng để copy hoặc gộp 2 object lại với nhau
// const student1 = {
//   gender: 'female',
//   name: 'Ngọc',
//   isDancer: true,
// };

// const assign = Object.assign(student, student1);

// console.log('assign', assign);

// Object.freeze(): Ngăn chặn chỉnh sửa key và value
// const freeze = Object.freeze(student); // đóng băng object
// freeze.name = 'Chỉnh sửa'; // Vô hiệu lực

// console.log('freeze', freeze);

// ------------------------------------------------------------------------
// Copy một Object
// const newStudent = student;
// newStudent.name = 'Thay đổi'; // => Very Bad bị reference Object student bị thay đổi
// console.log('student', student);
// console.log('newStudent', newStudent);

// const newStudent = { ...student };
// newStudent.name = 'Thay đổi'; // => Good object student không bị thay đổi
// console.log('student', student);
// console.log('newStudent', newStudent);

// Nested Object
// const oldObject = {
//   name: 'Đạt',
//   school: {
//     name: 'THC',
//     subject: {
//       date: '2020',
//       name: 'it',
//     },
//   },
// };

// Case 1
// const newStudent2 = Object.assign({}, oldObject); // Copy được object đơn giản chỉ copy đc 1 cấp của object
// newStudent2.school.subject = 'designer'; // Gán school > subject = designer
// console.log('oldObject', oldObject); // Bad => bị thay đổi theo
// console.log('newStudent2', newStudent2);

// Case 2
// const newStudent2 = JSON.parse(JSON.stringify(oldObject));
// newStudent2.school.subject = 'designer';
// console.log('oldObject', oldObject); // Good => không thay đổi
// console.log('newStudent2', newStudent2);

// ----------------------------------------------------------------------------------------------------
// Từ khóa this trong Object
// Giải thích:  this nó sẽ đề cập tới object gần nhất
// const student = {
//   name: 'Võ Mạnh Đạt',
//   age: 23,
//   gender: 'male',
//   isCoder: true,
//   hi: function () {
//     console.log(this);

//     console.log(
//       `hello my name is ${this.name} age ${this.age} gender ${this.gender} and i am ${
//         !this.isCoder && 'not'
//       } a coder`
//     );
//   },
// };

// student.hi();

// ----------------------------------------------------------------------------------------------------
// optional chaining: Dấu chấm hỏi
// Trường hợp có key
// const demoObject = {
//   info: {
//     name: 'Đạt',
//     class: 'IT',
//   },
// };

// console.log(demoObject.info.name); // Đạt

// Trường hợp không có key
// const demoObject2 = {
//   // info: {
//   //   name: 'Đạt',
//   //   class: 'IT',
//   // },
// };

// console.log(demoObject2.info); // undefined
// console.log(demoObject2.info.name); // undefined.name => Error: Cannot read properties of undefined (reading 'name');

// if (demoObject2.info) {
//   if (demoObject2.info.name) {
//     console.log(demoObject2.info.name); // Check điều kiện
//   }
// }

// nâng cấp hơn
// console.log(demoObject2.info?.name);
// nếu object cha có info thì trả kết quả
// nếu không có trả về undefined

// ------------------------------------------------------------------------------------------------

// const student = {
//   name: 'Võ Mạnh Đạt',
//   age: 23,
//   gender: 'male',
//   isCoder: true,
//   hi: function () {
//     console.log(this);

//     console.log(
//       `hello my name is ${this.name} age ${this.age} gender ${this.gender} and i am ${
//         !this.isCoder && 'not'
//       } a coder`
//     );
//   },
// };

// const { name, age, gender, ...rest } = student;
// console.log(rest);
// tương ứng => bad dài
// const name = student.name;
// const age = student.age;
// const gender = student.gender;

// -------------------------------------------------------------------------------------------------
// Nên truyền tham số cho function bằng object
// bài 1: Viết function kiểm tra có phải object hay không và check xem object có empty hay không?
// bài 2: Viết fn gồm 2 tham số 1 là obj 2 là key của object muốn remove ra khỏi object đó ví dụ fn({a: 1, b: 2}, b) => {a: 1}

// function removeKey(object, removeKey) {
//   let newObject = {};

//   for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//       if (key !== removeKey) {
//         newObject[key] = object[key];
//       }
//     }
//   }
//   return newObject;
// }

// console.log(removeKey({ a: 1, b: 2, c: 10 }, 'a'));

// Bài 3: Viết function kiểm tra 2 object truyền vào có bằng nhau hay không
