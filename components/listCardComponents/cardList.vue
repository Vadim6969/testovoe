<template>
<ul class="card__list">
  <li class='card'>
    <img class='card__img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU' alt=''>
    <div class='card__about'>
      <h3 class='card__title'>Наименование товара</h3>
      <p class='card__text'>Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
      <span class='card__price'>10 000 руб.</span>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  name: 'CardList'
}
</script>

<style scoped lang='scss'>
.card{
  max-width: 332px;
  width: 100%;
  max-height: 423px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__img{
    object-fit: cover;
    max-width: 100%;
    width: 100%;
    height: 100%;
    max-height: 200px;

  }
  &__about{
    padding: 16px 16px 24px 16px;
  }
  &__title{
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3F3F3F;
  }
  &__text{
    margin-bottom: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #3F3F3F;
  }
  &__price{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3F3F3F;
  }
}
</style>
