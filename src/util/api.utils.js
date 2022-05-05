import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5001'
        })

        // quando eu peço uma requisição
        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            return config
        }, (error) => {
            console.log(error)
        })

        
        this.api.interceptors.response.use((response) => response,
        (error) => {
            if(error.response.status === 401){
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
            throw error;
        })
    }

    //verificar se está certo
    // post = async (title) => {
    //     try {
    //       const { data } = await this.api.post('/', { title });
    //       return data;
    //     } catch (error) {
    //       throw error.response;
    //     }
    
    //   }
    
    //   get = async () => {
    //     try {
    //       const { data } = await this.api.get('/')
    //       return data;
    //     } catch (error) {
    //       throw error.response;
    //     }
    //   }
    
    //   update = async (id) => {
    //     try {
    //       await this.api.put(`/${id}`);
    //     } catch (error) {
    //       throw error.response;
    //     }
    //   }
    
    //   delete = async (id) => {
    //     try {
    //       await this.api.delete(`/${id}`)
    //     } catch (error) {
    //       throw error.response;
    //     }
    //   }
                // até aqui

    login = async (user) => {
        try {
            const { data } = await this.api.post('/auth/login', user);
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            return data;
        } catch (error) {
            throw error.response;
        }
    }
    
    signup = async (user) => {
        try {
             await this.api.post('/auth/signup', user);
        } catch (error) {
            throw error.response;
        }
     }

}




export default new Api();