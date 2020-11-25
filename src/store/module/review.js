import {
    ReviewService
} from "../../services";
import { GET_REVIEWS, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from "../action";
import { SET_REVIEWS } from "../mutation";

const initialState = {
    reviews: [],
};

const state = {...initialState };


const actions = {
    async [GET_REVIEWS](context) {
        const { data } = await ReviewService.getReviews();
        context.commit(SET_REVIEWS, data.data);
        return data;
    },
    async [CREATE_REVIEW](context, payload) {
        console.log(payload);
        const { data } = await ReviewService.createReview(payload);
        return data;
    },
    async [UPDATE_REVIEW](context, payload) {
        const { data } = await ReviewService.updateReview(payload);
        return data;
    },
    async [DELETE_REVIEW](context, payload) {
        const { data } = await ReviewService.deleteReview(payload);
        return data;
    }

};
const mutations = {
    [SET_REVIEWS](state, reviews) {
        state.reviews = reviews;
    },

};


const getters = {
    reviews(state) {
        return state.reviews;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}