// 1
const studens = [
    { id: 1, class: "since" },
    { id: 2, class: "math" },
    { id: 3, class: "biology" },
    { id: 4, class: "History" },
    { id: 5, class: "Islamic" },
    { id: 6, class: "Bangla" },
    { id: 7, class: "math" },
    { id: 8, class: "since" },
    { id: 9, class: "since" },

];


const studentMath = studens.filter((student) =>{
    return student.class === 'math';
})
console.log(studentMath)

// 2

const numbers = [1,2,3,4,5,6,7,8,9,10]

const even = numbers.filter((num) => num % 3 === 0 );
console.log(even)