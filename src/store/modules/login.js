export default {
    state: {
        username: "",
        password: "",
        user: {}
    },
    getters: {
        isLoggedIn: state => state.user.username
    },
    actions: {
        login({ commit }, payload) {
            commit("login", payload);
            commit("updateUsername", "");
            commit("updatePassword", "");
        },
        logout({ commit }) {
            commit("logout")
        }
    },
    mutations: {
        login: (state, data) => {
            state.user = data;
        },
        logout: (state) => {
            state.user = {};
        },
        updateUsername: (state, data) => {
            state.username = data;
        },
        updatePassword: (state, data) => {
            state.password = data;
        }
    }
}