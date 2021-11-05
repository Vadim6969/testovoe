<template>
  <div class="wrapper">
    <form-component/>
    <card-list class="card-list"/>
  </div>

</template>

<script>
import FormComponent from '~/components/formComponets/formComponent'
import CardList from '~/components/listCardComponents/cardList'
export default {
  components: { CardList, FormComponent },
  layout: 'default',
}
</script>
<style scoped lang='scss'>
.wrapper{
  display: flex;
}

</style>
