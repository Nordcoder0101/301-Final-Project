$('#form-logi').submit(function(e){
    e.prevent.Default();
    var username = $('input#username').val();
    var password = $('input#password').val();

    if (password == ""){
        alert ("Please enter Password");
        $('#password').focus();
        return false;
    }

    if (username == ""){
        alert ("Please enter username");
        $('#username').focus();
        return false;
    }

    if(username != '' && password != ''){
        $.ajax({
            url:
            type:
            data: {
                username: username,
                password: password
            },
            success: function(data) {
                console.log (data);

                var obj = JSON.parse(data);

                if(obj.result != 'invalid'){
                    alert("login succeeded");
                    window.location = 'www.batheinmymilk.com'
                }
            }
        })
    }
})