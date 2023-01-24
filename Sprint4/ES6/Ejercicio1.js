const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]

  const getCurso=(id)=>{
    let nameCurso=undefined
    courses.forEach(element => {
       
        if(element._id===id){
            nameCurso= element.title
        }
    });
    return nameCurso
  }


  console.log((getCurso(3)))