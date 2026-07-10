let Str = "JavaScript Programming";
console.log("Original String:", Str);

//length
console.log("Length:", Str.length);

//trim
let trimmed = Str.trim();
console.log("Trim:", trimmed);

// charAt
console.log("charAt(4):", trimmed.charAt(4));

//indexOf
console.log("indexOf('Script'):", trimmed.indexOf("Script"));

//lastIndexOf
console.log("lastIndexOf('m'):", trimmed.lastIndexOf("m"));

//includes
console.log("includes('java'):", trimmed.includes("java"));

//startswith
console.log("startsWith('java'):", trimmed.startsWith("java"));

//endswith
console.log("endsWith('programming'):", trimmed.endsWith("programming"));

//slice
console.log("slice(0,10):", trimmed.slice(0, 10));

//substring
console.log("substring(11,22):", trimmed.substring(11, 22));

//toUpperCase 
console.log("Uppercase:", trimmed.toUpperCase());

//tolowercase
console.log("Lowercase:", trimmed.toLowerCase());

//replace
console.log("Replace:", trimmed.replace("Programming", "Language"));

//replaceAll
let text = "cat cat cat";
console.log("replaceAll:", text.replaceAll("cat", "dog"));

//split
console.log("Split:", trimmed.split(" "));

//concat
let str2 = "Tutorial";
console.log("concat:", trimmed.concat(str2));

//repeat
console.log("Repeat:", "Hi".repeat(3));