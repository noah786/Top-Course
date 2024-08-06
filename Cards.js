// saare cards ka track cards waale section mei horha hai
import { useState } from "react";
import Card from "./Card";
function Cards(props) {

    const[likedCourses, setlikedCourses] = useState([]);

  let courses = props.courses;
  let Category = props.Category;
  function getCourses(props) {
    if(Category === "All"){
      let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
    }

    else{
      return courses[Category];
    }
    
  }

  return (
    <div className=" flex flex-wrap justify-center mb-4 gap-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses = {likedCourses} setlikedCourses = {setlikedCourses} />
      ))}
    </div>
  );
}

export default Cards;
