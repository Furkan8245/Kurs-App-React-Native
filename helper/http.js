import axios from "axios";

const firebaseURL = "https://kurslarim-app-default-rtdb.firebaseio.com";

export function storeCourse(courseData) {
    axios.post(firebaseURL + "/courses.json",courseData);
}

export async function getCourses() {
    const response = await axios.get(url + "/courses.json");
    const coursesArr= [];

    for (const key in response.data) {
        const courseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date (response.data[key].date),
            description: response.data[key].description,
        }
        coursesArr.push (courseObj);
    }
    return coursesArr;
}
