const { addNotesHandler, getAllNotesHandler, getNotesByHandler } = require("./handler");

const routes = [
    {
        method: "POST",
        path: "/notes",
        handler: addNotesHandler,
    },
    {
        method: "GET",
        path: "/notes",
        handler: getAllNotesHandler,
    },
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNotesByHandler,
    },
];

module.exports = routes;
