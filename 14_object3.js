console.log("========= Destructing =========");

const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Alok Pandey"
}


// course.courseInstructor

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course; // you can also name this

console.log(instructor);


// APi me aise aata h
// {
//     "name": "ALok Pandey",
//     "coursename": "js in hindi",
//     "price": "free"
// } // json me key bhi string me likhna pdata h ye objcect ni hota h

// aise bhi aata h 
// [
//     {},
//     {},
//     {}
// ]

const URL = `https://randomuser.me/api/`

async function fetchUser() {
    try{
        const response = await fetch(`https://randomuser.me/api/`);
        const data = await response.json()
        // console.log(data);
        return data 
    } catch (error) {
    console.error(error);
  }
}

const res = fetchUser();

console.log(res);


