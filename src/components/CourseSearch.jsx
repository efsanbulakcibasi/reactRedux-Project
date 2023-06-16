import {useSelector,useDispatch} from "react-redux"
import { searchCourses } from "../store/slices/courseSlice"

const CourseSearch = () => {
    const dispatch= useDispatch();
    const {searchTerm} = useSelector((state) => state.courses.searchTerm)
    return(
        <div className="listHeader">
            <h3 className="title is-3">Kurslarım</h3>
            <div className="search field is-horizontal">
                <label className="label">Ara</label>
                <input className="input"
                value={searchTerm}
                onChange={(e) => {
                    dispatch(searchCourses(e.target.value))
                } }
                />
            </div>
        </div>
    )
}

export default CourseSearch;