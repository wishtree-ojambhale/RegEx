$('document').ready(function () {
  //   $('img').dblclick(function () {
  //     $('#nav-contents').hide('slow')
  //   })

  //   $('img').click(function () {
  //     $('#nav-contents').show('slow')
  //   })

  $('img').click(function () {
    $('#nav-contents').slideToggle('slow');
  });
})

//regex
$(document).ready(function () {
  $('#uname').on("input", function () {
    let namePattern = /^[A-Za-z0-9]+$/g;
    let uname = $.trim($('#uname').val());

    if (uname < 1) {
      $('#uError').text('Required field.');
      $('#uError').removeClass("color-green").addClass("color-crimson");
    }
    else if (uname.length < 3) {
      $('#uError').text('Minimum 3 chracters required.');
      $('#uError').removeClass("color-green").addClass("color-crimson");
    }
    else if (uname.match(namePattern)) {
      $('#uError').text('Username available.');
      $('#uError').addClass("color-green").removeClass("color-crimson");
    }
    else {
      $('#uError').text('Special characters not allowed.');
      $('#uError').addClass("color-crimson").removeClass("color-green");
    }
  })

  $("#email").on("input", function () {
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    let emailId = $.trim($('#email').val());

    if (emailId.match(emailPattern)) {
      $('#emError').text('Valid Email.');
      $('#emError').css('color', '#6bbf59');
    }
    else if (emailId.length < 1) {
      console.log("inn");
      $('#emError').text('Required Field.');
      $('#emError').css('color', 'crimson');
    }
    else {
      $('#emError').text('Invalid email id.');
      $('#emError').css('color', 'crimson');
    }
  });

  $('#pwd').on("input", function () {
    let pwdPattern = /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*<>]).{6,25}$/;
    let passwd = $.trim($('#pwd').val());

    if (passwd.length < 1) {
      $('#pwdError').text('Required Field.');
      $('#pwdError').addClass("color-crimson");

    }
    else if (passwd.match(pwdPattern)) {
      $('#pwdError').text('Strong Password.');
      $('#pwdError').removeClass("color-crimson").addClass("color-green");
    }
    else {
      $('#pwdError').text(
        'Password must be minimum 6 and maximum 8 characters including atleast 1 uppercase, 1 lowercase, 1 special character and 1 number.'
      );
      $('#pwdError').addClass("color-crimson");
    }
  })

  $('#mobile').on("input", function () {
    let mobPattern = /^\d{10}$/;
    let mobile = $.trim($('#mobile').val());

    if (mobile.length < 1) {
      $('#mobError').text('Required Field.');
      $('#mobError').addClass("color-crimson");
    }
    else if (mobile.match(mobPattern)) {
      $('#mobError').text('Valid mobile number.');
      $('#mobError').removeClass("color-crimson").addClass("color-green");
    }
    else {
      $('#mobError').text('Mobile number must contain 10 digits only.');
      $('#mobError').addClass("color-crimson");
    };
  });

  $('#submitBtn').on("click", function () {
    console.log('submitted');
    let uname = $('#uname').val();
    let emailId = $('#email').val();
    let passwd = $('#pwd').val();
    let mobile = $('#mobile').val();

    if (uname.length && emailId.length && passwd.length && mobile.length > 0) {
      $('#submitError').css('visibility', 'hidden');

      const userData = {
        name: uname,
        email: emailId,
        // password : passwd,
        mobile: mobile,
      }
      console.log(userData);
    } else {
      $('#submitError').css('visibility', 'visible');
    };
  });
});
