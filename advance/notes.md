1. Use 'const' by default. Use 'let' only if value must change.
    let age = 20;      // can change
    const name = "A"; // cannot reassign

2. Arrow functions are shorter and don’t have their own this
    const add = (a, b) => a + b;

3. Template Literals (No more + pain)
    const name = "Kushal";
    console.log(`Hello ${name}`);

4. Destructuring (Unpacking values)
    Destructuring = pull values out quickly

    i. object
        const user = { name: "Kushal", age: 20 };
        const { name, age } = user;
    
    ii. Array
        const arr = [1, 2];
        const [a, b] = arr;

5. Spread & Rest (...)

    Spread (copy)
        const arr1 = [1, 2];
        const arr2 = [...arr1, 3];

    Rest (collect)
        const arr = [1, 2];
        const [a, b] = arr;

6. Default Parameters
    function greet(name = "Guest") {
    console.log(name);
}

7. Optional Chaining (?.)
    user?.profile?.email

    Stops “cannot read property of undefined”