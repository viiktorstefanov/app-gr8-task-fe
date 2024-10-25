export const endpoints = {
    all: '/notes',
    edit: '/notes/edit/',
    add: '/notes/add',
    remove: '/notes/remove/'
};

const BASE_URL = process.env.REACT_APP_API_URL;

const getAllNotes = async () => {
        const response = await fetch(BASE_URL + endpoints.all);
        return response.json();
};

const addNote = async (content) => {
    const response = await fetch(BASE_URL + endpoints.add, {
        method: 'POST',
        headers: { 'Content-type' : 'application/json' },
        body: JSON.stringify({ data: content })
    });

    return response.json();
}; 

const removeNote = async (noteId) => {
    const response = await fetch(BASE_URL + endpoints.remove + noteId, {
        method: 'DELETE',
        headers: { 'Content-type' : 'application/json' },
    });

    return response.json();
};

const editNote = async (noteId, newContent) => {
    const response = await fetch(BASE_URL + endpoints.edit + noteId, {
        method: 'PUT',
        headers: { 'Content-type' : 'application/json' },
        body: JSON.stringify({ data: newContent })
    });

    return response.json();
};

export {
    getAllNotes,
    removeNote,
    addNote,
    editNote
};