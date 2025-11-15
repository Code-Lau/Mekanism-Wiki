import { createRouter, createWebHistory } from 'vue-router'

//Main Pages
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GettingStartedView from "../views/GettingStartedView.vue";
import DownloadsView from "../views/DownloadsView.vue";
import ItemListView from "@/views/ItemListView.vue";

//Items
import OsmiumOreView from "@/views/Items/OsmiumOreView.vue";

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/gettingstarted', name: 'GettingStarted', component: GettingStartedView },
    { path: '/downloads', name: 'Downloads', component: DownloadsView },
    { path: '/itemlist', name: 'ItemList', component: ItemListView},
    { path: '/osmiumore', name: 'OsmiumOre', component: OsmiumOreView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router