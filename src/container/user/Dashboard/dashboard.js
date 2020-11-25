import { CREATE_REVIEW, GET_ORGANISATION, GET_USER_REVIEW } from "../../../store/action"

export default {

    data: () => ({
        review: '',
        organisations: '',
        organisation: '',
        message: '',
        show: false,
        color: '',
        reviews: ''

    }),

    methods: {
        createReview() {
            const payload = {
                'review': this.review,
                'organisation': this.organisation
            };
            this.$store.dispatch(CREATE_REVIEW, payload).then(
                () => {
                    this.show = true;
                    this.color = 'success';
                    this.message = "Action successful";
                    this.getReview();
                }
            ).catch(() => {
                this.show = true;
                this.color = 'error';
                this.message = "Action not successful";
            })
        },
        getOrganisation() {
            this.$store.dispatch(GET_ORGANISATION).then(
                (data) => {
                    this.organisations = data.data;
                }
            )
        },
        getReview() {
            this.$store.dispatch(GET_USER_REVIEW).then(
                (data) => {
                    this.reviews = data.data;
                }
            )
        },
    },
    mounted() {
        this.getOrganisation();
        this.getReview();
    }
}