import { LOGIN_USER } from "../../../store/action";

export default {
    data: () => ({
        valid: true,
        show1: false,
        password: 'Password',
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
        },
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        checkbox: false,
    }),

    methods: {
        login() {
            const payload = {
                'email': this.email,
                'password': this.password
            };
            this.$store.dispatch(LOGIN_USER, payload).then(
                (data) => {
                    this.loading = false;
                    const role = data.role;
                    if (role == 'user') {
                        this.$router.push({ name: 'user-dashboard' });
                    } else if (role == 'admin') {
                        this.$router.push({ name: 'admin-dashboard' });
                    } else {
                        // this.$router.push({ name: 'user' });
                    }
                }
            ).catch(() => {

            })
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}