import { createRouter, createWebHistory } from 'vue-router'

//Main Pages
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GuideView from "@/views/GuideView.vue";
import DownloadsView from "../views/DownloadsView.vue";
import ItemListView from "@/views/ItemListView.vue";

//Guide Pages
import GettingStartedView from "../views/GettingStartedView.vue";

//Item Pages
import OsmiumOreView from "@/views/Items/OsmiumOreView.vue";

const routes = [
    { path: '/home', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/guide', name: 'Guide', component: GuideView },
    { path: '/downloads', name: 'Downloads', component: DownloadsView },
    { path: '/item-list', name: 'ItemList', component: ItemListView},
    { path: '/osmium-ore', name: 'OsmiumOre', component: OsmiumOreView },
    { path: '/getting-started', name: 'GettingStarted', component: GettingStartedView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router