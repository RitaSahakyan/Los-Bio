<template>
    <section class="advantages">
      <h2 class="advantages_title">Наши преимущества</h2>
      <div class="advantages_grid">
        <div class="advantages_card" v-for="item in advantages" :key="item.id">
          <div class="advantages_card-container">
            <div class="advantages_card-header">
                <img class="advantages_icon" v-if="item.icon" :src="item.icon" alt="icon" />
                <h3 class="advantages_card-title">{{ item.title }}</h3>
            </div>
            <p class="advantages_card-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const BASE_URL = 'https://api.los-bio.ru'
  
  const { data: raw } = await useFetch(`${BASE_URL}/info/group/advantage`)
  
  const advantages = computed(() =>
    raw.value.map(item => {
      const parsed = JSON.parse(item.value)
      return {
        id: item.id,
        title: parsed.title,
        description: parsed.description,
        icon: parsed.icon 
        }
    })
  )
  </script>
  
  
  
  <style lang="scss" >
.advantages {
  max-width: 1170px;
  height: 643px;
  padding-top: 147px;
  box-sizing: border-box;
  background: transparent;
  margin: 0 auto; 
  margin-bottom: 147px;
  &_title {
    font-size: 42px;
    text-align: left;
    margin-bottom: 80px;
  }

  &_grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  &_card {
    display: flex;
    width: 569px;
    height: 265px;
    background-color: rgba(18, 31, 35, 0.8);
    border-radius: 15px;
    align-items: flex-start;

    &-container {
      display: flex;
      flex-direction: column; 
      margin: 20px 0 20px 50px;
    }

    &-header {
      display: flex;
      flex-direction: row;
      align-items: center; 
      gap: 30px; 
    }

    &-title {
      font-size: 30px;
      margin: 0;
      max-width: 352px;
    }

    &-description {
      font-size: 18px;
      margin-top: 12px;
      line-height: 1.4;
      max-width: 428px;
    }
  }

  &_icon {
    width: 75px;
    height: 75px;
    border-radius: 8px;
    flex-shrink: 0;
  }
}

  </style>
  