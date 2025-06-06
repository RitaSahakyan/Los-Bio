<template>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка загрузки</div>
    <div v-else class="slider-wrapper">
      <Swiper
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000 }"
        :loop="true"
        class="swiper-container"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="slide.id">
          <div class="slide-card">
            <div class="text-block">
              <h2 class="slide-title">{{ slide.title }}</h2>
              <p class="slide-description">{{ slide.description }}</p>
              <a
                class="slide-button"
                :href="slide.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ slide.btnText }}
              </a>
            </div>
            <div class="image-block">
              <img
                class="slide-image"
                :src="localImages[index]"
                :alt="slide.title"
                width="436"
                height="436"
                loading="lazy"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </template>
  
  <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]
  
  const { data: rawSlides, pending, error } = await useFetch(
    'https://api.los-bio.ru/info/group/slide'
  )
  
  const slides = computed(() =>
    rawSlides.value.map(item => {
      const parsed = JSON.parse(item.value)
      return {
        ...parsed,
        id: item.id,
      }
    })
  )
  
  const localImages = [
    '/assets/images/slide1.webp',
    '/assets/images/slide2.webp',
    '/assets/images/slide3.webp',
  ]
  </script>
  
  <style >
.slider-wrapper {
  width: 1048px;
  height: 533px;
  margin: 0 auto; 
  position: relative;
  padding-bottom: 40px; 
  box-sizing: border-box;
}
.swiper-container {
  height: 100%;
  padding-bottom: 40px; 
}

.slide-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 493px; 
}
  .text-block {
    display: flex;
    flex-direction: column;
    width: 577px;
    max-width: 577px;
  }
  
  .slide-title {
    font-size: 60px;
    margin: 0;
    line-height: 1.1;
  }
  
  .slide-description {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 1.4;
    color: #333;
  }
  .slide-button {
    display: inline-block;
    margin-left: 0px;
    width: 238px;
    height: 57px;
    background-color: #007bff;
    color: white;
    font-weight: 600;
    font-size: 18px;
    line-height: 57px;
    text-align: center;
    border-radius: 8px;
    text-decoration: none;
    user-select: none;
    transition: background-color 0.3s ease;
  }
  
  .slide-button:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
  
  .image-block {
    width: 436px;
    height: 436px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slide-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
.swiper-pagination {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 100px;
  height: 34px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
}


.swiper-pagination-bullet:hover {
  background-color: rgba(16, 120, 215, 0.6);
  cursor: pointer;
}


.swiper-pagination-bullet-active {
  width: 34px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}


.swiper-pagination-bullet-active::before {
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #1078d7;
}
  </style>
  