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
            type: 'PUT',
            dataType: "json",
            success: callback
        });
    }

    function create(name, data, callback) {

        $.ajax({
            url: "/api/parkhaus.php?method=create",
            data: data,
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