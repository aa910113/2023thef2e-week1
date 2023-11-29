<template>
  <section id="activity" class="relative h-full w-full bg-yellow-400">
    <div class="hidden 2xl:block">
      <div class="absolute left-0 top-0 h-full w-48 bg-gray"></div>
      <div
        class="z-10 absolute left-0 top-0 h-full w-full rounded-l-full bg-yellow-400
        transition duration-1000 ease-in-out"
        :class="{ '-translate-x-[90rem] rounded': activeIndex === 1 }"
      ></div>
    </div>
    <div class="relative z-[11] h-full" :class="{ hidden: hide }">
      <div class="container h-full 2xl:pb-[10.0625rem] pt-[5rem]">
        <ul class="lg:grid lg:grid-cols-1 xl:grid-cols-8 gap-6">
          <li
            class="group col-span-2 col-start-2 rounded-full border border-yellow-400
            lg:border-white bg-white lg:bg-yellow-400 px-6 pt-10 pb-5 transition duration-700
            ease-in-out hover:bg-white shadow-inner lg:shadow-none hover:shadow-inner
            hover:border-yellow-400 max-w-[351px] h-[720px] xl:h-auto mx-auto"
          >
            <div class="flex justify-center">
              <img
                class="w-[19.125rem] rounded-full transition duration-700 ease-in-out border-8
                border-yellow-400 lg:border-0 group-hover:border-8 group-hover:border-yellow-400"
                src="../assets/images/about/about-01.png"
                alt="about"
              />
            </div>
            <div>
              <p class="my-4 flex justify-center text-xl font-bold">
                <span
                  class="material-icons transition duration-700 ease-in-out text-yellow-400
                  lg:text-black group-hover:text-yellow-400"
                >
                  pets </span
                ><span>2023/12/26</span>
              </p>
              <p class="mb-4 text-center text-xl font-bold">
                <span class="mb-2 block">參與台北寵物論壇</span
                ><span class="block">爭取貓咪友善環境</span>
              </p>
              <p class="mb-6 px-10">
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳<span
                  class="font-bold"
                  >「貓咪至上」</span
                >的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
              </p>
            </div>
          </li>
          <li
            class="group col-span-2 col-start-4 rounded-full border border-yellow-400
            lg:border-white bg-white lg:bg-yellow-400 px-6 pt-10 pb-5 transition duration-700
            ease-in-out hover:bg-white shadow-inner lg:shadow-none hover:shadow-inner
            hover:border-yellow-400 max-w-[351px] h-[720px] xl:h-auto mx-auto my-6 lg:my-0"
          >
            <div class="flex justify-center">
              <img
                class="w-[19.125rem] rounded-full transition duration-700 ease-in-out border-8
                border-yellow-400 lg:border-0 group-hover:border-8 group-hover:border-yellow-400"
                src="../assets/images/about/about-02.png"
                alt="about"
              />
            </div>
            <div>
              <p class="my-4 flex justify-center text-xl font-bold">
                <span
                  class="material-icons transition duration-700 ease-in-out text-yellow-400
                  lg:text-black group-hover:text-yellow-400 mr-4"
                >
                  pets </span
                ><span>2023/12/24</span>
              </p>
              <p class="mb-4 text-center text-xl font-bold">
                <span class="mb-2 block">掃街模式開啟！</span
                ><span class="block">帶著你的貓耳，來和我一起走！</span>
              </p>
              <p class="mb-6 px-10">
                街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進<span
                  class="font-bold"
                  >「貓咪友善環境」</span
                >政策的決心。
              </p>
            </div>
          </li>
          <li
            class="group col-span-2 col-start-6 rounded-full border border-yellow-400
            lg:border-white bg-white lg:bg-yellow-400 px-6 pt-10 pb-5
            transition duration-700 ease-in-out hover:bg-white shadow-inner lg:shadow-none
            hover:shadow-inner hover:border-yellow-400 max-w-[351px] h-[720px] xl:h-auto mx-auto"
          >
            <div class="flex justify-center">
              <img
                class="w-[19.125rem] rounded-full transition duration-700 ease-in-out border-8
                border-yellow-400 lg:border-0 group-hover:border-8 group-hover:border-yellow-400"
                src="../assets/images/about/about-03.png"
                alt="about"
              />
            </div>
            <div>
              <p class="my-4 flex justify-center text-xl font-bold">
                <span
                  class="material-icons transition duration-700 ease-in-out text-yellow-400
                  lg:text-black group-hover:text-yellow-400 mr-4"
                >
                  pets </span
                ><span>2023/12/20</span>
              </p>
              <p class="mb-4 text-center text-xl font-bold">
                <span class="mb-2 block">收容所模特兒大比拼！</span>
              </p>
              <p class="mb-6 px-10">
                今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的<span
                  class="font-bold"
                  >「模特兒走秀」</span
                >！
              </p>
            </div>
          </li>
        </ul>
        <div class="flex justify-center">
          <button
            class="mt-10 lg:mt-4 flex items-center rounded-full border border-black w-[196px]
            text-center justify-center transition duration-700 ease-in-out bg-yellow-400 px-3 py-2
            font-bold hover:border-white hover:bg-black hover:text-white"
          >
            MORE <span class="material-icons ml-3"> chevron_right </span>
          </button>
        </div>
      </div>
    </div>
    <div class="relative w-full h-[15rem] bg-pink">
      <div class="absolute w-full h-[15rem] bg-yellow-400 rounded-b-full"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

export default {
  name: 'ActivityPage',
  props: ['myActiveIndex'],
  setup(props: any) {
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

    return {
      activeIndex,
      hide,
    };
  },
};
</script>
