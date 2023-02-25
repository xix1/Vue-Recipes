import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue';
import Ingredients from '../views/Ingredients.vue'
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealDetails from '../views/MealDetails.vue';
import GuestLayout from '../components/GuestLayout.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home
            },
            {
                path: "/by-name/:name?", //问号代表是optional
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients,
            },

            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router