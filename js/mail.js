$("#contactForm").submit(function(event){
// cancels the form submission
event.preventDefault();
submitForm();
});

function submitForm(){
    // Переменные с данными из формы
    var name = $("#name").val();
	var phone = $("#phone").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "name="+ name + "&phone="+ phone + "&email="+ email + "&message="+ message,
        success : function(text){
            if(text == "success"){
                formSuccess();
            }
        }
    });
}
function  formSuccess(){
    $( "#msgSubmit").removeClass( "hidden");
}
