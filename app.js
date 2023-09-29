Vue.createApp({

    data() {

        return {
            pageTitle: 'McCBlog',
            content: 'Ed and Matt, two brothers on opposite sides of the world navigating the cyber space and sharing our journey.',

        };
    }
}).mount('#app');

Vue.createApp({
    data() {
        return {
            links: [
                { text: 'edsBio', url: 'content/edsBio.html' },
                { text: 'mattsBio', url: 'content/mattsBio.html' }
            ]

        };
    }
}).mount('nav');

// Vue.createApp({
//     data() {
//         return {
//             profileImages: [
//                 { name: 'EdImageActual', src: 'content/ed_blog_thumbnail_actual.jpg' },
//                 { text: 'mattsBio', url: 'content/mattsBio.html' }
//             ]
//         }

//     }
// })
Vue.createApp({

    data() {
        return {
            message: 'Hover Me!'
        }

    },
    methods: {
        mouseover() {
            this.message = 'Good!'
        },
        mouseleave() {
            this.message = 'Hover Me!'
        }
    }
}).mount('#mouse');