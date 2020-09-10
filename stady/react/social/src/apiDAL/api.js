import * as axios from "axios";

const instanceApi = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '475a789d-1cf1-4bda-95ce-1e82f04fdbc7'}
});

export const AuthApi =  {
    authMe() {
       return  instanceApi.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha){
        return instanceApi.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout(){
        return instanceApi.delete('auth/login');
    },
    getCapthaUrl(){
      return instanceApi.get('security/get-captcha-url');
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
export const ProfileApi = {
    getProfile(userId){
        return  instanceApi.get(`profile/${userId}`);
    },
    getStatus(profileId){
        return instanceApi.get(`profile/status/${profileId}`)
    },
    setStatus(newStatus){
        debugger
        return instanceApi.put(`profile/status/`, {status : newStatus})
    },
    uploadPhoto(file){
        let formData = new FormData();
        formData.append("image", file);
        return instanceApi.put(`profile/photo`,  formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    editDataProfile(profile){
        return  instanceApi.put(`profile/`, profile);
    },
}