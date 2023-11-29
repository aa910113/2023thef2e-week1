<template>
  <a
    href="#"
    class="group absolute bottom-20 right-20 z-30"
    @click="slideTo"
  >
    <div class="relative h-20 w-20">
      <img
        class="absolute -top-5 transition duration-500 ease-in-out group-hover:opacity-100"
        :class="activeIndex === 4 ? 'opacity-100' : 'opacity-0'"
        src="../../assets/images/seal/text.png"
        alt="text"
      /><img
        class="px-2"
        src="../../assets/images/seal/link.png"
        alt="link"
      /><img
        class="absolute left-[20px] top-3 transition duration-500 ease-in-out"
        :class="activeIndex === 4 ? 'opacity-100' : 'opacity-0'"
        src="../../assets/images/seal/union.png"
        alt="union"
      /></div
  ></a>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

export default {
  name: 'AppSeal',
  props: ['myActiveIndex'],
  emits: ['slideTo'],
  setup(props: any, { emit }: any) {
    const activeIndex = ref(props.myActiveIndex);

    watch(() => props.myActiveIndex, (newVal) => {
      activeIndex.value = newVal;
    });

    function slideTo() {
      emit('slideTo', 4);
    }

    return {
      activeIndex,
      slideTo,
    };
  },
};
</script>
