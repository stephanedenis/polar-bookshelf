"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Strings {
    static toPrimitive(value) {
        if (value === "true" || value === "false") {
            return value === "true";
        }
        if (value.match(/^[0-9]+$/)) {
            return parseInt(value);
        }
        if (value.match(/^[0-9]+\.[0-9]+$/)) {
            return parseFloat(value);
        }
        return value;
    }
}
exports.Strings = Strings;
//# sourceMappingURL=Strings.js.map