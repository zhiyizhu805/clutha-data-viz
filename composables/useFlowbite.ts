import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export function useFlowbite():void {
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
}
