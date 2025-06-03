<template>
  <header class="header">
    <div class="header_top">
        <a href="#" class="header_top-item"><LucideMapPin size="24" color="#1078D7"/> г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204</a>
        <a href="#" class="header_top-item"><LucidePhone size="24" color="#1078D7"/> +7 (391) 209 57-57</a>
        <a href="#" class="header_top-item"><LucidePhone size="24" color="#1078D7"/> +7 (391) 215 54-33</a>
        <a href="#" class="header_top-item"><LucideMail size="24" color="#1078D7"/> los-bio@mail.ru</a>
        <a href="#" class="header_top-item"><LucideRedo2 size="24" color="#1078D7"/> Заказать звонок</a>
    </div>
    <div class="header_main">
      <Logo class="w-6 h-6 text-blue-600 header_main-logo" />
      <div class="header_main-item">
        <a href="#" class="header_main-items"> О компании</a>
        <a href="#" class="header_main-items">Проекты</a>
        <a href="#" class="header_main-items">Каталог <LucideChevronDown size="15" color="#ffffff" style="opacity: 0.6"/> </a>
        <a href="#" class="header_main-items">Контакты</a>
      </div>
      <button class="header_main-btn">Получить КП</button>
    </div>
  </header>
</template>

<script setup>
import Logo from '~/assets/icons/Logo.svg'
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  flex-direction: column;
  height: 138px;
  gap: 18px;
  &_top{
    display: flex;
    flex-direction: row;
    min-width: 1440px;
    gap:82px;
    height: 42px;
    font-size: 13px;
    align-items: center;
    border-bottom:1.5px solid #ffffff3f;
    &-item {
      height: 24px;
      text-align: center;
    }
  }
  &_main{
    display: flex;
    flex-direction: row;
    min-width: 1170px;
    margin-left: 135px;
    gap: 168.5px;
    align-items: center;
    &-item{
      display: flex;
      gap:56px;
      font-size: 16px;
    }
    &-logo{
      width: 240px;
      height: 58px;
    }
  }
  
  &_main-btn{
    background-color: #1078D7;
    width: 122px;
    height: 36px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
  }
}
.header_top-item:first-child{
      margin-left: 135px;
}
.header_top a{
  display: inline-flex;
  align-items: center;
}
.header_main a{
  display: inline-flex;
  align-items: center;
}

</style>