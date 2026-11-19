import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import infoView from '../views/infoView.vue'
import vacationView from '../views/vacationView.vue'
import notFoundView from '../views/notFoundView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "hem",
            component: homeView
        }, {
            path: "/resmal",
            name: "resmål",
            component: vacationView
        }, {
            path: "/info",
            name: "information",
            component: infoView
        },
        {
            path: "/404",
            name: "not-found",
            component: notFoundView
        }, {
            path: '/:pathMatch(.*)*',
            redirect: "/404"
        }
    ],
})

export default router