import * as axios from "axios";

const instanceApi = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '3600392c-247d-4f4d-94dc-7e5cc9c39ecd'}
});

export const AuthApi =  {
    authMe() {
        debugger
       return  instanceApi.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return instanceApi.post('auth/login', {email, password, rememberMe});
    },
    logout(){
        return instanceApi.delete('auth/login' ).then(response => response);
    }
}
export const UsersApi = {
    getUsers(pageSize, currentUserPage){
        return  instanceApi.get(`users?count=${pageSize}&page=${currentUserPage}`).then(response => response);
    },
    Follow(id) {
        return instanceApi.post(`follow/${id}`).then(response => response.data);
    },
    unFollow(id) {
        return instanceApi.delete(`follow/${id}`).then(response => response.data);
    }

}