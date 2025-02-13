import axios from "./axios.js";

export const postLikeRequest = (bookId, bookTitle, userId) => axios.post(`/toggle`, { bookId, bookTitle, userId }, { withCredentials: true });

export const countLikesRequest = (bookId) => axios.get(`/count-likes/${bookId}`, { withCredentials: true });

export const isLikedRequest = (bookId, userId) => axios.get(`/check-liked`, { params: { bookId, userId } }, { withCredentials: true });
