"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const crescent_logo_png_1 = __importDefault(require("./crescent_logo.png"));
require("./App.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("img", { src: crescent_logo_png_1.default, className: "App-logo", alt: "logo" }),
            react_1.default.createElement("p", null, "Crescent School of Gaming & Bartending"))));
}
exports.default = App;
