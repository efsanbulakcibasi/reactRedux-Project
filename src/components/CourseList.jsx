import {useSelector,useDispatch} from "react-redux"
import { deleteCourses } from "../store/slices/courseSlice"
const CourseList = () => {
    const dispatch = useDispatch()
    const {courses} = useSelector(({courses:{data,searchTerm}}) => {
        const filteredCourses= data.filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return {
            courses:filteredCourses
        }
    })

return (
    <div className="courseList">
        {
            courses.map((item) => (
                <div className="panel" key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <button className="button is-danger"
                    onClick={() => dispatch(deleteCourses(item.id))}
                    >Sil</button>
                </div>
            ))
        }
    </div>
)
}

export default CourseList;