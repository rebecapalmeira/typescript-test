import axios from 'axios';

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    const toDo = response.data as ToDo;

    logToDo(toDo.id, toDo.title, toDo.completed)
});

const logToDo = (id: number, title: string, status: boolean): void => {
    console.log(`
        The id is ${id}, 
        the title is "${title}" 
        and the status of completion is "${status}".
    `);
    console.warn('warning')
}

