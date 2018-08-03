"use strict";
const assert = require('assert');
const { Attributes } = require("./Attributes");
const { JSDOM } = require("jsdom");
describe('Attributes', function () {
    describe('parse', function () {
        it("get", function () {
            let dom = new JSDOM("<body><div data-foo='bar' data-cat-dog='dog' data-one-two-three-four='dog'></div></body>");
            console.log(dom.window.document.body.firstChild);
            let dataAttributeMap = Attributes.dataToMap(dom.window.document.body.firstChild);
            assert.deepEqual(dataAttributeMap, {
                foo: 'bar',
                catDog: 'dog',
                oneTwoThreeFour: 'dog'
            });
        });
    });
});
//# sourceMappingURL=AttributesTest.js.map