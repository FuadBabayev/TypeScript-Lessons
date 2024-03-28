import React from 'react'

// ! propslardan istifade edeceyikse mutleq React.FC-dan istifade olunur
// ! Todo: Props ozude obyekt olduqu ucun props = {courses: Array(3)}  ->   React.FC<props> = React.FC<{}>
const Udemy: React.FC<{ courses: string[] }> = (props) => {
    // console.log(props);          // ! {courses: ['Learn React', 'Learn TypeScript', 'Learn MERN Stack']}

    return (
        <ul style={{backgroundColor : 'deepskyblue'}}>
            {props.courses.map((course, index) => <li key={index} style={{ listStyle: 'none'}}>{course}</li>)}
        </ul>
    )
}

export default Udemy
