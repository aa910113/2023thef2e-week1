<template>
  <Header :myActiveIndex="activeIndex" @slideTo="slideTo" />
  <main v-if="width > 1535" class="relative hidden h-screen 2xl:block">
    <swiper
      direction="horizontal"
      :slidesPerView="1"
      :speed="1500"
      @slideChange="onSlideChange"
      :mousewheel="{
        invert: false,
      }"
      :modules="modules"
      @swiper="setSwiperRef"
    >
      <swiper-slide>
        <Advocate />
      </swiper-slide>
      <swiper-slide>
        <Activity :myActiveIndex="activeIndex" />
      </swiper-slide>
      <swiper-slide>
        <Issue :myActiveIndex="activeIndex" />
      </swiper-slide>
      <swiper-slide>
        <Serve :myActiveIndex="activeIndex" @openModal="openModal" />
      </swiper-slide>
      <swiper-slide>
        <Donate :myActiveIndex="activeIndex" />
      </swiper-slide>
    </swiper>
    <Seal :myActiveIndex="activeIndex" @slideTo="slideTo" />
  </main>
  <main class="relative block 2xl:hidden">
    <Advocate />
    <Activity :myActiveIndex="1" />
    <Issue :myActiveIndex="2" />
    <Serve :myActiveIndex="3" @openModal="openModal" />
    <Donate :myActiveIndex="4" />
  </main>
  <Footer @scrollToTop="scrollToTop" />
  <div
    id="modal"
    class="fixed left-0 top-0 z-50 h-full w-full bg-gray-900 bg-opacity-75"
    :class="{ hidden: isOpen }"
  >
    <div class="relative h-full w-full">
      <div
        class="absolute left-2/4 top-2/4 w-[21.9375rem] -translate-x-2/4 -translate-y-2/4
        rounded-[1.5rem] bg-white px-[1.9375rem] py-[2.5rem] shadow-[4px_4px_5px_0_rgba(0,0,0,0.2)]
        sm:w-[39.75rem] sm:p-[2.5rem]"
      >
        <div class="mx-auto h-[19.125rem] max-w-[19.125rem]">
          <img src="../src/assets/images/cat-holding.png" alt="cat" />
        </div>
        <div class="text-center font-bold">
          <p class="mb-4 mt-6 text-[2rem] text-cyan-darkest sm:text-[2.5rem]">感謝您寶貴的建議！</p>
          <p class="mb-2">我們重視每一份來信，</p>
          <p class="mb-2">每份建議都被會親自檢閱，</p>
          <p class="mb-6">敬請耐心靜待我們的回覆喵！</p>
        </div>
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            class="flex w-[13.625rem] items-center justify-center rounded-full border-2
            border-black bg-white px-3 py-2 text-black transition duration-700 ease-in-out
            hover:bg-black hover:text-white"
            @click="closeModal"
          >
            <span class="material-icons mr-3 text-xl"> close </span>
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watch,
} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination } from 'swiper/modules';
import VueScrollTo from 'vue-scrollto';
import Header from './components/common/AppHeader.vue';
import Footer from './components/common/AppFooter.vue';
import Seal from './components/common/AppSeal.vue';
import Advocate from './components/AdvocatePage.vue';
import Activity from './components/ActivityPage.vue';
import Serve from './components/ServePage.vue';
import Issue from './components/IssuePage.vue';
import Donate from './components/DonatePage.vue';

import 'swiper/swiper-bundle.css';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Seal,
    Swiper,
    SwiperSlide,
    Advocate,
    Activity,
    Serve,
    Issue,
    Donate,
  },
  setup() {
    function scrollList(event: any) {
      const list = event.currentTarget;
      const pageWidth = window.innerWidth;
      const scrollDistance = event.deltaY < 0 ? -pageWidth : pageWidth;
      list.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    }

    const activeIndex = ref<number>(0);

    const onSlideChange = (swiper: any) => {
      activeIndex.value = swiper.activeIndex;
    };

    let swiperRef: any = null;

    const setSwiperRef = (swiper: any) => {
      swiperRef = swiper;
    };
    const slideTo = (index: number) => {
      activeIndex.value = index;
      swiperRef.slideTo(index, 0);
    };

    const isOpen = ref(true);

    function openModal() {
      isOpen.value = false;
    }

    function closeModal() {
      isOpen.value = true;
    }

    const width = ref(window.innerWidth);

    watch(
      () => width.value,
      (newVal) => {
        if (newVal < 1535) {
          slideTo(0);
        }
      },
    );

    onMounted(() => {
      window.addEventListener('resize', () => {
        width.value = window.innerWidth;
      });
    });

    const scrollToTop = (str: string) => {
      VueScrollTo.scrollTo(`#${str}`);
    };

    return {
      isOpen,
      openModal,
      closeModal,
      scrollList,
      onSlideChange,
      modules: [Mousewheel, Pagination],
      activeIndex,
      swiperRef: null,
      setSwiperRef,
      slideTo,
      scrollToTop,
      width,
    };
  },
});
</script>
