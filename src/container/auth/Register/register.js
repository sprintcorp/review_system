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
        message: '',
        show: false,
        color: '',
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
                    this.show = true;
                    this.color = 'success';
                    this.message = 'Registration successful';
                }).catch(
                () => {
                    this.show = true;
                    this.color = 'error';
                    this.message = "Registration not successful";
                });

        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}