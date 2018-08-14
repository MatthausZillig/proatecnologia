"use strict";
$(document).ready(function () {
    $('#data-table').DataTable({
        "ajax": "marvelData.json",
        "columns": [
            { "data": "name" },
            { "data": "comics" },
            { "data": "events" },
            { "data": "stories" }
        ]
    });
});  

