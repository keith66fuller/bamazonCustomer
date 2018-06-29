$(document).ready(function () {

    $.get("/api/sources", function (sourcesObj) {
        // console.log("SOURCES: "+JSON.stringify(sourcesObj, null, 2));
        sourcesObj.forEach(sourceObj => {
            let tRow = $('<tr>').data('id',sourceObj.id);
            $(tRow).append($('<td>').text(sourceObj.id));
            $(tRow).append($('<td>').text(sourceObj.name));
            $(tRow).append($('<td>').text(sourceObj.oldest));
            $(tRow).append($('<td>').text(sourceObj.newest));
            $('tbody').append(tRow);

        });
        console.log(sourcesObj);
    });


    $('table').on('click', 'tr', null, function(event) {
        console.log('ROW '+$(this).data('id')+' clicked.');
        window.open('/source/'+$(this).data('id'));

    })


})

