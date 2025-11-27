import { createContext, useReducer } from "react";


export const CoursesContext = createContext({
  courses: [],
  addCourse: ({ description, amount, date }) => {},
  deleteCourse: (id) => {},
  setCourse: (courses) => {},
  updateCourse: (id, { description, amount, date }) => {},
});

function coursesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "DELETE":
      return state.filter((course) => course.id !== action.payload);

      case 'SET':
        return action.payload.recerse
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
  const [coursesState, dispatch] = useReducer(coursesReducer, []);

  function addCourse(courseData) {
    dispatch({ type: "ADD", payload: courseData });
  }

  function deleteCourse(id) {
    dispatch({ type: "DELETE", payload: id });
  }

    function setCourse(courses) {
    dispatch({ type: "SET", payload: courses });
  }

  function updateCourse(id, courseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: courseData } });
  }

  const value = {
    courses: coursesState,
    addCourse: addCourse,
    setCourse: setCourse,
    deleteCourse: deleteCourse,
    updateCourse: updateCourse,
  };

  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesContextProvider;