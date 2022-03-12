/**
 * Tìm hiểu về Date và Time và các hàm về thời gian
 */

// const now = new Date();

// build-in Object là object đã được khởi tạo sẵn của Js
// console.log(now);

// Sun Feb 27 2022 18:32:27 GMT+0700 (Indochina Time)
// định nghĩa
// Timezone: GMT+0700 (Indochina Time)
// second: 27
// minute: 32
// hour: 18
// year: 2022
// month: Feb (February)
// date: 27
// day of the week: Sun (Sunday)

// loại dữ liệu
// console.log(typeof now); // Object

/**
 * Timestamp và Epoch Time (Unix time)
 */

// Unix Time = 01/01/1970 (UTC) 00:00:00
// Mỗi ngày tăng 86400 giây.

// Timestamp dựa trên unix time (Tính theo milisecond)
// console.log(now.getTime()); //1645963063890

// console.log(new Date(0)); // Thu Jan 01 1970 07:00:00 GMT+0700 (Indochina Time)

// console.log(new Date(1645963063890)); //Sun Feb 27 2022 18:57:43 GMT+0700 (Indochina Time)

/**
 * Cách tạo time để làm việc
 */
// 4 cách
// new Date() - in ra ngày giờ hiện tại
// new Date(timestamp) - in ra ngày giờ dựa trên timestamp
// new Date(date string) - nói sau
// new Date(year, month, day, hour. minute, second) // month tính từ số 0

// Ví dụ
// console.log( );
// console.log(new Date(1645963063890));
// console.log(new Date('Sun Feb 27 2022 18:57:43 GMT+0700 (Indochina Time)'));
// console.log(new Date(2022, 5, 1, 23, 43, 43));

/**
 * Các hàm Get trong Date
 */
// get có nghĩa là truy xuất và lấy ra thông tin của thời gian

// getFullYear() - in ra năm
// 0 - 11 với 0 là tháng 1 và tuần tự tới 11 là tháng 12
// getMonth() - in ra tháng
// getDate() - in ra ngày của tháng
// 0 - 6 : 0 là chủ nhật và tuần tự tới 6 là thứ 7
// getDay() - in ra thứ của tuần
// getHours() - in ra giờ
// getMinutes() - in ra phút
// getMiliseconds() - in ra giây
// getTime() - in ra timestamp

/**
 * Các hàm Set trong Date
 */
// set có nghĩa là thiết lập
// const birthDay = new Date(1998, 8, 10);
// console.log(`Sinh nhật của tôi: ${birthDay}`);
// birthDay.setFullYear(1999);
// console.log(`Sinh nhật của tôi sau update: ${birthDay}`);

// Tương tự các hàm get nhưng muốn set thì đổi lại thành get - set (Lưu ý không có hàm setDay)

/**
 * Ngoài lề: tìm hiểu thêm về UTC date
 * Thời gian theo quốc tế
 * Thay vì get set theo thời gian Việt Nam múi giớ thứ 7 thì ta sử dụng theo mẫu quốc tế
 */

// getUTCFullYear() - in ra năm
// 0 - 11 với 0 là tháng 1 và tuần tự tới 11 là tháng 12
// getUTCMonth() - in ra tháng
// getUTCDate() - in ra ngày của tháng
// 0 - 6 : 0 là chủ nhật và tuần tự tới 6 là thứ 7
// getUTCDay() - in ra thứ của tuần
// getUTCHours() - in ra giờ
// getUTCMinutes() - in ra phút
// getUTCMiliseconds() - in ra giây
// getUTCTime() - in ra timestamp

// Tương tự với set

/**
 * Các hàm khác
 */

// toDateString() - hàm trả về dạng thứ ngày tháng năm
// console.log(birthDay.toDateString()); // Thu Sep 10 1998
// // toTimeString() - hàm trả về dạng thời gian
// console.log(birthDay.toTimeString()); // 00:00:00 GMT+0700 (Indochina Time)
// // toLocaleDateString() - hàm trả về dạng ngày tháng năm
// console.log(birthDay.toLocaleDateString()); // 9/10/1998 (m/dd/yyyy)

// Tips: Convert m/dd/yyyy to dd/m/yyyy
// console.log(birthDay.toLocaleDateString('vi-VI')); //10/9/1998

// toISOString() - trả về thời gian dạng ISO
// console.log(birthDay.toISOString()); //1998-09-09T17:00:00.000Z

/**
 * Bài tập
 * Cho thời gian Sun Feb 27 2022 18:57:43 GMT+0700 (Indochina Time)
 * 1/ Trả về năm
 * 2/ Lấy tháng
 * 3/ Convert sang dạng dd/m/yyyy
 * 4/ Set thời gian là 19:20:33
 * 5/ Lấy timestamp
 * 6/ chuyển timestamp 856442738 - thành dd/m/yyyy
 */

/**
 * Timer Function
 */

// setTimeout() - hàm này sẽ thực hiện 1 tách vụ nào đó trong vào khoảng thời gian mà ta định nghĩa nhưng chỉ thực hiện 1 lần
// setTimeout(() => {
//   alert('timeout function');
// }, 5000); // sau 5s thực hiện alert ra 1 hành động

// setInteval() - hàm này sẽ thực hiện 1 tách vụ nào đó trong vào khoảng thời gian mà ta định nghĩa nhưng chỉ thực hiện liên tục
// let time = 0;
// const timer = setInterval(() => {
//   time += 1;
//   console.log('interval', time);
// }, 100);

// Lưu ý khi chạy interval phải clear nó để tránh rò rỉ vùng nhớ (tốn ram) khi không dùng nữa
// clearInterval(timer);

/**
 * Bài tập:
 * 1/ Viết chương trình nhập vào năm sinh tính ra tuổi.
 * 2/ Viết countdown dựa vào thời gian đầu vào. Hết giờ sẽ Alert ra hết giờ. // Xài phút xong đổi ra giây countdown dùng interval.
 * 3/ viết chương trình tính timeAgo theo thời gian đầu vào so với hiện tại. // 3 phút trước, 5 giờ trước, 1 tháng trước, 3 ngày trước, 1 năm trước. Gợi ý sử dụng timestamp để làm bài toán này.
 * input dạng Web Feb 23 2022 18:32:27 GMT+0700 (Indochina Time)
 * output: 3 tháng trước, 1 giây trước, 2 ngày trước....
 */

/**
 * Giải bài 1
 */

// function getAge(yearOfBirth) {
//   const now = new Date(); // Lấy thời gian hiện tại
//   let currentYear = now.getFullYear();

//   return currentYear - yearOfBirth;
// }

// console.log(getAge(2003));

/**
 * Giải bài 2
 */

// function countDown(minutes = 1) {
//   let convertToSecond = minutes * 60; //Đổi thời gian sang giây

//   console.log(convertToSecond);

//   let timer = setInterval(function () {
//     convertToSecond -= 1;

//     console.log(convertToSecond);

//     if (convertToSecond === 0) {
//       clearInterval(timer);
//       alert('Hết giờ');
//     }
//   }, 1000);
// }
// countDown(2);

/**
 * Giải bài 3
 */

// function timeAgo(dateTime = 'Sun Feb 27 2018 20:55:27 GMT+0700 (Indochina Time)') {
//   const pastDay = new Date(dateTime).getTime(); // lấy timestamp của quá khứ
//   const now = new Date().getTime(); // lấy timestamp của hiện tại
//   let timestamp = Math.floor((now - pastDay) / 1000);

//   console.log(timestamp > 31536000); // làm tròn giây

//   // giây từ 1 - 60
//   // phút 61 - 3600
//   // giờ 3601 - 86400
//   // 1 ngày - 1 tháng 86401 - 2592000
//   // 1 tháng - 1 năm = 2592001 - 946080000
//   // 1 năn trở lên > 946080000

//   switch (true) {
//     case timestamp < 60:
//       console.log(`${timestamp} giây trước`);
//       break;

//     case timestamp > 61 && timestamp < 3600:
//       timestamp = Math.floor(timestamp / 60);
//       console.log(`${timestamp} phút trước`);
//       break;

//     case timestamp > 3601 && timestamp < 86400:
//       timestamp = Math.floor(timestamp / 3600);
//       console.log(`${timestamp} giờ trước`);
//       break;

//     case timestamp > 86401 && timestamp < 2592000:
//       timestamp = Math.floor(timestamp / 86400);
//       console.log(`${timestamp} ngày trước`);
//       break;

//     case timestamp > 2592001 && timestamp < 31536000:
//       timestamp = Math.floor(timestamp / 946080000);
//       console.log(`${timestamp} tháng trước`);
//       break;

//     case timestamp > 31536001:
//       timestamp = Math.floor(timestamp / 31536000);
//       console.log(`${timestamp} năm trước`);
//       break;

//     default:
//       console.log('not valid time');
//       break;
//   }
// }

// timeAgo();
