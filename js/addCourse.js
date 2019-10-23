console.log("heyy from Add Course");

// title
// desc
// trailerLink
$("#addNewCourse").unbind("click").click(function(){
  $("#addCourseModalTitleText").html("Add New Course");
  $("#addCourseSubmitButton").text("Add Course");

  $("#addCourseSubmitButton").unbind("click").click(function(){
    // get values
    let $this = $(this);
    const title = $("#inputCourseTitle").val();
    const desc = $("#inputCourseDesc").val();
    const trailerLink = $("#inputCourseTrailerLink").val();

    if (title.length > 0) {
      console.log("full haramm");

      const bodyToSend  = {
        title: title,
        desc: desc,
        trailerLink: trailerLink,
        channelId: channel.id,
        payload: {},
      }

      $this.text("Addind Data....");
      // console.log(channel.id);
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

    alert("Error: A Course Should At Least Have A Title");
  })
})
