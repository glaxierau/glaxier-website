import Vue from 'vue'

export const store = Vue.observable({
    isNavOpen: false,
    isMobile: false,
})

export const mutation = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleScreenSize(state) {
        store.isMobile = state
    },
}