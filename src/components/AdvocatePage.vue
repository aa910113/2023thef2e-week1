<template>
  <section id="advocate" class="h-full w-full bg-gray">
    <div class="container h-full pt-[8rem] 2xl:pb-[10.0625rem]">
      <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div class="flex items-center justify-center xl:order-2">
          <div class="relative">
            <img class="w-[574px]" src="../assets/images/cat_bg.png" alt="Cat" />
            <div class="absolute left-[36.4%] top-[33.2%]">
              <WatchingYou v-slot="watchingYouProps" :active="true" :power="{ x: 8, y: 4 }">
                <div :className="watchingYouProps.className" :style="watchingYouProps.style">
                  <img
                    class="w-7 rounded-3xl sm:w-9"
                    src="../assets/images/cat_eye.png"
                    alt="cat_eye"
                  />
                </div>
              </WatchingYou>
            </div>
            <div class="absolute left-[56.8%] top-[33.2%]">
              <WatchingYou v-slot="watchingYouProps" :active="true" :power="{ x: 8, y: 4 }">
                <div :className="watchingYouProps.className" :style="watchingYouProps.style">
                  <img
                    class="w-7 rounded-3xl sm:w-9"
                    src="../assets/images/cat_eye.png"
                    alt="cat_eye"
                  />
                </div>
              </WatchingYou>
            </div>
          </div>
        </div>
        <ul class="font-bold xl:order-1">
          <li class="relative mb-10 h-[15rem]">
            <img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 sm:block hidden"
              :class="currentIndex === 0 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Lg-0.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 block sm:hidden"
              :class="currentIndex === 0 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Sm-0.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 sm:block hidden"
              :class="currentIndex === 1 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Lg-1.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 sm:hidden block "
              :class="currentIndex === 1 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Sm-1.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 sm:block hidden"
              :class="currentIndex === 2 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Lg-2.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 block sm:hidden"
              :class="currentIndex === 2 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Sm-2.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 sm:block hidden"
              :class="currentIndex === 3 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Lg-3.png"
              alt="slogan"
            /><img
              class="absolute left-2/4 -translate-x-2/4 transition duration-1000 ease-in-out
              xl:left-auto xl:translate-x-0 sm:hidden block"
              :class="currentIndex === 3 ? 'opacity-100' : 'opacity-0'"
              src="../assets/images/slogan/Sm-3.png"
              alt="slogan"
            />
          </li>
          <li class="mb-10">
            <img
              class="mx-auto h-[7.5rem] xl:mx-0 xl:ml-4"
              src="../assets/images/logo/Large.png"
              alt="logo"
            />
          </li>
          <li class="px-4 2xl:px-0">
            <p class="mb-4 text-xl text-black">
              我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。
            </p>
            <p class="mb-4 text-xl text-black">
              畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
              GDP 經濟帶來巨大效益。
            </p>
            <p class="mb-4 text-xl text-black">
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
            </p>
            <p class="mb-4 text-xl text-white">
              讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="relative h-[15rem] w-full bg-yellow-400">
      <div class="absolute h-[15rem] w-full rounded-b-full bg-gray"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import WatchingYou from 'vue-watching-you';

export default {
  name: 'AdvocatePage',
  props: ['myActiveIndex'],
  emits: ['openModal'],
  components: {
    WatchingYou,
  },
  setup(props: any, { emit }: any) {
    const activeIndex = ref(props.myActiveIndex);
    const hide = ref(false);

    watch(
      () => props.myActiveIndex,
      (value) => {
        if (activeIndex.value === 1 && value === 0) {
          setTimeout(() => {
            activeIndex.value = value;
          }, 600);
        } else {
          activeIndex.value = value;
        }
        if (activeIndex.value === 1) {
          if (value === 0) {
            setTimeout(() => {
              hide.value = false;
            }, 1000);
          } else {
            hide.value = false;
          }
        } else if (activeIndex.value === 2) {
          setTimeout(() => {
            hide.value = true;
          }, 1000);
        } else {
          hide.value = true;
        }
      },
    );

    const currentIndex = ref(0);

    const changeImage = () => {
      if (currentIndex.value === 3) {
        currentIndex.value = 0;
      }
      currentIndex.value += 1;
    };

    onMounted(() => {
      setInterval(changeImage, 2000);
    });

    function openModal() {
      emit('openModal');
    }

    return {
      activeIndex,
      hide,
      openModal,
      currentIndex,
    };
  },
};
</script>
