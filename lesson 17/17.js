//lab 17.1

 //17.1.1 -Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. 
 //Dựa vào input này, hàm trả về string với định dạng như sau:
//'Finland has 6 million people and its capital city is Helsinki'.

/*
function describeCountry (country, population, capitalCity) {
  //const chitiet = country + 'has' + population + 'millions people and its capital city is' + capitalCity;- Thêm khoảng cách
  const chitiet = ` ${country} has ${population} million people and its capital city is ${capitalCity} .`;
  return chitiet;
  }
  const chitietFinland = describeCountry('Finland', 6, 'Hensinki');
  console.log(chitietFinland);

  //17.1.2 -Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau.
 //Lưu các giá trị trả về ở 3 biến khác nhau, và in chúng ra console.

  const chitietVietNam = describeCountry('Viet Nam', 97,' Ha Noi');
  console.log(chitietVietNam);
  const chitietUSA = describeCountry('USA', 300,' New York');
  console.log(chitietUSA);
  const chitietJapan = describeCountry('Japan', 120,' Tokyo');
  console.log(chitietJapan);
  */

  //Cách thứ 2: dùng khai báo hàm(tham số chính là biến.)
//17.1.1
  /*function describeCountry (country, population, capitalCity){
    return ` ${country} has ${population} million people and its capital city is ${capitalCity} .`;
  }
  const describeFinland = describeCountry('Finland', 6,' Hensinki');
 console.log(describeFinland);

 //17.1.2

 const describeVietNam = describeCountry('Viet Nam', 97,' Ha Noi');
 console.log(describeVietNam);
 const describeUSA = describeCountry('USA', 300,' New York');
 console.log(describeUSA);
 const describeJapan = describeCountry('Japan', 120,' Tokyo');
 console.log(describeJapan); */


 //Cách thứ 3: Dùng biểu thức....Hàm // hoạt đọng giống hệt cách thứ 2(khai báo hàm)
 //17.1.1
 /*const describe_country = function describeCountry (country, population, capitalCity){
  return ` ${country} has ${population} million people and its capital city is ${capitalCity} .`;
}

const describeFinland = describe_country('Finland', 6,' Hensinki');
 console.log(describeFinland);

//17.1.2
const describeVietNam = describe_country('Viet Nam', 97,' Ha Noi');
 console.log(describeVietNam);
 const describeUSA = describe_country('USA', 300,' New York');
 console.log(describeUSA);
 const describeJapan = describe_country('Japan', 120,' Tokyo');
 console.log(describeJapan);  */


 // lab 17.2 Khai báo hàm với biểu thức hàm
//17.2.1-Dân số thế giới là 7.9 tỷ người. 
//Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population' và trả về phần trăm dân số thế giới theo dân số đã cho.
// Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.

//Đoạn code dưới đây đúng yêu cầu truyền vào 1 tham số population nhưng-
//-không tổng quát bằng việc truyền vào 2 tham số country & population.

/* function percentageOfWorld1(population) {
  // describePopulation: là % dân số
  const describePopulation =(population/7900000000)*100;
  return `Trung Quốc có ${population} người, chiếm ${describePopulation} % dân số thế giới.`;
 }
 //const china = percentageOfWorld1(1441000000);
 //Đây là cách dùng hàm consolo.log() tiết kiệm code hay   hay...
 console.log(percentageOfWorld1(1441000000)); */

//truyền vào 2 tham số( country & population) hướng làm 1.

 /* function percentageOfWorld1(country, population) {
  // describePopulation: là % dân số
  const describePopulation =(population/7900000000)*100;
  return `${country} có ${population} người, chiếm ${describePopulation} % dân số thế giới.`;
 }
 console.log(percentageOfWorld1('Trung Quốc',1441000000 ));  */

// khi truyền vào 2 tham số (country & population) hướng làm 2.

/* function percentageOfWorld1 (country, population){
  const phantramdanso = (population/7900000000)*100;
  return ` ${country} có ${population} người, chiếm ${phantramdanso} % dân số thế giới.`;
}
const trungquoc = percentageOfWorld1('Trung Quốc', 1441000000 );
console.log(trungquoc); */

//17.2.2- Để tính phần trăm, chia giá trị 'population' đã biết cho 7900000000 rồi nhân với 100.
// xem 17.2.1 ở trên.


//17.2.3-Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.

/*const vietnam = percentageOfWorld1('Viet Nam', 97000000 );
console.log(vietnam);

const usa = percentageOfWorld1('USA', 300000000 );
console.log(usa);

const nhatban = percentageOfWorld1('Nhat Ban', 120000000 );
console.log(nhatban); */

//17.2.4-Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld2' và cũng gọi nó với 3 dân số theo quốc gia 
//(có thể có cùng số dân).

/* const datnuoc_danso = function percentageOfWorld2 (country, population) {
  const phantramdanso = (population/7900000000)*100;
  return ` ${country} có ${population} người, chiếm ${phantramdanso} % dân số thế giới.`;
}

const viet_nam = datnuoc_danso('Viet Nam', 120000000 );
console.log(viet_nam);

const u_s_a = datnuoc_danso('USA', 300000000 );
console.log(u_s_a);

const nhat_ban = datnuoc_danso('Nhat Ban', 120000000 );
console.log(nhat_ban); */
 

//17.3 Hàm mũi tên
//Thực hiện lại bài lab 17.2, nhưng lần này hãy tạo một hàm mũi tên là 'percentageOfWorld3'.

/*const percentageOfWorld3 = (country, population) => {

  const tylephantramdanso = (population/7900000000)*100;

  return ` ${country} có ${population} người, chiếm ${tylephantramdanso} % dân số thế giới.`;

}
const viet_nam_ = percentageOfWorld3('Viet Nam', 120000000 );
console.log(viet_nam_);

const u_s_a_ = percentageOfWorld3('USA', 300000000 );
console.log(u_s_a_);

const nhat_ban_ = percentageOfWorld3('Nhat Ban', 120000000 );
console.log(nhat_ban_); */



// Hàm mũi tên không cần sử dụng return và dấu ngoặc nhọn khi thân hàm 1 dòng, nó không có từ khóa this (tìm hiểu sau).???? chưa hiểu

//17.4 Hàm trong hàm
//17.4.1-Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất. 
//Hàm này nhận hai đối số là 'country' và 'population', và trả về string như sau: 
//'China has 1441 million people, which is about 18.2% of the world'.
/*const infoCountry = function (country, population) {
  const tinhphantramdanso = (population/7900000000)*100;
  return ` ${country} has ${population} million peopele, which is about ${tinhphantramdanso} % of the world.`;
  
}
const infoChina = infoCountry ( 'China', 1441000000);
console.log(infoChina); */
//17.4.2-Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.

// 'percentageOfWorld1' đã tạo trước đó trong đoạn /* */ dưới đây

/* function percentageOfWorld1(population) {
  // describePopulation: là % dân số
  const describePopulation =(population/7900000000)*100;
  return `Trung Quốc có ${population} người, chiếm ${describePopulation} % dân số thế giới.`;
 }
 const china = percentageOfWorld1(1441000000);
 console.log(china);  */

/* function infoCountry(country, population) {
  // gọi function percentageOfWorld1(population) ở (17.2.1) phía trên vào để cung cấp cách tính % dân số (describePopulation)
  const describePopulation = percentageOfWorld1 (population);
  const chitiet = `${country} has ${population} million peopele, which is about ${describePopulation} % of the world.`;
  return chitiet;
  
}
console.log(infoCountry('China', 1441000000 )); */


//17.4.3-Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ.

/* console.log(infoCountry('USA', 300000000 ));
console.log(infoCountry('Japan', 120000000 ));
console.log(infoCountry('Viet Nam', 97000000 )); */

//lab 17.5 Giới thiệu về Array
//17.5.1-Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. 
//Bạn có thể sử dụng các giá trị đã dùng trước đó. Lưu array này vào một biến là 'populations'.
//const population = [1441000000, 300000000, 120000000, 97000000]

//17.5.2-In ra console xem liệu array có 4 phần tử hay không (true hoặc false).

/* console.log( population.length);

if (population.length == 4) {
  console.log(true);
}
else {
   console.log(false);
} */

//17.5.3-Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. 
//Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó 
//( vì tên hàm có nhiều thay đổi nên hãy xem tên hàm ở tại lab này) để tính toán 4 giá trị phần trăm.
/* const percentageOfWorld1 = function (population) {
  return (population/7900000000)*100;
}
const percentages1 =  percentageOfWorld1(population[0]);
const percentages2 =  percentageOfWorld1(population[1]);
const percentages3 =  percentageOfWorld1(population[2]);
const percentages4 =  percentageOfWorld1(population[population.length-1]);
//console.log(percentages1,percentages2,percentages3,percentages4);
const percentages = [ percentages1, percentages2, percentages3, percentages4];
console.log( percentages);
*/

//17.6 Các phương thức cơ bản của array
//17.6.1- Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. 
//Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.

const neighbours = ['Trung Quốc', 'Lào', 'Campuchia'];
console.log(neighbours);


//17.6.2- Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. 
//Vậy hãy thêm nó vào cuối array 'neighbours'.
const newLength = neighbours.push('Utopia');
console.log(newLength);

//17.6.3- Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
const popped = neighbours.pop('Utopia');
console.log(popped);

//17.6.4- Nếu array 'neighbours' không chứa nước 'Germany', 
//hãy in ra console rằng: 'Probably not a central European country :D'.

if(neighbours.includes('Germany')) {
  console.log('Well come to Germany');
}
else {
  console.log('Probably not a central European country :D');
}

//17.6.5- Thay đổi tên của một trong các nước láng giềng của bạn. 
//Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours',
// rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. 
//Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.

const index = neighbours.indexOf('Sweden');
console.log(index);

const index1 = neighbours.indexOf('Trung Quốc');
console.log(index1);
neighbours[0] = " Russia";
console.log(neighbours) ;

//17.7 Bài tổng hợp.
//17.7.1- Đội nào chiến thắng? (phần 2)

const calcAverage = (diem1, diem2, diem3) => (diem1+diem2+diem3)/3;
console.log(calcAverage(1,2,3));

let scoreDolphins = calcAverage(44, 23, 71);

let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(` Dolhins win ( ${avgDolhins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas >= 2 * avgDolhins) {
    console.log(` Koalas win ( ${avgKoalas} vs. ${avgDolhins})`);

  }
  else {
    console.log ('không có đội thắng');
  } 

// khi sử dụng return---không hợp lý?, khi nào bắt buộc phải dùng return?
  /*if (avgDolhins >= 2 * avgKoalas) {
   const ketqua = ` Dolhins win ( ${avgDolhins} vs. ${avgKoalas})`;
   return ketqua;
  }
  else if (avgKoalas >= 2 * avgDolhins) {
    const ketqua = ` Koalas win ( ${avgKoalas} vs. ${avgDolhins})`;
    return ketqua;

  }
  else {
    const ketqua = `không có đội thắng `;
    return ketqua;
  } */

}

 checkWinner ( scoreDolphins,scoreKoalas);

 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreKoalas);
 checkWinner ( scoreDolphins,scoreKoalas);


 

 //Lab 17.7.2. Xây dựng Tip calculator (phần 2)

 //const calcTip = bill => bill >= 50 && bill<= 300? bill*0.15 : bill*0.2; 

 
 const calcTip = function (bills) {
  return bills >= 50 && bills<= 300? bills*0.15 : bills*0.2; 
 }
//const tips = calcTip(100);
 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const totals = [bills[0]+ tips[0], bills[1]+ tips[1], bills[2]+ tips[2]];
 console.log(bills, tips, totals);
  