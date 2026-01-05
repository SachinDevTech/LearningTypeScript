// ===============================
// UNION TYPES
// ===============================

// Union allows multiple specific types
let userId: number | string;

userId = 101;        // ✅ valid
userId = "A102";     // ✅ valid
// userId = true;    // ❌ Error

// Union in functions
function printId(id: number | string) {
  console.log(id.toString()); // safe for both number & string
}

printId(1);
printId("2");


// ===============================
// ANY TYPE
// ===============================

// any disables type checking
let data: any;

data = 10;
data = "hello";
data = true;
data = { name: "TS" };

// No compile-time errors
data.run();          // ❌ runtime error possible
data.toUpperCase(); // ❌ unsafe


// ===============================
// UNION vs ANY (comparison in code)
// ===============================

// ❌ Avoid using any
let valueAny: any;
valueAny = 10;
valueAny = "text";
valueAny = false;

// ✅ Prefer union types
let valueUnion: number | string;
valueUnion = 10;
valueUnion = "text";
// valueUnion = false; // ❌ Error


// ===============================
// TYPE NARROWING WITH UNION
// ===============================

function processValue(val: number | string) {
  if (typeof val === "number") {
    console.log(val.toFixed(2));
  } else {
    console.log(val.toUpperCase());
  }
}

processValue(12.5);
processValue("typescript");
