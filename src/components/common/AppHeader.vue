<template>
  <header
    class="fixed z-40 w-screen bg-gradient-to-b transition duration-700 ease-in-out"
    :class="activeIndex === 0 ? 'from-[#808080]' : 'from-transparent'"
  >
    <nav class="container flex items-center justify-center py-5 2xl:justify-between">
      <div class="hidden 2xl:block">
        <a href="#" @click="slideTo(0)">
          <img v-show="activeIndex === 0" src="../../assets/images/logo/logo.svg" alt="logo" />
          <img v-show="activeIndex !== 0" src="../../assets/images/logo/black-logo.svg" alt="logo"
        /></a>
      </div>
      <ul class="hidden font-bold 2xl:flex">
        <li
          class="group mr-6 px-3 py-2"
          :class="activeIndex === 0 ? 'text-white' : 'text-black'"
          @click="slideTo(0)"
          @keydown="slideTo(0)"
        >
          <a
            href="#"
            class="flex items-center transition duration-500 ease-in-out group-hover:text-orange"
            ><span class="material-icons text-2xl"> diversity_3 </span
            ><span class="ms-3">喵的主張</span></a
          >
        </li>
        <li
          class="group mr-6 px-3 py-2"
          :class="activeIndex !== 0 ? 'text-black' : 'text-white'"
          @click="slideTo(1)"
          @keydown="slideTo(1)"
        >
          <a
            href="#"
            class="flex items-center transition duration-500 ease-in-out group-hover:text-orange"
            ><span class="material-icons text-2xl"> today </span
            ><span class="ms-3">最新活動</span></a
          >
        </li>
        <li
          class="group mr-6 px-3 py-2"
          :class="activeIndex !== 0 ? 'text-black' : 'text-white'"
          @click="slideTo(2)"
          @keydown="slideTo(2)"
        >
          <a
            href="#"
            class="flex items-center transition duration-500 ease-in-out group-hover:text-orange"
            ><span class="material-icons text-2xl"> public </span
            ><span class="ms-3">政策議題</span></a
          >
        </li>
        <li
          class="group mr-6 px-3 py-2"
          :class="activeIndex !== 0 ? 'text-black' : 'text-white'"
          @click="slideTo(3)"
          @keydown="slideTo(3)"
        >
          <a
            href="#"
            class="flex items-center transition duration-500 ease-in-out group-hover:text-orange"
            ><span class="material-icons text-2xl"> mail </span
            ><span class="ms-3">民眾服務信箱</span></a
          >
        </li>
        <li
          class="group rounded-[80px] px-3 py-2"
          :class="activeIndex !== 0 ? 'bg-black text-primary' : 'bg-white text-black'"
          @click="slideTo(4)"
          @keydown="slideTo(4)"
        >
          <a
            href="#"
            class="flex items-center transition duration-500 ease-in-out group-hover:text-orange"
            ><span class="material-icons text-2xl"> attach_money </span
            ><span class="ms-3">小額捐款</span></a
          >
        </li>
      </ul>
      <img
        class="2xl:hidden"
        src="../../assets/images/logo/white-logo.svg"
        alt="logo"
      />
    </nav>
  </header>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

export default {
  name: 'AppHeader',
  props: ['myActiveIndex'],
  emits: ['slideTo'],
  setup(props: any, { emit }: any) {
    const activeIndex = ref(props.myActiveIndex);

    watch(
      () => props.myActiveIndex,
      (newVal) => {
        activeIndex.value = newVal;
      },
    );

    function slideTo(index: number) {
      emit('slideTo', index);
    }

    return {
      activeIndex,
      slideTo,
    };
  },
};
</script>
