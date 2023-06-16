import {useSelector,useDispatch} from "react-redux"
import { changeDescription, changeName, changePrice } from "../store/slices/formSlice";
import { addCourses } from "../store/slices/courseSlice";
const CourseForm = () => {
    const dispatch= useDispatch()
    const {name,description,price} = useSelector((state) => {
        return{
            name: state.form.name,
            description:state.form.description,
            price:state.form.price
        }
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCourses({name,description,price}))
    }

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input type="text" className="input is-expanded"
            value={name}
            onChange={(e) => {dispatch(changeName(e.target.value))}}
             />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea type="text" className="input is-expanded"
            value={description}
            onChange={(e) => {dispatch(changeDescription(e.target.value))}}
             />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input type="number" className="input is-expanded"
            value={price}
            onChange={(e) => {dispatch(changePrice(parseInt(e.target.value)))}}
             />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
