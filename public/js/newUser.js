$(document).ready(function(e) {
	$("#newUserCredentials").on('submit',(function(e) {
        e.preventDefault();

        if($('#first_name').val().length>0)
        {
            if($('#first_name').val().trim()=='')
            {
                alert('Enter First Name');
                $('#first_name').focus();
                return;
            }
        }
        else
        {
            alert('Enter first_name');
            $('#first_name').focus();
            return;
        }

        if($('#last_name').val().length>0)
        {
            if($('#last_name').val().trim()=='')
            {
                alert('Enter last_name');
                $('#last_name').focus();
                return;
            }
        }
        else
        {
            alert('Enter last_name');
            $('#last_name').focus();
            return;
        }

        if($('#username').val().length>0)
        {
            if($('#username').val().trim()=='')
            {
                alert('Enter username');
                $('#username').focus();
                return;
            }
        }
        else
        {
            alert('Enter username');
            $('#username').focus();
            return;
        }

        if($('#email').val().length>0)
        {
            if($('#email').val().trim()=='')
            {
                alert('Enter email');
                $('#email').focus();
                return;
            }
        }
        else
        {
            alert('Enter email');
            $('#email').focus();
            return;
        }
    
        if($('#password').val().length>0)
        {
            if($('#password').val().trim()=='')
            {
                alert('Enter password');
                $('#password').focus();
                return;
            }
        }
        else
        {
            alert('Enter password');
            $('#password').focus();
            return;
        }

        if($('#reenter_password').val().length>0)
        {
            if($('#reenter_password').val().trim()=='')
            {
                alert('reenter_password');
                $('#reenter_password').focus();
                return;
            }
        }
        else
        {
            alert('reenter_password');
            $('#reenter_password').focus();
            return;
        }

        if ($('#password').val() != $('#reenter_password').val())
        {
            $('#password').empty();
            $('#reenter_password').empty();

            alert('passwords did not match, please try again...');
        }
        else
        {
            var first_name = $('#first_name').val();
            var last_name = $('#last_name').val();
            var email = $('#email').val();
            var username = $('#username').val();
            var password = $('#password').val();
    
            console.log(first_name);
            console.log(last_name);
            console.log(email);
            console.log(username);
            console.log(password);
        
            // $.post('/new_user_creation',
            // {
            //     first_name: first_name,
            //     last_name: last_name,
            //     email: email,
            //     username: username,
            //     password: password
            // },
            // function(data)
            // {
            //     console.log(data);
    
            //     window.location = 'http://localhost:2232/portal';
            // })
            // .fail(function (xhr)
            // {
            //     switch (xhr.status)
            //     {
            //         case 500:
            //             alert('500: Error. ');
            //             break;
            //         default:
            //             alert('Error');
            //     }
            // })
        }
    }));
})