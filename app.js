Vue.createApp({

    data() {

        return {
            pageTitle: 'McCBlog',
            content: 'Ed and Matt, two brothers on opposite sides of the world navigating the cyber space and sharing our journey.'
        };
    }
}).mount('#app');

Vue.createApp({
    data() {
        return {
            links: [
                { text: 'edsBio', url: 'edsBio.html' },
                { text: 'mattsBio', url: 'mattsBio.html' }
            ]

        };
    }
}).mount('nav');

