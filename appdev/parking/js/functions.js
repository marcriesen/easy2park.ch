$(document).ready(function () {
    $(function() {
        var $select = $("1-100");
        for (var i = 1; i <= 300; i++) {
            $select.append($('<option></option>').val(i).html(i))
        }
    })

    function hideIcon(self) {
        self.style.backgroundImage = 'none';
    }



    $(".layer1").mouseover(function() {
        $(".text-picture1").css("color", "#fff");
    });

    $(".layer1").mouseout(function() {
        $(".text-picture1").css("color", "#2E3192")
    });

    $(".layer2").mouseover(function() {
        $(".text-picture2").css("color", "#fff");
    });

    $(".layer2").mouseout(function() {
        $(".text-picture2").css("color", "#2E3192")
    });

    $(".layer3").mouseover(function() {
        $(".text-picture3").css("color", "#fff");
    });

    $(".layer3").mouseout(function() {
        $(".text-picture3").css("color", "#2E3192")
    });

    $(".layer4").mouseover(function() {
        $(".text-picture4").css("color", "#fff");
    });

    $(".layer4").mouseout(function() {
        $(".text-picture4").css("color", "#2E3192")
    });

    $(".layer5").mouseover(function() {
        $(".text-picture5").css("color", "#fff");
    });

    $(".layer5").mouseout(function() {
        $(".text-picture5").css("color", "#2E3192")
    });

    $(".layer6").mouseover(function() {
        $(".text-picture6").css("color", "#fff");
    });

    $(".layer6").mouseout(function() {
        $(".text-picture6").css("color", "#2E3192")
    });


});

