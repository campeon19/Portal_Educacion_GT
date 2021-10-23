import React, { useState } from 'react'
import Select from 'react-select'
import './CourseSearcher.css'
import CourseContainer from './CourseContainer/CourseContainer'
import math from './assets/calculus.jpg'
import physics from './assets/physics.jpg'
import language from './assets/communication.jpg'
import chemistry from './assets/chemistry.jfif'
import biology from './assets/biology.jpg'


const options = [
    { value: 'math', label: 'Matemática' },
    { value: 'physics', label: 'Física' },
    { value: 'chemistry', label: 'Química' },
    { value: 'biology', label: 'Biología' },
    { value: 'language', label: 'Lenguaje'}
] 
const images = 
    {math: math, physics: physics, chemistry: chemistry, biology: biology, language: language}

const cursos = [
    {id:0, tema:'math', nombre: 'Calculo 1', brief: 'Aprende limites, derivadas e integrales. Además de optimización de funciones'},
    {id:1, tema:'math', nombre: 'Precalculo', brief: 'Aprende reglas de exponentes, logaritmicas y a resolver ecuaciones trigonometricas'},
    {id:2, tema:'physics', nombre: 'Fisica fundamental', brief: 'Aprende acerca de los vectores, que significan y como aplicarlos'},
    {id:3, tema:'language', nombre: 'Comunicacion', brief: 'Aprende redacción, ortografía, gramática y a comunicarte efectivamente'},
    {id:4, tema:'chemistry', nombre: 'Química general', brief: 'Aprende acerca reacciones básicas, el átomo y estequeometría'},
    {id:5, tema:'biology', nombre: 'Biología básica', brief: 'Aprende acerca de la celula, microorganismos y la fotosintesis'}
]

function CourseSearcher() {
    const[searchedCourse, setSearchedCourse] = useState("");
    const [categories, setCategories] = useState(options);
    const [courses, setCourses] = useState(cursos);

    const handleTags = (tags) =>{
        console.log(tags);
        setCategories(tags);
    }

    const handleSearchedCourse = (e) =>{
        setSearchedCourse(e.target.value)
    }
    const handleSearch = (e) =>{
        const selectedTopics = categories.map((category)=>{
            return category.value
        })
        // TODO: conectar con base de datos
        setCourses(cursos.filter((c)=>{
            return selectedTopics.includes(c.tema) && c.nombre.toLocaleLowerCase().includes(searchedCourse.toLocaleLowerCase())
        }))
        console.log('Submiteando xd')
        e.preventDefault()

    }



    return (
        <>
        <form className="course-searchbar" onSubmit={handleSearch}>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1"> Curso</label>
    <input type="text" value={searchedCourse} onChange ={handleSearchedCourse} className="form-control" placeholder="Calculo 1"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Selecciona las materias para filtrar</label>
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
      <button type="submit" className="btn btn-primary">Buscar Cursos</button>
    </div>
  </div>
</form>
        <CourseContainer courses={courses} pictures={images}/>
  </>
    )
}

export default CourseSearcher
