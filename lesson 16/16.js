
//Lab 16.1. Chuyển đổi kiểu và ép kiểu
//1. Dự đoán kết quả của 5 phép toán sau mà không cần thực thi:

// '9' - '5'; Kết quả là 4.
// '19' - '13' + '17'; Kết quả là 23 -> biến thành dạng number.
// '19' - '13' + 17; Không chạy được- Chạy ra kết quả sai.
// '123' < 57; Không chạy - Sau khi thực hiện với kiểu Boolean nó vỡn chạy.
// 5 + 6 + '4' + 9 - 4 - 2; Không chạy- Chạy ra 1143 -> biến thành dạng number.


//2. Thực hiện các phép toán để kiểm tra xem bạn đoán đúng không.
/* const valueString1 = '9' - '5';
const valueNumber1 = Number(valueString1);
 console.log(valueNumber1);

const valueString2 = '19' - '13' + '17'; 
const valueNumber2 = Number(valueString2);
 console.log(valueNumber2);

const valueString3 = '19' - '13' + 17;// sau khi thực hiện phép đổi kiểu còn lại 6+17 -> cộng chuỗi.
const valueNumber3 = Number(valueString3);
 console.log(valueNumber3);

const valueString4 = '123' < 57;
const valueBoolean4 = Boolean(valueString4);
 console.log(valueBoolean4); 

const valueString5 = 5 + 6 + '4' + 9 - 4 - 2;//ra 1143
const valueNumber5 = Number(valueString5);--Xem lại cách đổi kiểu dữ liệu.
 console.log(valueNumber5); */

/* value1 = '9' - '5';
 value2 = '19' - '13' + '17';
 value3 = '19' - '13' + 17;
 value4 = '123' < 57;
 value5 = 5 + 6 + '4' + 9 - 4 - 2;
 console.log( value1, value2, value3, value4, value5); */
 
 /*value6 = String(10); // => '10' 
 value7 = String(10 + 40); // => '50' 
 value8 = (10 + 40).toString(); // => '50' 
 value9 = new String(10 + 20); // => '30' 

console.log(value6, value7, value8, value9);  */

//Lab 16.2. Toán tử bằng: == với ===

//Lab 16.2.1

/* let neighbor = prompt('How many neighbor countries does your country have?');

const numberNeighbor = Number(neighbor); // Đổi neighbor từ string về number, nên đổi trước rồi thực hiện các bước tiếp theo sau.

console.log(numberNeighbor);
console.log(typeof numberNeighbor);// Dòng này kiểm tra kiểu dữ liệu numberNeighbor. */

//Lab16.2.2 Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).

// if (numberNeighbor == 1) console.log('Only 1 border!');

//Lab 16.2.3 Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.

/* if (numberNeighbor == 1) {
  console.log('Only 1 border!');
} else if (numberNeighbor>1) {
  console.log( 'More than 1 border');
} */

//Lab 16.2.4 Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).

/* if (numberNeighbor === 1) {
  console.log('Only 1 border!');
} 
else if (numberNeighbor>1) {
  console.log( 'More than 1 border');
} 
else {
console.log('No borders'); 
} */

//Lab 16.2.5 Kiểm tra code với các giá trị 'numNeighbours' khác nhau, gồm 1 và 0.
//-Với giá trị bằng -1, 0, ab,... thì trả về : 'No borders'.
//-Với giá trị bằng 1 thì trả về : 'Only 1 border!'.
//-Với giá trị bằng 3 thì trả về : 'More than 1 border'.

//Lab 16.2.6 Thay == thành ===, và kiểm tra lại code.

//-Với giá trị bằng -1, 0, ab,... thì trả về : 'No borders'.
//-Với giá trị bằng 1 thì trả về : 'No borders'. Do sự khác nhau giữa === & ==.
//-Với giá trị bằng 3 thì trả về : 'More than 1 border'.


//Lab 16.2.7 Cuối cùng, chuyển đổi 'numNeighbours' thành một số, và xem điều gì sẽ xảy ra khi bạn nhập vào 1.

//let neighbor = prompt('How many neighbor countries does your country have?'); -Chỉnh lại tên biến 1 chút so với trước đó.

//const numberNeighbor = Number(neighbor); - đổi sang kiểu dữ liệu number.

//-Với giá trị bằng -1, 0, ab,... thì trả về : 'No borders'.
//-Với giá trị bằng 1 thì trả về : 'Only 1 border!'.- Sau dữ liệu sau khi nhập được đổi về dạng number đảm bảo so sánh ===.
//-Với giá trị bằng 3 thì trả về : 'More than 1 border'.

//Lab 16.2.8
//Dữ liệu sau khi nhập được đổi về dạng number đảm bảo so sánh ===.
//Nên thực hiện việc đưa về cùng kiểu dữ liệu trước khi tiến hành các bước phía sau, để loại trừ lỗi khi chạy.


//Lab 16.3. Toán tử logic
//Lab 16.3.1 Hãy vô hiệu hóa code trước đó để prompt không xuất hiện.

//ok.

//Lab 16.3.2 Giả sử Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh, dân số ít hơn 50 triệu người và không phải đảo quốc.
//let language // " = English";
//let population //Đơn vị triệu người (< 50 triệu)
//let neighbor// Không phải đảo quốc numberNeighbor >= 1

//Lab 16.3.3 Bạn cần tạo các biến tương ứng với ngôn ngữ, dân số, có phải đảo quốc không. Giá trị các biến này sẽ được nhập bằng hàm prompt.

/*let country = prompt ('Name country');
let language = prompt( 'country use English?');
let population = prompt('population<50?');
let neighbor = prompt(' numberNeighbor>=1/Không phải là quốc đảo?');

const numberPopulation = Number(population);

const numberNeighbor = Number(neighbor);

console.log( country, language, numberPopulation, numberNeighbor); */


//Lab 16.3.4 Hãy viết một câu lệnh if giúp Sarah tìm kiếm quốc gia phù hợp.
//Bạn cần viết điều kiện đánh giá  tất cả các tiêu chí của Sarah. Hãy dành thời gian thực hiện điều này.
/*
language="English";
numberPopulation<50;
numberNeighbor>=1; */

//Lab 16.3.5 Nếu đất nước nhập vào phù hợp, in ra string phù hợp.
// Ví dụ bạn nhập là: Portugal thì in ra kết quả tương ứng như sau: 
//'You should live in Portugal :)'. Ngược lại, hãy in 'Portugal does not meet your criteria :('


/* if( language='English' && numberPopulation<50  && numberNeighbor>=1) {
  let chon_country = "You should live in" +" " + country +":)";
  console.log(chon_country);

}
else {
  let khongchon_country = country + " " + "does not meet your criteria :(";
  console.log(khongchon_country);
} */

//Lab 16.3.6 Có thể đất nước mà bạn nhập không đáp ứng toàn bộ tiêu chí. 
//Hãy quay trở lại và thay đổi tạm thời một số biến để điều kiện trở nên đúng (trừ khi bạn sống ở Canada).

/* if( language='Vietnamese' && numberPopulation<= 100 && numberNeighbor>=1) {
  let chon_country = "You should live in" +" " + country +":)";
  console.log(chon_country);

}
else {
  let khongchon_country = country + " " + "does not meet your criteria :(";
  console.log(khongchon_country);
} */

// Khi không là Canada thì dùng: && !'canada'. Tuy nhiên thêm đoạn && !'canada' vào thì không nước đáp ứng--ko hiểu...

/*  if( language='Vietnamese' && numberPopulation<= 100 && numberNeighbor>=1 && !'canada') {
  let chon_country = "You should live in" +" " + country +":)";
  console.log(chon_country);

}
else {
  let khongchon_country = country + " " + "does not meet your criteria :(";
  console.log(khongchon_country);
} */

//Canada là trường hợp đặc biệt??? hay như nt????


//Lab 16.4. Câu lệnh switch
//Sử dụng câu lệnh switch để ghi string sau cho 'language': 
//Chinese or Mandarin: 'MOST number of native speakers!'
//Spanish: '2nd place in number of native speakers'
//English: '3rd place'
//Hindi: 'Number 4'
//Arabic: '5th most spoken language'
//Tất cả các log đơn giản khác 'Great language too :D'

/*
 const language = 'Japanese';

switch (language) {
  case 'Chinese or Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
} */



//Lab 16.5. Toán tử điều kiện (ba ngôi)

//Nếu dân số của đất nước lớn hơn 33 triệu người, 
//sử dụng toán tử ba ngôi để in string sau ra console: 'Portugal's population is above average'. 
//Ngược lại, hãy in 'Portugal's population is below average'. Lưu ý giữa hai câu này chỉ có một từ thay đổi!

 const population = 33;// 33 triệu người.
console.log(population>33? " Portugal's population is above average" : "Portugal's population is below average" );


//Sau khi kiểm tra kết quả, hãy tạm thay đổi dân số thành 13 rồi thành 130. 
//Hãy xem xét các kết quả khác nhau, rồi đặt dân số về lại ban đầu.

/* const population = 13;// 13 triệu người.
console.log(population>33? " Portugal's population is above average" : "Portugal's population is below average" );
*/

/*const population = 130;// 130 triệu người.
console.log(population>33? " Portugal's population is above average" : "Portugal's population is below average" );
*/


//16.6 Bài toán tổng hợp #2.
//Lab 16.6.1. Đội nào chiến thắng? (phần 1)
/*Có hai đội thể dục dụng cụ là Dolphins và Koalas. Họ thi đấu với nhau 3 lần. 
Đội nào có điểm trung bình cao nhất sẽ chiến thắng!

1. Nhiệm vụ của bạn:
Tính điểm cho từng đội, sử dụng dữ liệu kiểm tra bên dưới
So sánh điểm trung bình của hai đội để tìm ra đội chiến thắng và in ra console. 
Đừng quên là có thể hòa, nên hãy kiểm tra điều đó (hòa tức là họ có điểm trung bình giống nhau)


Bonus 1: Chúng ta được thêm một quy tắc như sau: số điểm tối thiểu là 100 điểm . 
Theo quy tắc này, một đội sẽ giành chiến thắng chỉ khi họ có điểm trung bình cao hơn đội còn lại, 
và đồng thời có ít nhất 100 điểm. 
Gợi ý: Sử dụng toán tử logic để kiểm tra điểm số tối thiểu cũng như các else-if block!

Bonus 2: Điểm số tối thiểu cũng áp dụng cho việc hòa trận! 
Trường hợp hòa nhau chỉ xảy ra khi cả hai đội có số điểm giống nhau mà phải lớn hơn hoặc bằng 100 điểm. 
Nếu không thì không có đội nào giành chiến thắng cả.

2. Dữ liệu kiểm tra:
Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm
Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm */

//16.6.1
/* const points_Dolphins = (96+108+89)/3;
const points_Koalas = (88+91+110)/3;

console.log(points_Dolphins);
console.log(points_Koalas);

if (points_Dolphins>points_Koalas) {
  console.log("Dolphins chiến thắng");
}
else if (points_Dolphins===points_Koalas) {
  console.log("Hai đội hòa");
}
else {
  console.log("Koalas chiến thắng");
} */

//Bonus1:
/*
const points_Dolphins = (97+112+101)/3;
const points_Koalas = (109+95+123)/3;

console.log(points_Dolphins);
console.log(points_Koalas);

if (points_Dolphins>points_Koalas && points_Dolphins>=100) {
  console.log("Dolphins chiến thắng");
}
else if (points_Dolphins===points_Koalas && points_Dolphins>=100 && points_Koalas>=100) {
  console.log("Hai đội hòa");//Bonus2.
}
else if (points_Koalas > points_Dolphins && points_Koalas>=100) {
  console.log("Koalas chiến thắng");
}
else {
  console.log("Cả 2 đội điểm tb dưới 100/ không có đội chiến thắng.") //Bonus2.
}  
   */

//Bonus2: Thay dữ liệu vào trên.


//Lab 16.6.2. Tip calculator (phần 1)

//Steven muốn tạo một tip calculator (công cụ tính tiền tip) đơn giản cho những khi anh ta muốn ăn ở nhà hàng. 
//Ở đất nước của anh ta, người ta thường tip 15% nếu giá trị hóa đơn nằm trong khoảng 50-300.
 //Với những giá trị khác, tip thường là 20%.
//1. Nhiệm vụ của bạn:
//Tính tip dựa theo giá trị hóa đơn. Tạo biến 'tip' cho điều này. 
//Không dùng câu lệnh if/else (Để dễ hơn, bạn có thể bắt đầu với lệnh if/else sau đó chuyển đổi nó thành toán tử ba ngôi!)
//In string ra console có chứa giá trị hóa đơn (bill), tiền tip và giá trị cuối cùng (bill + tip). 
//Ví dụ: “The bill was 275, the tip was 41.25, and the total value 316.25”

//2. Dữ liệu kiểm tra:
//Dữ liệu 1: Kiểm tra giá trị bill 275, 40 và 430
//3. Gợi ý:
//Tính 20% của giá trị, nhân nó với 20/100 = 0.2
//Giá trị X nằm trong khoảng 50 và 300, nếu nó >= 50 && <= 300
let bill= 275;
(bill>=50 && bill<=300? tip=bill*0.15: tip=bill*0.2);
let chitiet_hoadon = ('The bill was'+' '+bill+','+' '+'the tip was'+' '+tip+','+' '+'and the total value'+' '+(bill+tip) );
console.log(chitiet_hoadon);
// SUY NGHĨ CÁCH GỘP LẠI VỚI TOÁN TỬ 3 NGÔI console.log( 'The bill was'${bill}, 'the tip was' ${ bill>=50 && bill<=300? tip=bill*0.15: tip=bill*0.2}, and the total value ${biil+tip}” );
