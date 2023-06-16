import { useSelector } from "react-redux";

const CourseValue = () => {
  const totalPrice = useSelector(
    ({ courses: { data, searchTerm } }) =>
      data
        .filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, x) => acc + x.price, 0)
    //reduce ile önce yapılacak işlemler ardından başlangıç değeri yazılır
    //bu şekilde yazış ilk değer elli ise sıfır ile toplanır ve bu değer acc olan kısma atılır.
    //ikinci değer girildiğinde ise önceki değer acc de bulunduğu için önceki değer ile sonradan gelend eğer toplanır
    //yani alt kısımda yaptığımız işlemlerin aynısını yapmış oluruz
    //bizim burada atama yapmamızda gerek kalmaz direkt değeri geri döndürebiliriz. o yüzden;
    //filteredCourse kısmının yerine direkt return yazcak sorun ortadan kalkmış olur.
    //return ve süslülerimizi kaldırdığımız zaman da aslında bu değeri direkt dön demek olacağı için bu şekilde de kullanabilir,z

    //bu kullanım uzun ve bunun yerine reduce methodunu kullanabiliriz.
    // let price=0;
    // for(let x of filteredCourses){
    //     price += x.price
    // }
    // return price
  );
  return <div className="coursePrice">Toplam tutar: {totalPrice}</div>;
};

export default CourseValue;
