/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Window.js":
/*!***********************!*\
  !*** ./src/Window.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sectionPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sectionPosition */ \"./src/sectionPosition.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Window = /*#__PURE__*/function () {\n  function Window(header, aboutMe) {\n    _classCallCheck(this, Window);\n\n    this.header = header;\n    this.aboutMe = aboutMe;\n    this.sectionPositions = undefined;\n    this.setSectionPositions();\n    this.state = {\n      scrollUnderTop: false\n    };\n    this.switchScrollUnderTop = this.switchScrollUnderTop.bind(this);\n    this.run = this.run.bind(this);\n    this.switchHeaderActiveItem = this.switchHeaderActiveItem.bind(this);\n    this.setSectionPositions = this.setSectionPositions.bind(this);\n  }\n\n  _createClass(Window, [{\n    key: \"run\",\n    value: function run() {\n      window.addEventListener('scroll', this.switchScrollUnderTop);\n      window.addEventListener('scroll', this.switchHeaderActiveItem);\n      window.addEventListener('resize', this.setSectionPositions);\n    }\n  }, {\n    key: \"switchScrollUnderTop\",\n    value: function switchScrollUnderTop() {\n      var fixedMenuControlPosition = document.querySelector('.banner-content--static-text--hello').getBoundingClientRect().top;\n      var skillsControlPosition = this.aboutMe.element.getBoundingClientRect().top - window.outerHeight + this.aboutMe.element.getBoundingClientRect().height;\n\n      if (fixedMenuControlPosition < 0 && !this.state.scrollUnderTop) {\n        this.state.scrollUnderTop = true;\n        this.header.holdElement();\n      } else if (fixedMenuControlPosition >= 0 && this.state.scrollUnderTop) {\n        this.state.scrollUnderTop = false;\n        this.header.letElement();\n      }\n\n      if (skillsControlPosition + 200 < 0 && !this.state.skillsIsAnimated) {\n        this.state.skillsIsAnimated = true;\n        this.aboutMe.animateSkills();\n      }\n    }\n  }, {\n    key: \"switchHeaderActiveItem\",\n    value: function switchHeaderActiveItem() {\n      var currentActiveItem = this.header.element.querySelector('.header-menu-item--active');\n\n      if (currentActiveItem) {\n        currentActiveItem.classList.remove('header-menu-item--active');\n      }\n\n      if (window.scrollY < this.sectionPositions.about) {\n        this.header.items.home.classList.add('header-menu-item--active');\n      }\n\n      if (window.scrollY >= this.sectionPositions.about && window.scrollY < this.sectionPositions.education) {\n        this.header.items.about.classList.add('header-menu-item--active');\n      }\n\n      if (window.scrollY >= this.sectionPositions.education && window.scrollY < this.sectionPositions.projects) {\n        this.header.items.education.classList.add('header-menu-item--active');\n      }\n\n      if (window.scrollY >= this.sectionPositions.projects && window.scrollY < this.sectionPositions.contact) {\n        this.header.items.projects.classList.add('header-menu-item--active');\n      }\n\n      if (window.scrollY >= this.sectionPositions.contact) {\n        this.header.items.contact.classList.add('header-menu-item--active');\n      }\n    }\n  }, {\n    key: \"setSectionPositions\",\n    value: function setSectionPositions() {\n      this.sectionPositions = {\n        about: (0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('about-me'),\n        education: (0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('education'),\n        projects: (0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('pet-projects'),\n        contact: (0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('contact')\n      };\n    }\n  }]);\n\n  return Window;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);\n\n//# sourceURL=webpack://my-website/./src/Window.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_banner_widget_banner_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/banner.widget/banner.widget */ \"./src/widgets/banner.widget/banner.widget.js\");\n/* harmony import */ var _widgets_about_me_widget_about_me_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/about-me.widget/about-me.widget */ \"./src/widgets/about-me.widget/about-me.widget.js\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Window */ \"./src/Window.js\");\n/* harmony import */ var _widgets_header_widget_header_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/header.widget/header.widget */ \"./src/widgets/header.widget/header.widget.js\");\n/* harmony import */ var _widgets_about_me_widget_img_dmitrii_votchitsev_2215405451567359885_0_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/about-me.widget/img/dmitrii.votchitsev_2215405451567359885_0.jpg */ \"./src/widgets/about-me.widget/img/dmitrii.votchitsev_2215405451567359885_0.jpg\");\n/* harmony import */ var _widgets_pet_projects_widget_pet_projects_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/pet-projects.widget/pet-projects.widget */ \"./src/widgets/pet-projects.widget/pet-projects.widget.js\");\n\n\n\n\n\n\n\nfunction initElements() {\n  document.querySelector('.about-me--info--photo').src = _widgets_about_me_widget_img_dmitrii_votchitsev_2215405451567359885_0_jpg__WEBPACK_IMPORTED_MODULE_4__;\n  var header = new _widgets_header_widget_header_widget__WEBPACK_IMPORTED_MODULE_3__[\"default\"](document.querySelector('.header'));\n  var banner = new _widgets_banner_widget_banner_widget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('.banner'));\n  banner.run();\n  var aboutMe = new _widgets_about_me_widget_about_me_widget__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('.about-me'));\n  aboutMe.run();\n  var petProjects = new _widgets_pet_projects_widget_pet_projects_widget__WEBPACK_IMPORTED_MODULE_5__[\"default\"](document.querySelector('.pet-projects--container'));\n  petProjects.run();\n  var appWindow = new _Window__WEBPACK_IMPORTED_MODULE_2__[\"default\"](header, aboutMe, petProjects);\n  appWindow.run();\n}\n\ndocument.addEventListener('DOMContentLoaded', initElements);\n\n//# sourceURL=webpack://my-website/./src/app.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = {\n  aboutMeInfoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo',\n  skills: [{\n    name: 'JavaScript',\n    percent: 36\n  }, {\n    name: 'HTML',\n    percent: 31\n  }, {\n    name: 'Python',\n    percent: 23\n  }, {\n    name: 'CSS',\n    percent: 9\n  }, {\n    name: 'TypeScript',\n    percent: 1\n  }, {\n    name: 'Other',\n    percent: 1\n  }]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://my-website/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _widgets_header_widget_header_widget_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/header.widget/header.widget.css */ \"./src/widgets/header.widget/header.widget.css\");\n/* harmony import */ var _widgets_banner_widget_banner_widget_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/banner.widget/banner.widget.css */ \"./src/widgets/banner.widget/banner.widget.css\");\n/* harmony import */ var _widgets_about_me_widget_about_me_widget_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/about-me.widget/about-me.widget.css */ \"./src/widgets/about-me.widget/about-me.widget.css\");\n/* harmony import */ var _widgets_education_widget_education_widget_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/education.widget/education.widget.css */ \"./src/widgets/education.widget/education.widget.css\");\n/* harmony import */ var _widgets_pet_projects_widget_pet_projects_widget_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/pet-projects.widget/pet-projects.widget.css */ \"./src/widgets/pet-projects.widget/pet-projects.widget.css\");\n/* harmony import */ var _widgets_contact_widget_contact_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/contact.widget/contact.widget.css */ \"./src/widgets/contact.widget/contact.widget.css\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-website/./src/index.js?");

/***/ }),

/***/ "./src/sectionPosition.js":
/*!********************************!*\
  !*** ./src/sectionPosition.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getSectionPosition(selector) {\n  var element = document.querySelector(\".\".concat(selector));\n  return element.getBoundingClientRect().y + window.scrollY - window.innerHeight * 0.2;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSectionPosition);\n\n//# sourceURL=webpack://my-website/./src/sectionPosition.js?");

/***/ }),

/***/ "./src/widgets/about-me.widget/about-me.widget.js":
/*!********************************************************!*\
  !*** ./src/widgets/about-me.widget/about-me.widget.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nfunction animateSkill(skill, percent) {\n  var width = 0;\n  var sk = skill;\n  var interval = setInterval(function () {\n    sk.style.width = \"\".concat(width, \"%\");\n    width += 1;\n\n    if (width === percent) {\n      clearInterval(interval);\n    }\n  }, 10);\n}\n\nvar AboutMe = /*#__PURE__*/function () {\n  function AboutMe(element) {\n    _classCallCheck(this, AboutMe);\n\n    this.element = element;\n    this.textElement = element.querySelector('.about-me--info--text--content');\n    this.text = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aboutMeInfoText;\n    this.skills = element.querySelectorAll('.skill-line');\n    this.animateSkills = this.animateSkills.bind(this);\n  }\n\n  _createClass(AboutMe, [{\n    key: \"run\",\n    value: function run() {\n      this.insertText();\n    }\n  }, {\n    key: \"insertText\",\n    value: function insertText() {\n      this.textElement.textContent = this.text;\n    }\n  }, {\n    key: \"animateSkills\",\n    value: function animateSkills() {\n      var _this = this;\n\n      var _loop = function _loop(i) {\n        var skillName = _this.skills[i].parentNode.parentNode.querySelector('.skill-title').innerHTML;\n\n        var _config$skills$find = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].skills.find(function (el) {\n          if (el.name === skillName) {\n            return el.percent;\n          }\n\n          return undefined;\n        }),\n            percent = _config$skills$find.percent;\n\n        animateSkill(_this.skills[i], percent);\n      };\n\n      for (var i = 0; i < this.skills.length; i += 1) {\n        _loop(i);\n      }\n    }\n  }]);\n\n  return AboutMe;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutMe);\n\n//# sourceURL=webpack://my-website/./src/widgets/about-me.widget/about-me.widget.js?");

/***/ }),

/***/ "./src/widgets/banner.widget/banner.widget.js":
/*!****************************************************!*\
  !*** ./src/widgets/banner.widget/banner.widget.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Banner = /*#__PURE__*/function () {\n  function Banner(element) {\n    _classCallCheck(this, Banner);\n\n    this.element = element;\n    this.cursor = element.querySelector('.banner-content-cursor');\n    this.dynamicTextElement = element.querySelector('.banner-content-text');\n    this.text = ['fullstack developer', 'on Python', 'and JavaScript'];\n    this.textIndex = 0;\n    this.letterIndex = 0;\n    this.status = 'write';\n    this.run = this.run.bind(this);\n    this.printText = this.printText.bind(this);\n    this.deleteText = this.deleteText.bind(this);\n  }\n\n  _createClass(Banner, [{\n    key: \"run\",\n    value: function run() {\n      var _this = this;\n\n      this.interval = setInterval(function () {\n        if (_this.textIndex === _this.text.length) {\n          _this.textIndex = 0;\n        }\n\n        if (_this.letterIndex === _this.text[_this.textIndex].length) {\n          _this.status = 'delete';\n        }\n\n        if (_this.status === 'write') {\n          _this.printText();\n        }\n\n        if (_this.status === 'delete') {\n          _this.deleteText();\n        }\n      }, 100);\n    }\n  }, {\n    key: \"printText\",\n    value: function printText() {\n      this.dynamicTextElement.textContent += this.text[this.textIndex][this.letterIndex];\n      this.letterIndex += 1;\n\n      if (this.letterIndex === this.text[this.textIndex].length) {\n        clearInterval(this.interval);\n        setTimeout(this.run, 1000);\n      }\n    }\n  }, {\n    key: \"deleteText\",\n    value: function deleteText() {\n      this.letterIndex -= 1;\n      this.dynamicTextElement.textContent = this.text[this.textIndex].slice(0, this.letterIndex);\n\n      if (this.letterIndex === 0) {\n        this.status = 'write';\n        this.textIndex += 1;\n        clearInterval(this.interval);\n        setTimeout(this.run, 1000);\n      }\n    }\n  }]);\n\n  return Banner;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);\n\n//# sourceURL=webpack://my-website/./src/widgets/banner.widget/banner.widget.js?");

/***/ }),

/***/ "./src/widgets/header.widget/header.widget.js":
/*!****************************************************!*\
  !*** ./src/widgets/header.widget/header.widget.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _softScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./softScroll */ \"./src/widgets/header.widget/softScroll.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Header = /*#__PURE__*/function () {\n  function Header(element) {\n    _classCallCheck(this, Header);\n\n    this.element = element;\n    this.toggle = element.querySelector('.header-menu-toggle');\n    this.menuContainer = element.querySelector('.header-menu-container');\n    this.state = {\n      dropdownMenu: false\n    };\n    this.holdElement = this.holdElement.bind(this);\n    this.letElement = this.letElement.bind(this);\n    this.showDropdownMenu = this.showDropdownMenu.bind(this);\n    this.eventRoute = this.eventRoute.bind(this);\n    this.items = {\n      home: this.menuContainer.querySelector('.header-menu-item--home'),\n      about: this.menuContainer.querySelector('.header-menu-item--about'),\n      education: this.menuContainer.querySelector('.header-menu-item--education'),\n      projects: this.menuContainer.querySelector('.header-menu-item--pet-projects'),\n      contact: this.menuContainer.querySelector('.header-menu-item--contact')\n    };\n    document.addEventListener('click', this.eventRoute);\n  }\n\n  _createClass(Header, [{\n    key: \"eventRoute\",\n    value: function eventRoute(e) {\n      if (e.target.classList.contains('header-menu-toggle')) {\n        this.showDropdownMenu();\n      }\n\n      if (e.target.classList.contains('header-menu-item')) {\n        (0,_softScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e);\n        this.showDropdownMenu();\n      }\n\n      if (e.target.classList.contains('header-logo')) {\n        (0,_softScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e);\n      }\n    }\n  }, {\n    key: \"holdElement\",\n    value: function holdElement() {\n      this.element.classList.add('header-fixed');\n      this.toggle.classList.add('toggle-black');\n    }\n  }, {\n    key: \"letElement\",\n    value: function letElement() {\n      this.element.classList.remove('header-fixed');\n      this.toggle.classList.remove('toggle-black');\n    }\n  }, {\n    key: \"showDropdownMenu\",\n    value: function showDropdownMenu() {\n      this.menuContainer.classList.toggle('header-menu-container--hidden');\n\n      if (this.state.dropdownMenu) {\n        this.state.dropdownMenu = false;\n        return;\n      }\n\n      this.state.dropdownMenu = true;\n    }\n  }]);\n\n  return Header;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://my-website/./src/widgets/header.widget/header.widget.js?");

/***/ }),

/***/ "./src/widgets/header.widget/softScroll.js":
/*!*************************************************!*\
  !*** ./src/widgets/header.widget/softScroll.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollToSection)\n/* harmony export */ });\n/* harmony import */ var _sectionPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sectionPosition */ \"./src/sectionPosition.js\");\n\n\nfunction softScrollTo(position) {\n  if (window.scrollY - position < 20 && window.scrollY - position > 0 || window.scrollY - position > -20 && window.scrollY - position < 0) {\n    return;\n  }\n\n  if (window.scrollY < position) {\n    var interval = setInterval(function () {\n      window.scrollBy(0, 20);\n\n      if (window.scrollY > position) {\n        clearInterval(interval);\n      }\n    }, 1);\n  }\n\n  if (window.scrollY > position) {\n    var _interval = setInterval(function () {\n      window.scrollBy(0, -20);\n\n      if (window.scrollY < position + 19) {\n        clearInterval(_interval);\n      }\n    }, 1);\n  }\n}\n\nfunction scrollToSection(e) {\n  if (e.target.classList.contains('header-menu-item--home') || e.target.classList.contains('header-logo')) {\n    softScrollTo(0);\n  }\n\n  if (e.target.classList.contains('header-menu-item--about')) {\n    softScrollTo((0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('about-me'));\n  }\n\n  if (e.target.classList.contains('header-menu-item--education')) {\n    softScrollTo((0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('education'));\n  }\n\n  if (e.target.classList.contains('header-menu-item--pet-projects')) {\n    softScrollTo((0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('pet-projects'));\n  }\n\n  if (e.target.classList.contains('header-menu-item--contact')) {\n    softScrollTo((0,_sectionPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('contact'));\n  }\n}\n\n//# sourceURL=webpack://my-website/./src/widgets/header.widget/softScroll.js?");

/***/ }),

/***/ "./src/widgets/pet-projects.widget/pet-projects.widget.js":
/*!****************************************************************!*\
  !*** ./src/widgets/pet-projects.widget/pet-projects.widget.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction blurProject(e) {\n  e.target.querySelector('.pet-project--stack-container').classList.remove('focus');\n  e.target.querySelector('.pet-project--link').classList.remove('show-link');\n  e.target.querySelector('.opacity').classList.remove('opacity-active');\n  e.target.querySelector('.pet-project--title').classList.remove('pet-project--title--active');\n}\n\nfunction focusProject(e) {\n  e.target.querySelector('.pet-project--stack-container').classList.add('focus');\n  e.target.querySelector('.pet-project--link').classList.add('show-link');\n  e.target.querySelector('.opacity').classList.add('opacity-active');\n  e.target.querySelector('.pet-project--title').classList.add('pet-project--title--active');\n}\n\nvar PetProjects = /*#__PURE__*/function () {\n  function PetProjects(container) {\n    _classCallCheck(this, PetProjects);\n\n    this.container = container;\n    this.petProjects = this.container.querySelectorAll('.pet-project');\n  }\n\n  _createClass(PetProjects, [{\n    key: \"run\",\n    value: function run() {\n      for (var i = 0; i < this.petProjects.length; i += 1) {\n        this.petProjects.item(i).addEventListener('mouseenter', focusProject);\n        this.petProjects.item(i).addEventListener('mouseleave', blurProject);\n      }\n    }\n  }]);\n\n  return PetProjects;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PetProjects);\n\n//# sourceURL=webpack://my-website/./src/widgets/pet-projects.widget/pet-projects.widget.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/style.css?");

/***/ }),

/***/ "./src/widgets/about-me.widget/about-me.widget.css":
/*!*********************************************************!*\
  !*** ./src/widgets/about-me.widget/about-me.widget.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/widgets/about-me.widget/about-me.widget.css?");

/***/ }),

/***/ "./src/widgets/banner.widget/banner.widget.css":
/*!*****************************************************!*\
  !*** ./src/widgets/banner.widget/banner.widget.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/widgets/banner.widget/banner.widget.css?");

/***/ }),

/***/ "./src/widgets/contact.widget/contact.widget.css":
/*!*******************************************************!*\
  !*** ./src/widgets/contact.widget/contact.widget.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/widgets/contact.widget/contact.widget.css?");

/***/ }),

/***/ "./src/widgets/education.widget/education.widget.css":
/*!***********************************************************!*\
  !*** ./src/widgets/education.widget/education.widget.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/widgets/education.widget/education.widget.css?");

/***/ }),

/***/ "./src/widgets/header.widget/header.widget.css":
/*!*****************************************************!*\
  !*** ./src/widgets/header.widget/header.widget.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/widgets/header.widget/header.widget.css?");

/***/ }),

/***/ "./src/widgets/pet-projects.widget/pet-projects.widget.css":
/*!*****************************************************************!*\
  !*** ./src/widgets/pet-projects.widget/pet-projects.widget.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-website/./src/widgets/pet-projects.widget/pet-projects.widget.css?");

/***/ }),

/***/ "./src/widgets/about-me.widget/img/dmitrii.votchitsev_2215405451567359885_0.jpg":
/*!**************************************************************************************!*\
  !*** ./src/widgets/about-me.widget/img/dmitrii.votchitsev_2215405451567359885_0.jpg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a0fe0cdc0675481fd0c.jpg\";\n\n//# sourceURL=webpack://my-website/./src/widgets/about-me.widget/img/dmitrii.votchitsev_2215405451567359885_0.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;