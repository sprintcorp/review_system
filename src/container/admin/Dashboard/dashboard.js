import { GET_REVIEWS, UPDATE_REVIEW } from "../../../store/action"

export default {
    data() {
        return {
            reviews: '',
            message: '',
            show: false,
            color: ''
        }
    },
    methods: {
        getReview() {
            this.$store.dispatch(GET_REVIEWS).then(
                (data) => {
                    this.reviews = data.data;
                }
            )
        },
        validate(id, status) {
            const payload = {
                'id': id,
                'status': status
            }
            this.$store.dispatch(UPDATE_REVIEW, payload).then(
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
            });
        }
    },
    mounted() {
        this.getReview();
    }
}