import {createClassroom} from"../../config/firebase.js"

window.createClass = async function()
{
    const schedule = document.getElementById("Schedule of classes").value
    const courseTiming = document.getElementById("Class timings").value
    const teacher = document.getElementById("teacherName").value
    const sectionName = document.getElementById("Section Name").value
    const courseName = document.getElementById("Course Name").value
    const batchNumber = document.getElementById("Batch Name").value
    
    console.log("qweryiop-->", teacher)
    

    try {
        await createClassroom (courseName)  
        await swal("congratulations!", "you have added course successfully ", "success");
        // setTimeout(window.location.reload, 2000)

      } catch (e) {
        console.log("Error --> ", e.message);
      }
}