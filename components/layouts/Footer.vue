<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__column footer__brand">
                <Logo class="footer__svg"/>
            <p class="footer__description">ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</p>
            <p><span>ИНН:</span> 2463123719   <span>КПП:</span> 246301001
                <span>ОГРН:</span> 1212400008688</p>
            </div>
            <div class="footer__column footer__company">
            <h3 class="footer__title">Компания</h3>
            <ul class="footer__list">
                <li class="footer__item"><a href="#" class="footer__link">О компании</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Проекты</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Каталог</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Контакты</a></li>
            </ul>
            </div>
            <div class="footer__column footer__catalog">
            <h3 class="footer__title">Каталог</h3>
            <ul class="footer__list">
                <li class="footer__item"><a href="#" class="footer__link">КНС</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Ёмкости</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Ливневые 
                    очистные-сооружения</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Хозяйственно-бытовые очистные сооружения</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Комплектующие</a></li>
            </ul>
            </div>
            <div class="footer__column footer__contacts">
            <h3 class="footer__title">Контакты</h3>
            <ul class="footer__list">
                <li class="footer__item"><a href="#" class="footer__link"><LucidePhone size="15 " color="#1078D7"/> +7 (391) 209 57-57</a></li>
                <li class="footer__item"><a href="#" class="footer__link"><LucidePhone size="15 " color="#1078D7"/> +7 (391) 215 54-33</a></li>
                <li class="footer__item"><a href="#" class="footer__link"><LucideMail size="15 " color="#1078D7"/> los-bio@mail.ru</a></li>
                <li class="footer__item"><a href="#" class="footer__link"><LucideRedo2 size="15 " color="#1078D7"/> Заказать звонок</a></li>
                <li class="footer__item"><button class="footer__btn">Получить КП</button></li>
            </ul>
            </div>
        </div>
    </footer>

  </template>
  
  <script setup>
import Logo from '~/assets/icons/Logo.svg'
</script>
  
<style lang="scss">
.footer {
  padding: 89px 0;

  &__container {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 172px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__brand {
    height: 229px;
    font-size: 14px;

   .footer__svg {
      width: 240px;
      height: 58px;
    }

    .footer__description {
      margin-top: 20px;
      font-size: 14px;
    }

    p {
      margin-top: 14px;

      span {
        font-weight: 500;
        color: #ffffff5f;
      }
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    line-height: 141%;
  }

  &__item {
    font-size: 16px;
  }

  &__link {
    color: inherit;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
}
.footer__contacts{
    .footer__list{
        width: 150px;
    }
}
.footer__btn{
    background-color: #1078D7;
    width: 137px;
    height: 36px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
  }
</style>
