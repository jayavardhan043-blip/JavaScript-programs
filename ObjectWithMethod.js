let person = {
    name: "Vardhan",
    greet: function (){
        console.log("Hello " + this.name);
    }
};
person.greet();