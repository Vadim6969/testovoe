<template>
  <header class='header'>
    <h1>Добавление товара</h1>
    <select>
      <option value="1">По умолчанию</option>
      <option value="2">от меньшего к большему</option>
      <option value="3">от большего к меньшему</option>
      <option value="4">По наименованию</option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped lang='scss'>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
