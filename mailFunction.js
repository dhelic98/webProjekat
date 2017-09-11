$(document).ready(function () {

    $('#mailForm').on('submit', function (e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get real message
        var message = $("#message").val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url: 'https://formspree.io/dzenan_helic@hotmail.com',
            method: 'POST',
            data: {
                name: name,
                _subject: "New message from portfolio site",
                email: email,
                message: message,
            },
            dataType: "json",
            success: function () {
                alert("Message sent");

            }

        });

    });

});
