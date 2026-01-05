"use strict";
// ===============================
// UNION TYPES
// ===============================
Object.defineProperty(exports, "__esModule", { value: true });
// Union allows multiple specific types
let userId;
userId = 101; // ✅ valid
userId = "A102"; // ✅ valid
// userId = true;    // ❌ Error
// Union in functions
function printId(id) {
    console.log(id.toString()); // safe for both number & string
}
printId(1);
printId("2");
// ===============================
// ANY TYPE
// ===============================
// any disables type checking
let data;
data = 10;
data = "hello";
data = true;
data = { name: "TS" };
// No compile-time errors
data.run(); // ❌ runtime error possible
data.toUpperCase(); // ❌ unsafe
// ===============================
// UNION vs ANY (comparison in code)
// ===============================
// ❌ Avoid using any
let valueAny;
valueAny = 10;
valueAny = "text";
valueAny = false;
// ✅ Prefer union types
let valueUnion;
valueUnion = 10;
valueUnion = "text";
// valueUnion = false; // ❌ Error
// ===============================
// TYPE NARROWING WITH UNION
// ===============================
function processValue(val) {
    if (typeof val === "number") {
        console.log(val.toFixed(2));
    }
    else {
        console.log(val.toUpperCase());
    }
}
processValue(12.5);
processValue("typescript");
//# sourceMappingURL=index.js.map