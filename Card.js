import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
// import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import React from "react";
const Card = (props) => {
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  // ye logic bilkul samajh nhi aaya 
  // #dimaag ka bhosda phat gya BC copy paste maara hai
  function clickHandler(){
    // logic!!
    if(likedCourses.includes(course.id)) {
      // mtlb phle se like hua pda hai to muje hatana hai
      setlikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Liked Removed");
    }

    else{
      // liked nhi hai phle se 
      // insert karna hai like
      if(likedCourses.length === 0){
        setlikedCourses([course.id]);
      }

      else{
        //non-empty phle se
        setlikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }

  }


  let course = props.course;
  return (
    <div className="bg-bgDark w-[300px] min-h-[200px] bg-opacity-90 rounded-md relative">
      <div>
        <img src={course.image.url} alt="image-icon" className="rounded-md" />

        <div className="absolute right-2 bottom-[150px] w-[40px] h-[40px] bg-white rounded-full flex justify-center">
        <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike size={25} />) : (<FcLikePlaceholder size={25} />)
          }
        </button>
      </div>

      </div>

      

      <div className="p-3">
        <p className="text-white text-[20px] font-bold">{course.title}</p>
        <p className="text-white mt-3 leading-6">
        {
          course.description.length > 100 ? (course.description.substring(0,100) + "...") : (course.description)
        }
        </p>
      </div>
    </div>
  );
};
export default Card;
