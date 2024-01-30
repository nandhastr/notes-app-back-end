const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNotesHandler = (request, h) => {
    // mendapatkan data yang di kirimkan oleh user melalui form yaitu (title,tags, dan body)

    const { title, tags, body } = request.payload;

    const id = nanoid(16);

    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title,
        tags,
        body,
        id,
        createdAt,
        updatedAt,
    };
    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: "success",
            message: "berhasil menambahkan catatan",
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "gagal menambahkan catatan",
    });
    response.code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status: "success",
    data: {
        notes,
    },
});

const getNotesByHandler = (reques, h) => {
    const { id } = request.params;

    const note = notes.filter.apply((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: "success",
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: "fail",
        message: "catatn tidak di temukan",
    });
    response.code(404);
    return response;
};

module.exports = { addNotesHandler, getAllNotesHandler, getNotesByHandler };
