import axios from 'axios'; 

class TodoDataService{

    getAll(token){
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }
    

    createTodo(data, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }

    updateTodo(id, data, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }

    deleteTodo(id, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }

    completeTodo(id, token){ 
        axios.defaults.headers.common["Authorization"] = "Token " + token; 
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }

    login(data){
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }

    signup(data){
        return axios.get('https://MaverickCasta.pythonanywhere.com/services/todos/');
    }
}

export default new TodoDataService();
