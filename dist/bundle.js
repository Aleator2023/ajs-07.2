/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function formatPhoneNumber(phoneNumber) {\r\n    // Удаляем все нецифровые символы из строки\r\n    let digits = phoneNumber.replace(/\\D/g, '');\r\n  \r\n    // Проверяем первую цифру и корректируем формат\r\n    if (digits.startsWith('8') && digits.length === 11) {\r\n      digits = '7' + digits.substring(1);\r\n    }\r\n  \r\n    // Проверяем длину номера, чтобы определить, нужно ли добавлять код страны\r\n    if (digits.length === 10) {\r\n      digits = '7' + digits;\r\n    }\r\n  \r\n    return '+' + digits;\r\n  }\r\n  \n\n//# sourceURL=webpack://ajs-07.2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;