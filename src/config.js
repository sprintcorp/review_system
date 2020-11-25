import { BASE_URL, AUTH_TOKEN, NAME, ROLE } from "./env";

export const saveToken = (token) => {
    window.localStorage.setItem(AUTH_TOKEN, token);
};

export const saveUser = (user) => {
    let user_role = "";
    if (user.role === 'admin') {
        user_role = 'alpha'
    }
    if (user.role === 'organisation') {
        user_role = 'beta'
    }
    if (user.role === 'user') {
        user_role = 'delta'
    }
    window.localStorage.setItem(NAME, user.name);
    window.localStorage.setItem(ROLE, user_role);
};



export const saveUserData = (data) => {
    // alert(id);
    saveToken(data.token);
    saveUser(data);

};

export const isValidToken = (token = this.getToken) => {
    return splitToken(token).iss === BASE_URL + 'api/v1/auth/login';
};

export const hasToken = (token) => {
    return isValidToken(token);
};

export const splitToken = (token) => {
    return JSON.parse(atob(token.split('.')[1]));
};

export const getToken = () => {
    return window.localStorage.getItem(AUTH_TOKEN);
};

export const getname = () => {
    // if (hasToken(getToken())) {
    return window.localStorage.getItem(NAME);
    // }
};

export const getRole = () => {
    return window.localStorage.getItem(ROLE);
};

export const removeToken = () => {
    return window.localStorage.removeItem(AUTH_TOKEN);
};

export const removeUser = () => {
    window.localStorage.removeItem(NAME);
    window.localStorage.removeItem(ROLE);
};

export const logout = () => {
    removeToken();
    removeUser();
};