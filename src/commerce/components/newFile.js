import { fetchDataWinners } from "../services/fake-lottery-api.service.js";
import { onMounted } from "vue";
import { winnerList } from "./winner-list.component.vue.js";

onMounted(() => {
fetchDataWinners().then(data => {
winnerList.value = data;
});
});
