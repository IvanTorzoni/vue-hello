const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: "Howdy From Ivan, using Vue.JS",
            greetingImage: ("img/howdy.jpg")
        }
    },
    methods: {

    }
}).mount("#app");