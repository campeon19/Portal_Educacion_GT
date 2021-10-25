import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./CourseSearcher.css";
import CourseContainer from "./CourseContainer/CourseContainer";
import { fetchCourses } from "../../util/http";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const options = [
  { value: "math", label: "Matemática" },
  { value: "physics", label: "Física" },
  { value: "chemistry", label: "Química" },
  { value: "biology", label: "Biología" },
  { value: "language", label: "Lenguaje" },
];

function CourseSearcher() {
  const [data, setData] = useState("");
  const [searchedCourse, setSearchedCourse] = useState("");
  const [categories, setCategories] = useState(options);
  const [courses, setCourses] = useState([]);

  const handleTags = (tags) => {
    console.log(tags);
    setCategories(tags);
  };

  const handleSearchedCourse = (e) => {
    setSearchedCourse(e.target.value);
  };
  const handleSearch = (e) => {
    const selectedTopics = categories.map((category) => {
      return category.value;
    });

    setCourses(
      data.filter((c) => {
        return (
          selectedTopics.includes(c.tema) &&
          c.nombre
            .toLocaleLowerCase()
            .includes(searchedCourse.toLocaleLowerCase())
        );
      })
    );
    console.log("Submiteando xd");
    e.preventDefault();
  };
  useEffect(() => {
    fetchCourses().then((datos) => {
      const keys = Object.keys(datos);
      const databaseCourses = keys.map((key) => {
        let curso = datos[key];
        delete curso.lecciones;
        return { id: key, ...curso };
      });

      console.log(databaseCourses);
      setData(databaseCourses);

      setCourses(databaseCourses);
    });
  }, []);

  return (
    <>
      <h1 className="display-4 searchbar-title">Busqueda de cursos</h1>

      <form className="course-searchbar" onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1"> Curso</label>
          <input
            type="text"
            value={searchedCourse}
            onChange={handleSearchedCourse}
            className="form-control"
            placeholder="Calculo 1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Selecciona las materias para filtrar
          </label>
          <Select
            defaultValue={categories}
            isMulti
            name="colors"
            onChange={handleTags}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Buscar Cursos
            </button>
          </div>
        </div>
      </form>
      <hr />

      {data.length !== 0 ? (
        <CourseContainer courses={courses} />
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default CourseSearcher;
