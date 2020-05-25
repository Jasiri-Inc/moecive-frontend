import React from "react";
import useDropdown from "./useDropdown";

const COURSES = ["SE", "CE", "TE", "BIS"];

const Form = () => {

    const [course, CourseDropdown] = useDropdown("Course", "SE", COURSES)

    return(

        <div>

            <CourseDropdown/>

        </div>
    )
}

export default Form;