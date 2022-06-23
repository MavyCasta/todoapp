import axios from 'axios'; 

class TodoDataService{

    getAll(token){
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }
    

    createTodo(data, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }

    updateTodo(id, data, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }

    deleteTodo(id, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }

    completeTodo(id, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }

    login(data){
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }

    signup(data){
        return axios.get('https://MaverickCasta.pythonanywhere.com/api/todos/');
    }
}

export default new TodoDataService();
