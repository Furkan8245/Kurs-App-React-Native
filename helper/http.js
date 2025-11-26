import axios from "axios";

const firebaseURL = "https://kurslarim-app-default-rtdb.firebaseio.com";

export function storeCourse(courseData) {
    axios.post(url + "/courses.json",courseData);
}

export async function getCourses() {
    const response = await axios.get(url + "/courses.json");
    
    for (const key in response.data) {
        const courseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date (response.data[key].date),
            description: response.data[key].description,
        }
        response.data[key].amount
    }
}
