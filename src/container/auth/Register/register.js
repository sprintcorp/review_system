import { REGISTER_USER } from "../../../store/action";

export default {
    data: () => ({
        valid: true,
        show1: false,
        errorMessages: '',
        name: null,
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
        role: ['user', 'organisation'],
        snackbar: false,
        text: ''
    }),

    methods: {
        registerUser() {
            const payload = {
                'email': this.email,
                'name': this.name,
                'password': this.password,
                'role': this.role
            };
            this.$store.dispatch(REGISTER_USER, payload).then(
                () => {
                    this.snackbar = true;
                    this.text = 'Registration Successful';
                }).catch(
                () => {
                    this.snackbar = true;
                    this.text = 'Registration not Successful';
                });
            this.snackbar = false
                // setTimeout(this.snackbar = false, 5000);
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}