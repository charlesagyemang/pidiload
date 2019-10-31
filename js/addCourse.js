// console.log("heyy from Add Course");

// title
// desc
// trailerLink

//===== Add Course Logic =====//
$("#addNewCourse").unbind("click").click(function(){
  console.log("gahah");
  $("#addCourseModalTitleText").html("Add New Course .......");
  $("#addCourseSubmitButton").text("Add Course");

  $("#addCourseSubmitButton").unbind("click").click(function(){
    // get values
    let $this = $(this);
    const title = $("#inputCourseTitle").val();
    const desc = $("#inputCourseDesc").val();
    const trailerLink = $("#inputCourseTrailerLink").val();
    const price = $("#inputCoursePrice").val();

    if (title.length > 0 && desc.length && price.length > 0) {
      console.log(price);

      const bodyToSend  = {
        title: title,
        desc: desc,
        trailerLink: trailerLink,
        channelId: channel.id,
        payload: {
          price: price
        }
      }

      $this.text("Addind Data....");
      console.log(bodyToSend);
      // /*
      axios.post('https://poole23.herokuapp.com/api/courses', bodyToSend, JSON.parse(localStorage.myConfig))
      .then((response) => {
        $this.text("Success...");
        console.log("...done");
        // console.log(response.data);
        localStorage.channelGotten = JSON.stringify(response.data);
        console.log(localStorage.gottenChannel);
        location.reload();
      }, (error) => {
        console.log(error);
      });
      // */

      return
    }

    alert("Error: A Course Should At Least Have A Title A Description And A Price.");
  })
})
//===== Add Course Logic =====//


//====== Add New Lesson Logic ====//
$("#addNewLesson").unbind("click").click(function(){
  $("#addLessonModalTitleText").html("Add New Lesson");
  $("#addLessonSubmitButton").text("Add Lesson");


  let coursesArray = [];
  courses.forEach((eachCourse)=>{
    const lam = `<option value=${eachCourse.id}>${eachCourse.title}</option>`;
    coursesArray.push(lam);
  })

  // courseSelect
  const finalSelectBody = `<select id="selectCourses">\n` + coursesArray.join("\n") + "\n</select>";

  $("#courseSelect").html(finalSelectBody);

  $("#addLessonSubmitButton").unbind("click").click(function(){
    // get values
    let $this = $(this);
    const title = $("#inputLessonTitle").val();
    const desc = $("#inputLessonDesc").val();
    const youtubeLink = $("#inputLessonYoutubeLink").val();
    const courseId = $('#selectCourses').find(":selected").val();
    const channelId = channel.id;

    if (title.length > 0){
      const bodyToSend  = {
        title: title,
        desc: desc,
        youtubeLink: youtubeLink,
        courseId: courseId,
        payload: {},
      }

      // console.log(channelId,bodyToSend);
      $this.text("Creating Lesson....");

      axios.post(`https://poole23.herokuapp.com/api/lessons/${channelId}`, bodyToSend, JSON.parse(localStorage.myConfig))
      .then((response) => {
        $this.text("Success...");
        // console.log("...done");
        console.log(response.data);
        localStorage.channelGotten = JSON.stringify(response.data);
        console.log(localStorage.gottenChannel);
        location.reload();
      }, (error) => {
        console.log(error);
      });

      return;
    }

    alert("Error: Title Should Not Be Empty");


  })

});
//====== End Add New Lesson Logic ====//

$("#fire").unbind("click").click(function(){
  axios.get(`https://poole23.herokuapp.com/api/channels/${JSON.parse(localStorage.channelGotten).id}`, JSON.parse(localStorage.myConfig))
  .then((response) => {
    console.log("loading.....");
    console.log(response.data);
    localStorage.channelGotten = JSON.stringify(response.data);
    console.log(localStorage.gottenChannel);
    location.reload();
  }, (error) => {
    console.log(error);
  });
})
