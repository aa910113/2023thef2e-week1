<template>
  <footer class="absolute bottom-0 left-0 z-10 hidden w-screen font-bold text-secondary 2xl:block">
    <div class="container flex justify-between py-5">
      <div>
        <img src="../../assets/images/logo/gray-logo.svg" alt="logo" />
        <p class="mt-4 text-xs">
          Copyright © 2023 喵立翰版權所有 ｜Miao Li-Han All Rights Reserved.
        </p>
      </div>
      <div class="flex flex-col justify-between">
        <div class="flex">
          <ul class="me-[2.125rem] flex">
            <li class="group mr-6 px-3 py-2">
              <a href="#" class="flex items-center"
                ><span class="material-icons text-2xl"> diversity_3 </span
                ><span class="ms-3 transition duration-500 ease-in-out group-hover:text-primary"
                  >喵的主張</span
                ></a
              >
            </li>
            <li class="group mr-6 px-3 py-2">
              <a href="#" class="flex items-center"
                ><span class="material-icons text-2xl"> today </span
                ><span class="ms-3 transition duration-500 ease-in-out group-hover:text-primary"
                  >最新活動</span
                ></a
              >
            </li>
            <li class="group mr-6 px-3 py-2">
              <a href="#" class="flex items-center"
                ><span class="material-icons text-2xl"> public </span
                ><span class="ms-3 transition duration-500 ease-in-out group-hover:text-primary"
                  >政策議題</span
                ></a
              >
            </li>
            <li class="group mr-6 px-3 py-2">
              <a href="#" class="flex items-center"
                ><span class="material-icons text-2xl"> mail </span
                ><span class="ms-3 transition duration-500 ease-in-out group-hover:text-primary"
                  >民眾服務信箱</span
                ></a
              >
            </li>
            <li class="group px-3 py-2">
              <a href="#" class="flex items-center"
                ><span class="material-icons text-2xl"> attach_money </span
                ><span class="ms-3 transition duration-500 ease-in-out group-hover:text-primary"
                  >小額捐款</span
                ></a
              >
            </li>
          </ul>
          <ul class="flex">
            <li class="px-3 py-2">
              <a href="#"
                ><img
                  class="me-4 w-6"
                  src="../../assets/images/socialMedia/Facebook.svg"
                  alt="Facebook"
              /></a>
            </li>
            <li class="px-3 py-2">
              <a href="#"
                ><img
                  class="me-4 w-6"
                  src="../../assets/images/socialMedia/Instagram.svg"
                  alt="Instagram"
              /></a>
            </li>
            <li class="px-3 py-2">
              <a href="#"
                ><img
                  class="me-4 w-6"
                  src="../../assets/images/socialMedia/Youtube.svg"
                  alt="Youtube"
              /></a>
            </li>
          </ul>
        </div>
        <ul class="flex justify-between">
          <li class="group flex items-center">
            <span class="material-icons me-4 text-2xl"> call </span
            ><span class="transition duration-500 ease-in-out group-hover:text-black"
              >( 02 ) 888 - 5678</span
            >
          </li>
          <li class="h-100 w-0.5 bg-secondary"></li>
          <li class="group flex items-center">
            <span class="material-icons me-4 text-2xl"> mail </span
            ><span class="transition duration-500 ease-in-out group-hover:text-black"
              >meowoffice@linmeow.tw</span
            >
          </li>
          <li class="h-100 w-0.5 bg-secondary"></li>
          <li class="group flex items-center">
            <span class="material-icons me-4 text-2xl"> home </span
            ><span class="transition duration-500 ease-in-out group-hover:text-black"
              >喵星區，毛茸茸大道88號，喵喵大樓3樓</span
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <footer class="fixed bottom-0 left-0 z-40 w-screen bg-white 2xl:hidden">
    <div class="container px-[0.8438rem] py-5">
      <ul class="flex w-full justify-between">
        <li class="mr-6 px-3 py-2">
          <button type="button" @click="handleScroll('advocate')">
            <span class="material-icons text-2xl"> diversity_3 </span>
          </button>
        </li>
        <li class="mr-6 px-3 py-2">
          <button type="button" @click="handleScroll('activity')">
            <span class="material-icons text-2xl"> today </span>
          </button>
        </li>
        <li class="mr-6 px-3 py-2">
          <button type="button" @click="handleScroll('issue')">
            <span class="material-icons text-2xl"> public </span>
          </button>
        </li>
        <li class="mr-6 px-3 py-2">
          <button type="button" @click="handleScroll('serve')">
            <span class="material-icons text-2xl"> mail </span>
          </button>
        </li>
        <li class="rounded-full bg-black px-3 py-2">
          <button type="button" @click="handleScroll('donate')">
            <span class="material-icons text-2xl text-primary"> attach_money </span>
          </button>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
  emits: ['scrollToTop'],
  setup(props: any, { emit }: any) {
    const handleScroll = (target: string) => {
      emit('scrollToTop', target);
    };

    return {
      handleScroll,
    };
  },
};
</script>
