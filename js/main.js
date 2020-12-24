 function nextSlide(evt, slideName) {
    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    }

    document.getElementById("start").classList.add('tabcontent');

    document.getElementById(slideName).style.display = "block";
}

$("input[type='checkbox']").change(function() {
    if(this.checked) {
   this.classList.toggle("checked");
}
});


$('#step_1 input').click(function(){
    //If the checkbox is checked.
    if($(this).is(':checked')){
        //Enable the submit button.
        $('#step_1 button.next').attr("disabled", false);
    }
});

$('#step_2 input').click(function(){
    if($(this).is(':checked')){
        $('#step_2 button.next').attr("disabled", false);

    }
});

$('#step_3 input').click(function(){
    if($(this).is(':checked')){
        $('#step_3 button.next').attr("disabled", false);

    }
});

$('#step_4 input').click(function(){
    if($(this).is(':checked')){
        $('#step_4 button.next').attr("disabled", false);

    }
});

function displayResult () {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
          if (document.querySelector("#cheap").classList.contains("checked") && document.querySelector("#russia").classList.contains("checked")) {
            document.getElementById("result_1").style.display = "block";
        }
        if (document.querySelector("#cheap").classList.contains("checked") && document.querySelector("#romantic").classList.contains("checked")) {
            document.getElementById("result_2").style.display = "block";
        }

        ///// statement bellow - need more details
        //// not always work
        if ((document.querySelector("#russia").classList.contains("checked") || document.querySelector("#romantic").classList.contains("checked") || document.querySelector("#introvert").classList.contains("checked")) && (document.querySelector("#middle").classList.contains("checked") || document.querySelector("#luxury").classList.contains("checked"))){
            document.getElementById("result_3").style.display = "block";
        }
        if (document.querySelector("#with_children").classList.contains("checked") && document.querySelector("#middle").classList.contains("checked") && document.querySelector("#luxury").classList.contains("checked")) {
            document.getElementById("result_4").style.display = "block";
        }
        /////треба уточнити, за цією умовою результат 5 взагалі не буде випадати
        /////(або додати #spa до умов)
        if (document.querySelector("#luxury").classList.contains("checked")) {
            document.getElementById("result_5").style.display = "block";
        }

        /// не працює. треба уточнити умови випадання
        /// міста: має бути АБО чи І?
        if (document.querySelector("#all_inclusive").classList.contains("checked") || document.querySelector("#spa").classList.contains("checked") || document.querySelector("#introvert").classList.contains("checked") && document.querySelector("#middle").classList.contains("checked") && document.querySelector("#moskow").classList.contains("checked") || document.querySelector("#another_city").classList.contains("checked")) {
            document.getElementById("result_6").style.display = "block";
        }

        /// виводить резальт_5(бо лухарі там єдина умова)
        if ((document.querySelector("#moskow").classList.contains("checked") || document.querySelector("#spb").classList.contains("checked")) && document.querySelector("#big_city").classList.contains("checked") && document.querySelector("#luxury").classList.contains("checked")) {
            document.getElementById("result_7").style.display = "block";
        }


        else {
            document.getElementById("result_2").style.display = "block";
        }
    } 
}



/* <button disabled=""disable> */

//     document.querySelector("input").classList.contains("checked")(function(){
//     $('.button').removeAttr('disabled');
//    });







