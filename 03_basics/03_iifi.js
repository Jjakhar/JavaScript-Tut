// IIFI (immediately involed function expressions)

// named iifi
(function fun1(){
    console.log("DB connected")
})(); // ; is necessary here study more why is it necessary

// unnamed iifi
( () => {
    console.log("DB connected by arrow function")
})();

( (name) => {
    console.log("Welcome", name)
})("Jaiyant Jakhar")