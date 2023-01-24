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

  const getEstudiantesCurso=()=>{
    
    courses.forEach(elementC => {
      console.log (`- ${elementC.name}`);
       /* enrollments.forEach(elementE=>{
         if(elementC._id===elementE._id){
          console.log (`* ${getEstudiante(elementE._id)}`);
         }
       }) */
    });

  }

  const getEstudiante=(id)=>{
    let nameEstudiante=undefined;
    students.forEach(element => {
       
        if(element._id===id){
            nameEstudiante= element.name;
        }
    });
    return nameEstudiante;
  }

getEstudiantesCurso();