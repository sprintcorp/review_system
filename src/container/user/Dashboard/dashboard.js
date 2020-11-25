import { CREATE_REVIEW } from "../../../store/action"

export default {

    data: () => ({
        review: '',
    }),

    methods: {
        createReview() {
            const payload = {
                'review': this.review
            };
            this.$store.dispatch(CREATE_REVIEW, payload).then(
                () => {

                }
            )
        },
    },
}