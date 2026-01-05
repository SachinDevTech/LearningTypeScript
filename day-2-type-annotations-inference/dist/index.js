"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type Inference example
// TypeScript automatically infers the type based on the assigned value
let cupNums = Math.random() > 0.5 ? 10 : -1;
console.log(cupNums);
// Type inferred as: number
// cupNums = "ten"; ❌ Error: string is not assignable to number
// ============================
// Type Annotations example
// You explicitly define the variable type
let drink = "chai";
let countBananas = 10;
// countBananas = "bananas not available"; 
// ❌ Error: Type 'string' is not assignable to type 'number'
//# sourceMappingURL=index.js.map