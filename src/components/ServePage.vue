<template>
  <section id="serve" class="relative h-full w-full bg-cyan">
    <div class="hidden 2xl:block">
      <div class="absolute left-0 top-0 h-full w-48 bg-pink"></div>
      <div
        class="absolute left-0 top-0 z-[12] h-full w-full rounded-l-full bg-cyan
        transition duration-700 ease-in-out"
        :class="{ '-translate-x-[90rem] rounded': activeIndex === 3 }"
      ></div>
    </div>
    <div class="relative z-[13] h-full" :class="{ hidden: hide }">
      <div class="container h-full px-3 pt-[5rem] 2xl:pb-[10.0625rem]">
        <div class="h-full w-full rounded-3xl bg-[#fff] p-10 shadow-[4px_4px_5px_rgba(0,0,0,0.2)]">
          <p class="mb-4 text-center text-2xl font-bold text-cyan-darkest md:text-[2.5rem]">
            您的聲音，我們的行動！
          </p>
          <p class="mb-2 text-center">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。</p>
          <p class="mb-4 text-center">
            無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </p>
          <form>
            <div class="space-y-12">
              <div class="pb-12">
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="name" class="block leading-6 text-gray-900"
                      >您的姓名
                      <div class="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autocomplete="given-name"
                          placeholder="請填寫姓名"
                          class="cyan-9FC2C5 block w-full rounded-md border px-3 py-2
                          text-gray-900 ring-1 ring-inset ring-cyan-9FC2C5 focus:ring-2
                          focus:ring-inset focus:ring-cyan-9FC2C5"
                        />
                      </div>
                    </label>
                  </div>
                  <div class="sm:col-span-3">
                    <label for="phone" class="block leading-6 text-gray-900"
                      >您的手機
                      <div class="mt-2">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autocomplete="given-phone"
                          placeholder="請填寫手機"
                          class="cyan-9FC2C5 block w-full rounded-md border px-3 py-2
                          text-gray-900 ring-1 ring-inset ring-cyan-9FC2C5 focus:ring-2
                          focus:ring-inset focus:ring-cyan-9FC2C5"
                        />
                      </div>
                    </label>
                  </div>
                  <div class="col-span-full">
                    <label for="e-mail" class="block leading-6 text-gray-900"
                      >您的 Email
                      <div class="mt-2">
                        <input
                          type="text"
                          name="e-mail"
                          id="e-mail"
                          autocomplete="given-Email"
                          placeholder="請填寫 Email"
                          class="cyan-9FC2C5 block w-full rounded-md border px-3 py-2
                          text-gray-900 ring-1 ring-inset ring-cyan-9FC2C5 focus:ring-2
                          focus:ring-inset focus:ring-cyan-9FC2C5"
                        />
                      </div>
                    </label>
                  </div>
                  <div class="col-span-full">
                    <label for="suggestion" class="block leading-6 text-gray-900">
                      您的建言
                      <div class="mt-2">
                        <textarea
                          id="suggestion"
                          name="suggestion"
                          rows="3"
                          placeholder="請填寫建言"
                          class="cyan-9FC2C5 block w-full rounded-md border px-3 py-2
                          text-gray-900 ring-1 ring-inset ring-cyan-9FC2C5 focus:ring-2
                          focus:ring-inset focus:ring-cyan-9FC2C5"
                        ></textarea>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                class="flex w-[13.625rem] items-center justify-center rounded-full border-2
                border-black bg-white px-3 py-2 text-black
                transition duration-700 ease-in-out hover:bg-black hover:text-white"
                @click="openModal"
              >
                <span class="material-icons mr-3 text-xl"> mail </span>
                送出意見
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="relative h-[15rem] w-full bg-white">
      <div class="absolute h-[15rem] w-full rounded-b-full bg-cyan"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

export default {
  name: 'ServePage',
  props: ['myActiveIndex'],
  emits: ['openModal'],
  setup(props: any, { emit }: any) {
    const activeIndex = ref(props.myActiveIndex);
    const hide = ref(false);

    watch(
      () => props.myActiveIndex,
      (value) => {
        if (activeIndex.value === 3 && value === 2) {
          setTimeout(() => {
            activeIndex.value = value;
          }, 600);
        } else {
          activeIndex.value = value;
        }
        if (activeIndex.value === 3) {
          if (value === 2) {
            setTimeout(() => {
              hide.value = false;
            }, 1000);
          } else {
            hide.value = false;
          }
        } else if (activeIndex.value === 4) {
          setTimeout(() => {
            hide.value = true;
          }, 1000);
        } else {
          hide.value = true;
        }
      },
    );

    function openModal() {
      emit('openModal');
    }

    return {
      activeIndex,
      hide,
      openModal,
    };
  },
};
</script>
