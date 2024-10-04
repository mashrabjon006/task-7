// ### 1. Tasodifiy son generatsiya qilish
// **Masala**: 1 dan 100 gacha bo‘lgan oraliqda tasodifiy butun sonni chiqaradigan dastur tuzing. 
//Har safar dasturni ishlatganingizda yangi tasodifiy son chiqsin.

// var a = Math.random()*100
// console.log(a)

// ### 2. Sonning kvadrat ildizini topish
// **Masala**: Foydalanuvchi kiritgan sonning kvadrat ildizini hisoblaydigan dastur yozing.
// Agar foydalanuvchi manfiy son kiritsa, unga "Musbat son kiriting" degan xabarni chiqaring.

// ---

// ### 3. Eng katta va eng kichik sonlarni aniqlash
// **Masala**: Foydalanuvchi tomonidan kiritilgan 5 ta sondan eng kattasi va eng kichigini aniqlaydigan dastur yozing. 


// var sum1
// var sum2
// for (var i = 1; i<=5;i++){
//     var b = prompt()
//     if(b < 5){
//         sum1 =b
//     }else if (b>5){
//         sum2 = b
//     }
// }console.log(sum1 + 'kichik son')
// console.log(sum2 + 'kotta son')

// ### 4. Sonni yuqoriga yoki pastga yaxlitlash
// **Masala**: Foydalanuvchi tomonidan kiritilgan haqiqiy sonni yuqoriga yaxlitlaydigan va
// pastga yaxlitlaydigan dastur yozing. Har ikkala natijani ham foydalanuvchiga ko‘rsating.

// ---

// ### 5. Aylana uzunligini hisoblash
// **Masala**: Foydalanuvchi kiritgan radius bo‘yicha aylananing uzunligini hisoblaydigan dastur tuzing.
// (Aylananing uzunligini hisoblash formulasi:
// \( C = 2\pi r \), bu yerda \( r \) aylananing radiusi, \( \pi \) esa 3.1415).

// Ternary operator

// ### 1. Musbat yoki manfiy sonni aniqlash
// **Masala**: Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini ternary operator yordamida aniqlang.
// Musbat bo'lsa "Musbat son", manfiy bo'lsa "Manfiy son" deb chiqaring.

// var a = +prompt()

// var natija = a > 0 ? console.log('musbat son') : console.log('manfiy son')

// ### 2. Yoshi bo'yicha ruxsat berish
// **Masala**: Foydalanuvchi o'z yoshini kiritsin. Agar foydalanuvchi 18 yoshdan katta yoki teng bo'lsa,
// unga "Ruxsat etilgan" degan xabarni ko‘rsating, aks holda "Ruxsat etilmagan" deb chiqaring. 
//Ternary operator yordamida bu shartni bajaring.

// var yosh = +prompt()

// var natija = yosh >= 18 ? "ruxat" : "ruxsat emas"
// console.log(natija)

// ### 3. Son juft yoki toq ekanligini aniqlash
// **Masala**: Foydalanuvchi kiritgan son juftmi yoki toq ekanligini ternary operator yordamida aniqlang va 
//natijani "Juft son" yoki "Toq son" deb chiqaring.

// var  a = +prompt()

// var res = a % 2 == 0 ? console.log('juft') : console.log('toq')

// for sikl operator

// ### 1. Juft va toq sonlarni aniqlash
// **Masala**: 1 dan 20 gacha bo‘lgan sonlar ichidan faqat juft sonlarni chop eting.
// Juftlikni aniqlash uchun mantiqiy `&&` operatoridan foydalaning.

// for (var i = 1; i <= 20; i++){
//     if( i > 0 && i % 2 == 0){
//         console.log(i)
//     }
// }

// ### 2. Faqat musbat sonlarni qo'shish
// **Masala**: Foydalanuvchi 10 ta son kiritsin. Sonlar ichidan faqat musbat bo‘lganlarini yig'indisini hisoblang 
//(`for` va mantiqiy `>` operatorlaridan foydalaning).

// var sum = 0

// for (var i = 1; i <= 10; i++){
//     var a = prompt()
//     if( a % 2 == 1){
//         sum = a+a
//     }
// }console.log(sum)

// ### 3. Belgilangan oraliqdagi sonlarni chop etish
// **Masala**: 1 dan 100 gacha bo‘lgan sonlar ichidan faqat 30 va 50 orasidagi sonlarni chop eting 
//(`for` tsikli va `&&` operatoridan foydalaning).

// for (var i = 1; i <= 100; i++){
//     if (i >= 30 && i <= 50){
//         console.log(i)
//     }
// }

// ### 4. Musbat yoki manfiy sonlarni sanash
// **Masala**: Foydalanuvchi 15 ta son kiritsin. `for` tsikli va mantiqiy `>=` yoki `<=` operatorlaridan foydalanib, 
//nechta musbat va nechta manfiy son kiritinganini aniqlang.

// var sum = 0
// var sum2 = 0
//     for(var i = 1; i<=15; i++){
//         var a = +prompt()
//         if(a > 0 ){
//             sum ++
//         }else if( a < 0){
//             sum2 ++
//         }
//     } console.log(sum + + ' musbat ')
//     console.log(sum2 + ' manfiy ')

// ### 5. Bir xil raqamlarni sanash
// **Masala**: 10 ta sonli arrayda 5 yoki undan kattaroq bo‘lgan sonlar necha marta uchrashini hisoblang. 
//`for` tsikli va `>=` mantiqiy operatoridan foydalaning.

// var ary = [1,2,3,4,5,65,5,45,5,4]

// var sum = 0

// for (var i = 0; i <= ary.length; i++){
//     if (ary[i] >= 5){
//         sum++
//     }
// }
// console.log(sum)

// ### 6. Faqat toq sonlar yig'indisi
// **Masala**: 1 dan 50 gacha bo‘lgan sonlar ichidan faqat toq sonlarning yig‘indisini hisoblang
// (`for` tsikli va `%` mantiqiy operatoridan foydalaning).

// var sum

// for(var i = 1; i <= 50; i++){
//     if (i % 2 == 1){
//         sum = i+i
//     }
// }console.log(sum)

// ### 7. Foydalanuvchi yoshiga qarab xabar chiqaring
// **Masala**: Foydalanuvchi 5 ta odamning yoshini kiritsin. `for` tsikli va mantiqiy `>=` operatoridan foydalanib,
// agar foydalanuvchi 18 yoshdan katta bo'lsa, "Voyaga yetgan" degan xabar chiqaring, 
//aks holda "Voyaga yetmagan" degan xabar chiqaring.

//  var sum

//  for(var i = 1; i <= 5; i++){
//     var a = +prompt()
//     if (a >= 18 ){
//         sum = 'voyaga yetgan'
//     }else{
//         sum = 'voyaga yetmagn'
//     }
// }console.log(sum)

// ### 8. Juft sonlarni sanash
// **Masala**: 1 dan 100 gacha bo‘lgan sonlardan nechta juft son borligini hisoblang 
//(`for` tsikli va `%` operatoridan foydalaning).

// var sum = 0

// for (var i = 1; i <= 100; i++){
//     if (i % 2 == 0){
//         sum++
//     }
// }console.log(sum)

// ### 9. Berilgan sonlar orasida 5 va 10 o'rtasida bo'lganlarini sanash
// **Masala**: 10 ta tasodifiy son kiritilsin. `for` tsikli va `&&` mantiqiy operatoridan foydalanib, 
//nechta son 5 va 10 orasida ekanligini aniqlang.

// var count = 0

// for (var i = 1; i <= 10; i++) {
//     var number = +prompt("")
//     if (number > 5 && number < 10) {
//         count++; 
//     }
// }
// console.log(count)


// ### 10. Sonlarning faqat musbat bo'lganlarini ko'rsating
// **Masala**: Foydalanuvchi 10 ta son kiritadi. `for` tsikli va `>` mantiqiy operatoridan foydalanib, 
//faqat musbat sonlarni chop eting.

// for (var i = 1; i <= 10; i++){
//     var a = prompt()
//     if (a < 0){
//         console.log(a)
//     }
// }

// ### 11. Berilgan sonlar orasida juft yoki manfiy bo'lganlarini sanash
// **Masala**: Foydalanuvchi kiritgan 15 ta son orasida juft yoki manfiy bo‘lgan sonlar sonini hisoblang 
//(`for` tsikli va `||` mantiqiy operatoridan foydalaning).

// var count = 0

// for (var i = 1; i <= 15; i++) {
//     var number = +prompt("")
//     if (number % 2 == 0 || number < 0) {
//         count++;
//     }
// }

// console.log(count )


// ### 12. 3 ga bo'linadigan sonlarni chop etish
// **Masala**: 1 dan 50 gacha bo‘lgan sonlar orasida faqat 3 ga bo‘linadigan sonlarni chop eting 
//(`for` tsikli va `%` operatoridan foydalaning).

// for (var i = 1; i <=50; i++){
//     if (i % 3 == 0){
//         console.log(i)
//     }
// }

// ### 14. Berilgan raqamlar ichida faqat katta sonlarni ko'rsating
// **Masala**: Foydalanuvchi 10 ta raqam kiritsin. `for` tsikli va `>=` mantiqiy operatoridan foydalanib,
// faqat 50 dan katta sonlarni chop eting.

// for (var i = 1; i <= 10; i++){
//     var a = +prompt()
//     if (a >= 50){
//         console.log(a )
//     }
// }

// ### 15. Foydalanuvchi tomonidan kiritilgan sonlar orasida 0 ni topish
// **Masala**: Foydalanuvchi 10 ta son kiritsin. `for` tsikli va `===` mantiqiy operatoridan foydalanib, 
//kiritilgan sonlar orasida 0 bor yoki yo‘qligini aniqlang. Agar bo'lsa, "0 mavjud" deb chop eting.

// for (var i = 1; i <= 10; i++){
//     var a = +prompt()
//     if (a == 0){
//         console.log(a + ' mavjud')
//     }else{
//         console.log( a+ ' mavjud emas')
//     }
// }