"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concatenation_1 = require("./concatenation");
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        (0, concatenation_1.concatenation)(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map