import {makeAutoObservable, observable} from "mobx";

class TodoClass {
    todos = [
        {
            "id": "1",
            "parent_id": "1",
            "image": "/img/sneakers/1.jpg",
            "name": "Мужские Кроссовки Nike Blazer Mitem_id Suede",
            "price": "999",
            "count": "1"
        },
        {
            "id": "2",
            "parent_id": "2",
            "image": "/img/sneakers/2.jpg",
            "name": "Blaze",
            "price": "1999",
            "count": "1"
        },
        {
            "id": "3",
            "parent_id": "3",
            "image": "/img/sneakers/3.jpg",
            "name": "Nike Blazer ",
            "price": "18889",
            "count": "1"
        },
    ]

    constructor() {
        makeAutoObservable(this) /* watching for our class*/
    }

    // Actions

    // add todo to array
    addTodo (todo) {
        this.todos.push(todo) /* push todo to array*/
        console.log('addTodo ', this.todos);
    }

    // remove todo from array
    removeTodo (id) {
        this.todos = this.todos.filter(todo => todo.id !== id); /*return items which != id which we take*/
        console.log('removeTodo ', this.todos);
    }

    // did todo or not
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        console.log('completeTodo ', this.todos);
    }

    //took data from Json

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new TodoClass();