/*
//1
let course = ['html', 'css', 'js']

let courses = course.map(courses => courses.toUpperCase());

console.log(courses)


//2
let num = [1,2,3,4]
console.log(num)

let newNum = num.map((no) => {
    return no*no
});

console.log(newNum)



//3
let pro = [
    {name:'shirt',price:24},
    {name:'tshirt',price:18},
    {name:'phone',price:35},
    {name:'ipad',price:38},]
console.log(pro)

let pnames=pro.map((ele)=> ele.name)
console.log(pnames)

*/

//4
let tem = [20, 25, 34, 45]
console.log(tem)

let fah = tem.map((ele) => {
    return (tem*9.5)+32;
})
console.log(fah)

//5
let students = [
    {name:'asif',age:18},
    {name:'kaleem',age:19},
    {name:'azam',age:25},
    {name:'raheem',age:23},]
console.log(students)

let newStu=students.map((ele)=> ele.name)
console.log(newStu)