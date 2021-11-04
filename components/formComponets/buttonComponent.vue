<template>
  <button class='btn-component'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent'
}
</script>

<style scoped lang='scss'>
  button{
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
    border: none;
    width: 100%;
    margin: 0;
    padding: 10px 95px 11px 96px;
    background: #EEEEEE;
    border-radius: 10px;
  }
</style>
