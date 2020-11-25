import BaseHandler from "../../handler/handler";

class ReviewProvider extends BaseHandler {
    createReview(payload) {
        return this.post('api/v1/reviews', payload);
    }

    getReviews() {
        return this.query('api/v1/reviews');
    }

    getValidatedReview() {
        return this.get('api/v1/reviews/validate');
    }

    getUserReview() {
        return this.get('api/v1/reviews/user');
    }

    updateReview(payload) {
        return this.put('api/v1/reviews/' + payload.id, payload);
    }

    deleteReview(payload) {
        return this.delete('api/v1/reviews/' + payload);
    }
}
export default ReviewProvider;