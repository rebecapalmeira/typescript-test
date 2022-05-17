import axios from 'axios';

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    const {id, title, completed} = response.data as ToDo;

    logToDo(id, completed, title)
});

const logToDo = (id: number, title: string, status: boolean) => {
    console.log(`
    The id is ${id}, 
    title is "${title}" 
    and the status of completion is "${status}".
`);
}

