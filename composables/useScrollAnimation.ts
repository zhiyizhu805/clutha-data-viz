// composables/useScrollAnimation.ts
import { onMounted, onUnmounted, ref } from 'vue';

export function useScrollAnimation() {
  const lastScroll = ref(0);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    const icons = document.querySelectorAll<HTMLElement>('.environment_icon');
    icons.forEach((icon) => {
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

