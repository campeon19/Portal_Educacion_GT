import React, { useState } from 'react'
import Select from 'react-select'


const options = [
    { value: 'math', label: 'Matemática' },
    { value: 'physics', label: 'Física' },
    { value: 'chemistry', label: 'Química' },
    { value: 'biology', label: 'Biología' },
    { value: 'language', label: 'Lenguaje' }
  ] 

function CourseSearcher() {
    const [categories, setCategories] = useState(options);


    return (
        <Select
    defaultValue={categories}
    isMulti
    name="colors"
    onChange={setCategories}
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
    )
}

export default CourseSearcher
