// composables/useScrollAnimation.ts
import { onMounted, onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';


export function useScrollAnimation(): void {
  const lastScroll: Ref<number> = ref(0);

  const handleScroll = (): void => {
    const currentScroll: number = window.pageYOffset;
    const icons: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.environment_icon');
    icons.forEach((icon: HTMLElement) => {
      if (currentScroll <= lastScroll.value) {
        icon.style.animation = 'returnIcon 1s ease-in forwards';
      } else {
        icon.style.animation = 'moveIcon 1s ease-in forwards';
      }
    });
    lastScroll.value = currentScroll;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
}
