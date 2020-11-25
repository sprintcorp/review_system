import BaseHandler from "../../handler/handler";

class AuthProvider extends BaseHandler {
    register(payload) {
        return this.post("api/v1/auth/register", payload);
    }

    login(payload) {
        return this.post("api/v1/auth/login", payload);
    }

    getUserInformation() {
        return this.query("api/v1/auth/me");
    }

    forgotPassword(payload) {
        return this.post("api/v1/auth/forgotPassword", payload);
    }

    resetPassword(payload) {
        return this.put("api/v1/auth/resetpassword/" + payload.token, payload);
    }

    updateUserInformation(payload) {
        return this.put("api/v1/auth/updatedetails", payload);
    }

    updateUserPassword(payload) {
        return this.put("api/v1/auth/updatepassword", payload);
    }
}

export default AuthProvider;