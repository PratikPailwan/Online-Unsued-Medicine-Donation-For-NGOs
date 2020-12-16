$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
    });
    $('#adminLogin').click(function(){
        $('#adminModal').modal('show');
    });
    $('#donarLogin').click(function(){
        $('#donarModal').modal('show');
    });
    $('#ngoLogin').click(function(){
        $('#ngoModal').modal('show');
    });
    $('#donarSignUp').click(function(){
        $('#donarSignUpModal').modal('show');
    });
    $('#ngoSignUp').click(function(){
        $('#ngoSignUpModal').modal('show');
    });
    $('#donateNow').click(function(){
        $('#donateNowModal').modal('show');
    });
    $('#donarChangePassword').click(function(){
        $('#donarChangePasswordModal').modal('show');
    });
    $('#ngoChangePassword').click(function(){
        $('#ngoChangePasswordModal').modal('show');
    });
    $('.requestbtn').click(function(){
        $('#addModal').modal('show');
    });
    $('#forgotPassbtn').click(function(){
        $('#forgotPasswordModal').modal('show');
    });
    $('#forgotPasswordCancel').click(function(){
        $('#forgotPasswordModal').modal('hide');
    });
    $('#adminLoginCancel').click(function(){
        $('#adminModal').modal('hide');
    });
    $('#donarLoginCancel').click(function(){
        $('#donarModal').modal('hide');
    });
    $('#ngoLoginCancel').click(function(){
        $('#ngoModal').modal('hide');
    });
    $('#donarSignUpCancel').click(function(){
        $('#donarSignUpModal').modal('hide');
    });
    $('#ngoSignUpCancel').click(function(){
        $('#ngoSignUpModal').modal('hide');
    });
    $('#donateNowCancel').click(function(){
        $('#donateNowModal').modal('hide');
    });
    $('#donarChangePasswordCancel').click(function(){
        $('#donarChangePasswordModal').modal('hide');
    });
    $('#ngoChangePasswordCancel').click(function(){
        $('#ngoChangePasswordModal').modal('hide');
    });
    $('#blockUserModalCancel').click(function(){
        $('#blockUserModal').modal('hide');
    });
    $('#addCancel').click(function(){
        $('#addModal').modal('hide');
    });
});