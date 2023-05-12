console.log('JS Basic\'s class 4');

//we can call function's on top 
    //function call or invoke
        // run();

    //function declaration
        // function run() {
        //     console.log('running');
        // }

//2 types of function assignment
    //Named function assignment
        // let stand = function walk() {
        //     console.log('walking');
        // };

    //Anonymous function assignment
        // let stand2 = function() {
        //     console.log('walking2');
        // };

        // stand();
        // stand2();

        // let jump = stand;
        // jump();

//JS is dynamically type language
        // let x = 1;
        // console.log(x);
        // x = 'a';
        // console.log(x);

//Intro arguments object
        // function sum() {
        //     let total = 0;
        //     console.log(arguments);
        //     for(let value of arguments) 
        //         total = total + value;
        //     return total;
        // }
        // console.log(sum(2,2,2));
        // console.log(sum(1,2));
        // console.log(sum(1));
        // console.log(sum());
        // console.log(sum(1,2,3,4,5));

        // let ans = sum(1,2,2,3);
        // console.log(ans);

//Intro to Rest Operator

        // function sum(num, value, ...args) {
        //     console.log(num);
        //     console.log(value);
        //     console.log(args);
        // }

        // sum(1,2,3,4,5,6);


//Default Parameters
        // function interest(p,r=6,y=9) {
        //     console.log(p);
        //     console.log(r);
        //     console.log(y);
        //     return p*r*y/100;
        // }
        // console.log(interest(3,10,11));
        //console.log(interest(1000,undefined, 8));

//GETTER SETTER
//getter -> access properties
//setter -> change or mutate properties

        // let person = {
        //     fName : 'Love',
        //     lName : 'Babbar',
        //     get fullName() {
        //         return `${person.fName} ${person.lName}`;
        //     },
        //     set fullName(value) {
        //         if(typeof value !== String) {
        //             throw new Error("You have not sent a string");
        //         }
        //         let parts = value.split(' ');
        //         this.fName = parts[0];
        //         this.lName = parts[1];
        //     }
        // };
        // console.log(person);


//issue - > read only
        // console.log(person.fullName);
        // try {
        //     person.fullName = true;
        // }
        // catch (e) {
        //     alert(e);
        // }


//Global scope variable
        // {
        //     var a = 5;
        // }
        // console.log(a);


        // function walk() {
        //     var a = 5;
        // }
        // console.log(a);

        // for(var i = 0; i<10; i++) {

        // }
        // console.log(i);

        // if(true) {
        //     var a = 5;
        // }

        // console.log(a);

//Block scope
        // function a() {
        //     const ab  = 5;
        // }
        // const ab = 5;
        // function b() {
        //     const ab = 5;
        // }

//sorting 
        // let a = [10,5,4,25];

        // a.sort(function(a,b) {
        //     return a-b;
        // });

        // console.log(a);

        // let arr = [-1,-2,-3,-4];
        // let total = 0;

//reducing array
        // for(let value of arr) 
        //     total = total + value;

        // console.log(total);


        // let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

        // console.log("PRINTING TOTAL SUM:")
        // console.log(totalSum);




// const x = [1,2,3];
// const y = x;
// let a = "satya";
// x.push(4);
// console.log(y.length);
// console.log(`sum of x and {y} is ${x+y}`);