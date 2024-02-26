import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { initFlowbite } from 'flowbite'

export function useFlowbite() {
    onMounted(() => {
        initFlowbite();
    })

    const route = useRoute();
    watch(() => route.path, () => {
        initFlowbite();
    })
}
