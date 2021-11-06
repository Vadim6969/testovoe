<template>
  <div class="wrapper">
    <header-component/>
    <main class="main">
      <form-component/>
      <card-list class="card-list"/>
    </main>
  </div>

</template>

<script>
import FormComponent from '~/components/formComponets/formComponent'
import CardList from '~/components/listCardComponents/cardList'
import HeaderComponent from '~/components/headerComponent'
export default {
  components: { HeaderComponent, CardList, FormComponent },
  layout: 'default',
}
</script>
<style scoped lang='scss'>
.main{
  display: flex;
}


</style>
