import { ListCourse } from "./ListCourse"
export const Course = ({courses}) =>{
    const part = courses.parts
    console.log(part)
    var count = 0
    return(
        <>
            <h3>{courses.id? courses.name:courses.name}</h3>
            <ul>
                {part.map(course => <ListCourse key={course.id} course={course}/>)}
            </ul>
            <p>total {part.reduce((coun, sum)=> coun+sum.exercises, count)} ejercicios</p>
        </>
    )
}