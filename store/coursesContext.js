import { createContext, useReducer } from "react";

const COURSES = [
  {
    id: '1',
    description: 'C Programlama',
    amount: 69,
    date: new Date('2023-01-05')
  },
  {
    id: '2',
    description: 'Python ile Veri Analizi',
    amount: 69,
    date: new Date('2023-02-12')
  },
  {
    id: '3',
    description: 'JavaScript Temelleri',
    amount: 69,
    date: new Date('2023-03-08')
  },
  {
    id: '4',
    description: 'React Native Geliştirme',
    amount: 69,
    date: new Date('2023-04-15')
  },
  {
    id: '5',
    description: 'Go ile Backend Geliştirme',
    amount: 69,
    date: new Date('2023-05-22')
  },
  {
    id: '6',
    description: 'Kotlin ile Android',
    amount: 69,
    date: new Date('2023-06-18')
  },
  {
    id: '7',
    description: '.NET Core Web API',
    amount: 69,
    date: new Date('2023-07-30')
  },
  {
    id: '8',
    description: 'Veritabanı Yönetimi (SQL)',
    amount: 69,
    date: new Date('2023-08-25')
  },
  {
    id: '9',
    description: 'Yapay Zeka Giriş',
    amount: 69,
    date: new Date('2023-09-10')
  },
  {
    id: '10',
    description: 'Siber Güvenlik Temelleri',
    amount: 69,
    date: new Date('2023-10-05')
  }
]

export const CoursesContext = createContext({
  courses: [],
  addCourse: ({ description, amount, date }) => {},
  deleteCourse: (id) => {},
  updateCourse: (id, { description, amount, date }) => {},
});

function coursesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "DELETE":
      return state.filter((course) => course.id !== action.payload);

    case "UPDATE":
      const updateIndex = state.findIndex(
        (course) => course.id === action.payload.id
      );
      const oldItem = state[updateIndex];
      const updatedItem = { ...oldItem, ...action.payload.data };

      const updatedCourses = [...state];
      updatedCourses[updateIndex] = updatedItem;

      return updatedCourses;

    default:
      return state;
  }
}

function CoursesContextProvider({ children }) {
  const [coursesState, dispatch] = useReducer(coursesReducer, COURSES);

  function addCourse(courseData) {
    dispatch({ type: "ADD", payload: courseData });
  }

  function deleteCourse(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateCourse(id, courseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: courseData } });
  }

  const value = {
    courses: coursesState,
    addCourse,
    deleteCourse,
    updateCourse,
  };

  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesContextProvider;