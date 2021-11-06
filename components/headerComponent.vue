<template>
  <header class='header'>
    <h1>Добавление товара</h1>
    <select-component/>
  </header>
</template>

<script>
import SelectComponent from '~/components/selectComponent'
export default {
  name: 'HeaderComponent',
  components: { SelectComponent }
}
</script>

<style scoped lang='scss'>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
