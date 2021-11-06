<template>
  <div class="form__textarea-wrapper">
    <label :for='id' class='form__label'>
      <span v-if='requiredVal' class='circle'></span>
      {{ label }}
    </label>
    <textarea
      :id='id'
      class='form__textarea'
      :placeholder='placeholder'
      @input="$emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'TextareaComponent',
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: [String, Number],
      required: true,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    requiredVal: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped lang='scss'>
@import "~@/assets/scss/global/_color.scss";

.form {

  &__label {
    display: block;
    margin-bottom: 4px;
    position: relative;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: $color-dark;
  }
  &__textarea {
    resize: none;
    border: none;
    width: 100%;
    min-height: 108px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: $color-dark;
    padding: 10px 16px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  &__textarea-wrapper{
    margin-bottom: 16px;
  }
}
</style>
