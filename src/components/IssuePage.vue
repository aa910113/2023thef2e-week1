<template>
  <section id="issue" class="relative h-full w-full bg-pink">
    <div class="hidden 2xl:block">
      <div class="absolute left-0 top-0 h-full w-48 bg-yellow-400"></div>
      <div
        class="absolute left-0 top-0 z-[11] h-full w-full rounded-l-full
        bg-pink transition duration-1000 ease-in-out"
        :class="{ '-translate-x-[90rem] rounded': activeIndex === 2 }"
      ></div>
    </div>
    <div class="relative z-[12] h-full" :class="{ hidden: hide }">
      <div class="container h-full 2xl:pb-[10.0625rem] pt-[5rem] px-4 2xl:px-0">
        <swiper
          :pagination="pagination"
          :modules="modules"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide
            ><ul
              class="mx-auto xl:mx-0 xl:grid grid-cols-2 gap-0 overflow-hidden rounded-3xl
              bg-white h-[998px] xl:h-full w-[351px] xl:w-full"
            >
              <li>
                <img src="../assets/images/policy/policy-01.png" alt="policy" />
              </li>
              <li class="px-6 xl:px-20 py-10 xl:pt-20 xl:pb-0">
                <p class="mb-2 xl:mb-4 text-[2rem] xl:text-[2.5rem] font-bold">為毛孩子謀福利！</p>
                <p class="mb-10 xl:mb-16 text-2xl xl:text-[2rem] text-orange">
                  推動寵物醫療保障方案
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">設立寵物醫療基金</p>
                <p class="mb-6">
                  每年撥款新台幣
                  <span class="font-bold text-orange">10</span>
                  億元，專款專用於<span class="font-bold">支援家庭寵物的醫療費用</span>
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">提供醫療補助</p>
                <p class="mb-6">
                  每隻寵物每年可獲得高達新台幣
                  <span class="font-bold text-orange">20,000</span>
                  元的醫療補助，<span class="font-bold">減輕飼主的經濟壓力</span>
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">合作動物醫院</p>
                <p>
                  目前已有和<span class="font-bold"
                    >超過 <span class="text-orange">200</span> 家動物醫院</span
                  >進行初步的合作討論
                </p>
              </li>
            </ul></swiper-slide
          >
          <swiper-slide
            ><ul
              class="mx-auto xl:mx-0 xl:grid grid-cols-2 gap-0 overflow-hidden rounded-3xl
              bg-white h-[998px] xl:h-full w-[351px] xl:w-full"
            >
              <li>
                <img src="../assets/images/policy/policy-02.png" alt="policy" />
              </li>
              <li class="px-6 xl:px-20 py-10 xl:pt-20 xl:pb-0">
                <p class="mb-2 xl:mb-4 text-[2rem] xl:text-[2.5rem] font-bold">打造休閒天堂！</p>
                <p class="mb-10 xl:mb-16 text-2xl xl:text-[2rem] text-orange">
                  推廣寵物休閒與娛樂場所
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">建立寵物公園</p>
                <p class="mb-6">
                  每年撥款新台幣
                  <span class="font-bold text-orange">5</span>
                  億元，用於在各大都市建立專屬的寵物公園。<br />根據初步規劃，預計在第一年內，將在全國範圍內建立至少
                  <span class="font-bold text-orange">10 </span
                  ><span class="font-bold">座寵物公園</span>。
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">推廣寵物友善商家</p>
                <p class="mb-6">
                  鼓勵商家提供<span class="font-bold">寵物友善</span
                  >的環境，並為參與的商家提供稅收優惠。<br />
                  預計在政策實施後的首年，將有<span class="font-bold">超過</span
                  ><span class="font-bold text-orange"> 500 </span
                  ><span class="font-bold">家商家</span>加入此計畫。
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">舉辦寵物活動和工作坊</p>
                <p>
                  與各大寵物社團和組織合作，每年舉辦至少
                  <span class="text-orange">5</span
                  ><span class="font-bold">場大型的寵物活動</span
                  >，包括寵物才藝比賽、飼養知識工作坊等。
                </p>
              </li>
            </ul></swiper-slide
          >
          <swiper-slide
            ><ul
              class="mx-auto xl:mx-0 xl:grid grid-cols-2 gap-0 overflow-hidden rounded-3xl
              bg-white h-[998px] xl:h-full w-[351px] xl:w-full"
            >
              <li>
                <img src="../assets/images/policy/policy-03.png" alt="policy" />
              </li>
              <li class="px-6 xl:px-20 py-10 xl:pt-20 xl:pb-0">
                <p class="mb-2 xl:mb-4 text-[2rem] xl:text-[2.5rem] font-bold">推廣寵物飼養教育</p>
                <p class="mb-10 xl:mb-16 text-2xl xl:text-[2rem] text-orange">讓愛更加專業</p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">建立寵物飼養教育中心</p>
                <p class="mb-6">
                  每年撥款新台幣
                  <span class="font-bold text-orange">10</span>
                  億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在<span
                    class="font-bold"
                    >全國至少
                    <span class="text-orange">5</span>
                    大城市設立教育中心。</span
                  >
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">推廣寵物飼養課程</p>
                <p class="mb-6">
                  與學校、社區組織和寵物社團合作，推出一系列<span class="font-bold"
                    >免費的寵物飼養課程</span
                  >。預計每年將有超過
                  <span class="font-bold text-orange">10,000</span>
                  名市民受益。
                </p>
                <p class="mb-2 text-2xl xl:text-[1.75rem] font-bold">製作教育資料</p>
                <p>
                  出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。
                </p>
              </li>
            </ul></swiper-slide
          >
        </swiper>
      </div>
    </div>
    <div class="relative w-full h-[15rem] bg-cyan">
      <div class="absolute w-full h-[15rem] bg-pink rounded-b-full"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  name: 'IssuePage',
  props: ['myActiveIndex'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props: any) {
    const activeIndex = ref(props.myActiveIndex);
    const hide = ref(false);

    watch(
      () => props.myActiveIndex,
      (value) => {
        if (activeIndex.value === 2 && value === 1) {
          setTimeout(() => {
            activeIndex.value = value;
          }, 600);
        } else {
          activeIndex.value = value;
        }
        if (activeIndex.value === 2) {
          if (value === 1) {
            setTimeout(() => {
              hide.value = false;
            }, 1000);
          } else {
            hide.value = false;
          }
        } else if (activeIndex.value === 3) {
          setTimeout(() => {
            hide.value = true;
          }, 1000);
        } else {
          hide.value = true;
        }
      },
    );
    const pagination = {
      clickable: true,
      renderBullet: (index: any, className: any) => `<span class="${className} w-20 h-2 border-2 border-black bg-black rounded-lg"></span>`,
    };
    return {
      activeIndex,
      hide,
      pagination,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>
