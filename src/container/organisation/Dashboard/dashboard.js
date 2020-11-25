import { GET_VALIDATED_REVIEW } from "../../../store/action";

export default {
    data() {
        return {
            reviews: ''
        }
    },
    methods: {
        getReview() {
            this.$store.dispatch(GET_VALIDATED_REVIEW).then(
                (data) => {
                    this.reviews = data.data;
                }
            )
        },

    },
    mounted() {
        this.getReview();
    }
}