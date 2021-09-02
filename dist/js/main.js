"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MyHeader = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MyHeader, _HTMLElement);

  var _super = _createSuper(MyHeader);

  function MyHeader() {
    _classCallCheck(this, MyHeader);

    return _super.apply(this, arguments);
  }

  _createClass(MyHeader, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n            \n              <section class=\"header__contact\">\n                <article class=\"header__contact-item\">\n                  <figure class=\"header__contact-image-container\">\n                    <img class=\"header__content-image\" src=\"/dist/assets/phone.svg\" alt=\"phone icon\" />\n                    <span class=\"header__contact-content\">+381 65 541 84 76</span>\n                  </figure>\n                </article>\n                <article class=\"header__contact-item\">\n                  <figure class=\"header__contact-image-container\">\n                    <img class=\"header__content-image\" src=\"/dist/assets/mail.svg\" alt=\"email icon\" />\n                    <span class=\"header__contact-content\">info@rutann.rs</span>\n                  </figure>\n                </article>\n              </section>\n\n              <div class=\"wrapper\">\n                <section class=\"header__body\">\n                <a href=\"/\" class=\"nav__logo\">LOGO</a>\n\n                <svg class=\"nav__toggle-btn hamRotate nav__toggle-btn--animation\" viewBox=\"0 0 100 100\" width=\"50\">\n    <path\n          class=\"line top\"\n          d=\"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40\" />\n    <path\n          class=\"line middle\"\n          d=\"m 30,50 h 40\" />\n    <path\n          class=\"line bottom\"\n          d=\"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40\" />\n  </svg>\n\n                <nav class=\"nav\">\n                  <ul class=\"nav__list\">\n                    <li class=\"nav__item\">\n                      <a href=\"/\" class=\"nav__link\">Pocetna</a>\n                    </li>\n\n                    <li class=\"nav__item\">\n                      <a href=\"/about\" class=\"nav__link\">O nama</a>\n                    </li>\n\n                    <li class=\"nav__item nav__item--btn\">\n                      <a href=\"/form\" class=\"nav__link nav__link--btn\">Konkurisi</a>\n                    </li>\n\n                    <li class=\"nav__item\">\n                      <ul class=\"nav__social-media\">\n                      <li class=\"nav__social-media-container\">\n                        <a href=\"https://instagram.com/\">\n                        <img src=\"/dist/assets/logo-instagram.svg\" alt=\"instagram icon\" />\n                        </a>\n                      </li>\n\n                      <li class=\"nav__social-media-container\">\n                        <a href=\"https://facebook.com/\">\n                        <img src=\"/dist/assets/logo-facebook.svg\" alt=\"facebook icon\" />\n                        </a>\n                      </li>\n\n                      <li class=\"nav__social-media-container\">\n                      <a href=\"https://whatsup.com/\"><img src=\"/dist/assets/logo-whatsapp.svg\" alt=\"whatsup icon\" /></a>\n                      </li>\n                    </ul>\n                    </li>\n                  </ul>\n                </nav>\n                </section>\n              </div>\n            \n        ";
    }
  }]);

  return MyHeader;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var MyFooter = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(MyFooter, _HTMLElement2);

  var _super2 = _createSuper(MyFooter);

  function MyFooter() {
    _classCallCheck(this, MyFooter);

    return _super2.apply(this, arguments);
  }

  _createClass(MyFooter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n            <h2>My Footed custom element</h2>\n        ";
    }
  }]);

  return MyFooter;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
"use strict";

var menuToggleButton = document.querySelector(".nav__toggle-btn");
var navList = document.querySelector(".nav__list");
var nav = document.querySelector(".nav");

function toggleMenu() {
  this.classList.toggle("active");
  navList.classList.toggle("nav__list--active");
  nav.classList.toggle("nav--active");
} // listeners


menuToggleButton.addEventListener("click", toggleMenu);