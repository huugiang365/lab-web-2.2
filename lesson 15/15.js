/*  Bài lab 15.1 */

/* 1. Khai báo một biến có tên 'isIsland', và đặt giá trị của biến. 
Biến phải chứa một giá trị Boolean (nếu quốc gia là một hòn đảo thì giá trị biến này là true, ngược lại sẽ là false). Khai báo thêm một biến 'language' nhưng chưa cần gán cho nó bất kỳ giá trị nào.
2. In các kiểu dữ liệu của biến 'isIsland', 'population', 'country' và 'language' ra console.
 */

 const isIsland = Boolean('true');
const country = "Việt Nam";
const continent = "Asia";
let population = 97470000;
let language = "";

console.log(country===isIsland);//so sánh bằng nghiêm ngặt, hoặc == đều được.
console.log(country!=isIsland);


console.log(isIsland, typeof isIsland); 

console.log(country, typeof country);
console.log(continent, typeof continent);
console.log(population, typeof population);
console.log(language, typeof language); 



/* Hết lab 15.1 */


/* Bài lab 15.2 */
/*
let isIsland = "Đảo"
const country = "Việt Nam";
const continent = "Asia";
let population = 97470000;
const language = "Viet Nam";

//country = " japan"; không chạy vì trên đã đặt là biến cố định.
population = 100000000;
//language = " Japan"; không chạy vì trên đã đặt là biến cố định.


console.log(country, typeof country);
console.log(continent, typeof continent);
console.log(population, typeof population);
console.log(language, typeof language);
*/



/* Hết lab 15.2 */


/* Bài lab 15.3 */
//let population = 100000000;

//lab 15.3.1 chia dân số làm 2 phần.
//population/2;
//console.log (population/2);


// lab 15.3.2 Tăng tổng dân số lên 1 đơn vị.
//population++;
//a = " Dân số một nửa đất nước";
//console.log (population++);

//lab 15.3.3 

/*let population_vietnam = 100000000;

if ( population_vietnam>6000000) {
  console.log('Dân số Việt Nam lớn hơn dân số Hà Lan');
}*/

//lab 15.3.4
/*let population_vietnam = 100000000;

if (population_vietnam<33000000) {
  console.log('Dân số Việt Nam ít hơn so với mức dân trung bình');
} else {
  console.log('Dân số Việt Nam nhiều hơn so với mức dân trung bình');
}*/

// lab 15.3.5

/*let description = '<country> and its <population> million people speak <language>'
const country = " Việt Nam";
let population =100000000;
const language = "VietNam";

console.log(description); */


/* Hết lab 15.3 */



//Lab 15.4. String và Template Literal (5 phút)

/*const description = 'country' + 'population' + 'language';

const country = " Việt Nam";
let population = 100000000;
const language = "VietNam";

console.log (description); */

/* Tham khảo hàm function
const country = " Việt Nam";
let population = 100000000;
const language = "VietNam";

function tag(country, population, language) {
  console.log(country);
  console.log(population);
  console.log(language);
} */


//Lab 15.5. Đưa ra quyết định: Câu lệnh if/else (10 phút)




// Ví dụ dân số Hà Lan là 18 triệu người.


/*let population = 130; // đơn vị triệu dân.
let country = "Nederland";
if (population> 33) {
  let truonghop1 = country + "'s population is above average";
  console.log(truonghop1);
} 
else {
  let sailechtb = 33-population;
  //Lưu ý, để tạo khoảng cách liền trước và sau sailechtb cần thêm đoạn string khoảng trống(... " " +sailechtb+ " "...)
  let truonghop2 = country + "'s population is" +" "+sailechtb+ " " + "million below average";
  console.log(truonghop2); 
} */
// Thay lần lượt giá trị của population là 13,130 rồi chạy.


//lab 15.6 Lab 15.6. Bài toán tổng hợp #1.

// lab 15.6.1
/* let mark_mass;
let mark_height;
let john_mass;
let john_height;
let mark_bmi = mark_mass/[(mark_height)^2];
let john_bmi = john_mass/[(john_height)^2];

let markHigherBMI = "Chỉ số BMI của Mark có cao hơn BMI của John không? :"  + " "+ Boolean(mark_bmi > john_bmi);

console.log(markHigherBMI);
 */

// tham khảo với if else.
//let markHigherBMI = mark_bmi - jonh_bmi;

/*if (markHigherBMI>0) {
  console.log("Chỉ số BMI của Mark cao hơn BMI của John")
}
else {
  console.log("Chỉ số BMI của Mark thấp hơn BMI của John")
} */

//let markHigherBMI = Boolean(mark_bmi > jonh_bmi);
//let traloi = "Chỉ số BMI của Mark có cao hơn BMI của John không? :"  + " "+ markHigherBMI;
//console.log(traloi);

//chưa dùng đến hàm function
/*function markHigherBMI () {
  document.getElementById("demo").innerHTML =
  "Kết quả là: " + Boolean(10 > 9);
} */


/*Lab 15.6.1.1 So sánh chỉ số IBM (phần 1)
Mark và John đang cố so sánh chỉ số BMI (Body Mass Index) của họ, được tính bằng công thức: BMI = mass/[(height)^2)] = mass/(height*height) (mass là khối lượng của cơ thể tính bằng kg và height là chiều cao của cơ thể tính bằng mét).
1. Nhiệm vụ của bạn:
Lưu khối lượng và chiều cao của Mark và John vào các biến.
Tính chỉ số BMI của John và Mark theo công thức (bạn có thể tính cả hai).
Tạo biến Boolean 'markHigherBMI' chứa thông tin về việc liệu chỉ số BMI của Mark có cao hơn BMI của John không.
*/

//Lab 15.6.1.2.

//Kiểm thử, dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
/* let mark_mass = 78;
let mark_height = 1.69;
let john_mass = 92;
let john_height = 1.95;
let mark_bmi = mark_mass/[(mark_height)^2];
let john_bmi = john_mass/[(john_height)^2];

let markHigherBMI = "Chỉ số BMI của Mark có cao hơn BMI của John không? :"  + " "+ Boolean(mark_bmi > john_bmi);

console.log(markHigherBMI); */

//Kiểm thử, dữ liệu 2 : Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.

/*let mark_mass = 95;
let mark_height = 1.88;
let john_mass = 85;
let john_height = 1.76;
let mark_bmi = mark_mass/[(mark_height)^2];
let john_bmi = john_mass/[(john_height)^2];

let markHigherBMI = "Chỉ số BMI của Mark có cao hơn BMI của John không? :"  + " "+ Boolean(mark_bmi > john_bmi);

console.log(markHigherBMI); */

//Lab 15.6.2. So sánh chỉ số BMI (phần 2) 
//Yêu cầu 1, chỉ in ra thông báo ai có BMI cao hơn.

/*if ( mark_bmi>john_bmi) {
  console.log("Mark's BMI is higher than John's!")
}
else {
  console.log("John's BMI is higher than Mark's!")
} */

//Yêu cầu 2, sử dụng templata literal bao gồm các giá trị BMI trong output. Ví dụ: "Mark's BMI (28.3) is higher than John's (23.9)!”.

/* if ( mark_bmi>john_bmi) {
  let templata_literal1 = "Mark's BMI" + " " + mark_bmi +" "+"is higher than John's"+" " +john_bmi+" "+ "!" ;

  console.log(templata_literal1);
}
else {
  let templata_literal2 = "John's BMI" + " " + mark_bmi +" "+"is higher than Mark's"+" " +john_bmi+" "+ "!" ;

  console.log(templata_literal2);
} */
