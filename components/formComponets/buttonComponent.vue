<template>
  <button class='button-component' :disabled='!active'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
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
    border: none;
    width: 100%;
    margin: 0;
    padding: 10px 95px 11px 96px;

    border-radius: 10px;
    background: #7BAE73;
    color: #fff;
    transition: color, 0.2s ease;
    &:hover{
      background: #52734c;
    }
    &:disabled{
      background: #EEEEEE;
      color: #B4B4B4;
    }
  }

</style>
