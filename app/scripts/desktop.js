var DesktopDevice = {

    run: function() {
        console.log("Desktop");

        $('#main').animate({
            opacity: 1
        }, {
            duration: 5000,
            complete: function() {
                $('#loader').hide();
            }
        });




        $('#first').click(function() {

            $('#extendedTextContainer').css({
                display: 'none'
            });

            $('#extendedTextContainer').css({
                height: '15vh',
                width: "100vw",
                backgroundColor: "gray"
            });

            $('#extendedTextContainer').show("slow");

            $('#extendedText').text(lorem);

            $('#landingImageContainer').animate({
                height: '80vh',
                padding: '0 0 0 14rem'
            }, 'slow');

            $('#landingImage').animate({
                height: '75vh'
            }, 'slow');

            // $('#landingImage').css({
            //     height: '75vh'
            // });
        });

        $('#second').click(function() {
            $('#extendedTextContainer').css({
                display: 'none',
                height: '0vh'
            });

            $('#landingImageContainer').animate({
                height: '92vh',
                padding: '0'
            }, 'slow');

            $('#landingImage').animate({
                height: '92vh'
            }, 'slow');

        });

        $("#moreText").click(function() {


            $('#landingImageContainer').animate({
                height: '50vh',
                padding: '0 0 0 33rem'
            }, 'slow');

            $('#landingImage').animate({
                height: '40vh'
            }, 'slow');

            $('#extendedTextContainer').animate({
                height: '45vh'
            }, 'slow');
        });


    }
}