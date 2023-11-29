<template>
  <section id="donate" class="relative h-full w-full bg-white">
    <div class="hidden 2xl:block">
      <div class="absolute left-0 top-0 h-full w-48 bg-cyan"></div>
      <div
        class="absolute left-0 top-0 z-[13] h-full w-full rounded-l-full bg-white
        transition duration-700 ease-in-out"
        :class="{ '-translate-x-[90rem] rounded': activeIndex === 4 }"
      ></div>
    </div>
    <div class="relative z-[14] h-full" :class="{ hidden: hide }">
      <div class="container h-full pb-[10.0625rem] pt-[5rem]">
        <p class="mb-2 text-center font-bold text-secondary">目前小額贊助總金額</p>
        <div class="text-center text-[2rem] font-bold text-orange">
          <div
            class="inline-block rounded-full px-8 py-4 shadow-[4px_4px_5px_0_rgba(0,0,0,0.2)inset]"
          >
            <span>987 , 655 , 873</span>
          </div>
        </div>
        <ul
          class="flex xl:grid grid-cols-4 gap-6 overflow-x-scroll xl:overflow-auto ml-[20%] xl:ml-0"
        >
          <li class="group relative pb-5 text-center text-secondary">
            <div
              class="absolute inset-x-0 top-[40px] mx-auto h-[19.125rem] w-[19.125rem] rounded-full
              bg-gray-400"
            ></div>
            <div
              class="relative mx-auto h-[21.6rem] w-[19.125rem] overflow-hidden
              rounded-b-[9.5625rem] pt-[3.375rem]"
            >
              <img
                class="absolute -top-6 min-w-[20rem] -translate-y-1 sm:translate-y-44 transition
                duration-700 ease-in-out group-hover:-translate-y-1"
                src="../assets/images/donate/donate-1.png"
                alt="donate"
              />
            </div>
            <p class="mb-4 mt-6 text-[2rem] font-bold">喵星人之友</p>
            <p class="mb-2">捐款</p>
            <p class="mb-2 text-2xl font-bold">新台幣 <span class="text-orange">600</span> 元</p>
            <p class="text-xl">已有 9975 人贊助</p>
          </li>
          <li class="group relative pb-5 text-center text-secondary">
            <div
              class="absolute inset-x-0 top-[40px] mx-auto h-[19.125rem] w-[19.125rem] rounded-full
              bg-cyan"
            ></div>
            <div
              class="relative mx-auto h-[21.6rem] w-[19.125rem] overflow-hidden
              rounded-b-[9.5625rem] pt-[3.375rem]"
            >
              <img
                class="absolute -top-6 min-w-[20rem] translate-y-3 sm:translate-y-52 transition
                duration-700 ease-in-out group-hover:translate-y-3"
                src="../assets/images/donate/donate-2.png"
                alt="donate"
              />
            </div>
            <p class="mb-4 mt-6 text-[2rem] font-bold">喵星大使</p>
            <p class="mb-2">捐款</p>
            <p class="mb-2 text-2xl font-bold">新台幣 <span class="text-orange">6,000</span> 元</p>
            <p class="text-xl">已有 2000 人贊助</p>
          </li>
          <li class="group relative pb-5 text-center text-secondary">
            <div
              class="absolute inset-x-0 top-[40px] mx-auto h-[19.125rem] w-[19.125rem] rounded-full
              bg-pink"
            ></div>
            <div
              class="relative mx-auto h-[21.6rem] w-[19.125rem] overflow-hidden
              rounded-b-[9.5625rem] pt-[3.375rem]"
            >
              <img
                class="absolute -top-6 min-w-[20rem] translate-y-7 sm:translate-y-56 transition
                duration-700 ease-in-out group-hover:translate-y-7"
                src="../assets/images/donate/donate-3.png"
                alt="donate"
              />
            </div>
            <p class="mb-4 mt-6 text-[2rem] font-bold">喵星傳奇</p>
            <p class="mb-2">捐款</p>
            <p class="mb-2 text-2xl font-bold">新台幣 <span class="text-orange">60,000</span> 元</p>
            <p class="text-xl">已有 999 人贊助</p>
          </li>
          <li class="group relative pb-5 text-center text-secondary">
            <div
              class="absolute inset-x-0 top-[40px] mx-auto h-[19.125rem] w-[19.125rem] rounded-full
              bg-yellow-400"
            ></div>
            <div
              class="relative mx-auto h-[21.6rem] w-[19.125rem] overflow-hidden
              rounded-b-[9.5625rem] pt-[3.375rem]"
            >
              <img
                class="absolute -top-6 min-w-[20rem] translate-y-2 sm:translate-y-56 transition
                duration-700 ease-in-out group-hover:translate-y-2"
                src="../assets/images/donate/donate-4.png"
                alt="donate"
              />
            </div>
            <p class="mb-4 mt-6 text-[2rem] font-bold">喵星本喵</p>
            <p class="mb-2">捐款</p>
            <p class="text-2xl font-bold text-orange">自訂金額</p>
          </li>
        </ul>
        <div class="mt-5 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            class="flex w-[13.625rem] items-center justify-center rounded-full border-2
            border-black bg-white px-3 py-2 text-black transition duration-700 ease-in-out
            hover:bg-black hover:text-white"
          >
            <span class="material-icons mr-3 text-xl"> attach_money </span> 前往捐款
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

export default {
  name: 'IssuePage',
  props: ['myActiveIndex'],
  setup(props: any) {
    const activeIndex = ref(props.myActiveIndex);
    const hide = ref(false);

    watch(
      () => props.myActiveIndex,
      (value) => {
        if (activeIndex.value === 4 && value === 3) {
          setTimeout(() => {
            activeIndex.value = value;
          }, 600);
        } else {
          activeIndex.value = value;
        }
        if (activeIndex.value === 4) {
          if (value === 3) {
            setTimeout(() => {
              hide.value = false;
            }, 1000);
          } else {
            hide.value = false;
          }
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
