/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var languageBtn = document.querySelector("#languageBtn");

languageBtn.addEventListener("click", function () {

        if (languageBtn.dataset.language === "en") {
                languageBtn.dataset.language = "pl";

                languageBtn.classList.toggle("flagEn");

                document.querySelector("h1").innerHTML = "OPTICAL COMMUNICATION ENGINEERING";

                document.querySelector("#pSectionOne").innerHTML = "Almost 20 years of experience in optical transmission - DWDM/OTN/SDH networks managing, commissioning, provisioning, new on-site installations, tuning, roll-outs, technical support and troubleshooting.";

                document.querySelector("#pSectionTwo").innerHTML = 'I am not afraid of confronting problems and have skills of solving them thanks to my professional competence. I am responsible and can apply technical knowledge in "real-world" production environments. I have ability to work as part of a team and perform job functions to standards especially under pressure of tense situations.';

                document.querySelector("#pSectionThree").innerHTML = "Specialities: maintenance, managing and troubleshooting in existing DWDM/OTN/SDH core networks. Development, commissioning, roll-out and re-building DWDM/OTN/SDH networks and equipment.";
        } else {
                languageBtn.dataset.language = "en";

                languageBtn.classList.toggle("flagEn");

                document.querySelector("h1").innerHTML = "INŻYNIERIA ŁĄCZNOŚCI OPTYCZNEJ";

                document.querySelector("#pSectionOne").innerHTML = "Prawie 20 lat doświadczenia w transmisji optycznej - zarządzanie sieciami DWDM / OTN / SDH, uruchamianie, udostępnianie, nowe instalacje na miejscu, tuning, roll-out, wsparcie techniczne i rozwiązywanie problemów.";

                document.querySelector("#pSectionTwo").innerHTML = 'Nie boję się stawiać czoła problemom, a dzięki kompetencjom zawodowym posiadam umiejętności ich rozwiązywania. Jestem odpowiedzialny i potrafię stosować wiedzę techniczną w „rzeczywistych” środowiskach produkcyjnych. Potrafię pracować w zespole i wykonywać zadania zgodnie ze standardami, szczególnie pod presją napiętych sytuacji.';

                document.querySelector("#pSectionThree").innerHTML = "Specjalizacje: konserwacja, zarządzanie i rozwiązywanie problemów w istniejących sieciach rdzeniowych DWDM / OTN / SDH. Rozwój, uruchomienie, uruchomienie i przebudowa sieci i urządzeń DWDM / OTN / SDH.";
        }
});

/***/ })
/******/ ]);