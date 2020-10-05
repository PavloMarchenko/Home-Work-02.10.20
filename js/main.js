// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

// let textInSpan = document.getElementById('someText');
// let input = document.getElementById("input");

// window.addEventListener("keydown",(event) => {
//   if (event.altKey && event.which === 65) {
//     textInSpan.style.display = "none";
//     input.style.display = "block";
//   }
//   else (event.shiftKey && event.which === 83) {
//     textInSpan.style.display = "block";
//     input.style.display = "none";
//     textInSpan.innerText = input.value;
//   }
// });


// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.
// let isMobile = window.innerWidth < 600;

// window.addEventListener("resize", (event) => {
//   if (event.target.innerWidth < 600 && !isMobile) {
//     isMobile = true;
//     console.log("ми використовуємо мобільну версію");
//   } else if(event.target.innerWidth > 600 && isMobile) {
//     isMobile = false;
//     console.log("ми використовуємо десктоп версію");
//   }
// })




// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

// let input2 = document.getElementById("input2");
// input2.addEventListener("blur", (event) => {
//   console.log(event.target.value);
// })




// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.
// let modal = document.getElementById("modal");

// window.addEventListener("keydown", (event) => {
//   if (event.altKey && event.which === 67) {
//     modal.classList.add("hidden");
//   }
//   else (event.altKey && event.which === 79) {
//     modal.classList.remove("hidden");
//   }
// });




// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.

// let modal = document.getElementById("modal");
// let btnAlert = document.getElementById("btnAlert");
// let btnClose = document.getElementById("btnClose");

// btnAlert.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// })

// btnClose.addEventListener("click", () => {
//   modal.classList.add("hidden");
// })