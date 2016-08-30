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



});

