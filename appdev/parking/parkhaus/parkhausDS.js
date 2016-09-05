easy2park.parkhausDS = function () {
    'use strict';

    return {
        create: create,
        update: update,
        delete: delete,
        list: list
    };



    function update(parkhausId, name, callback) {
        // mit ajax an den server senden
        $.ajax({
            url: "/api/parkhaus.php?method=update",
            data: {name: name, parkhausId:parkhausId},
            type: 'POST',
            dataType: "json",
            success: callback
        });
    }

    function create(name, callback) {

        $.ajax({
            url: "/api/parkhaus.php?method=create",
            data: {name: name},
            type: 'POST',
            dataType: "json",
            success: callback
        });
    }

    function delete() {

    }

    function list () {

    }

}();