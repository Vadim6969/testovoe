<template>
  <div class='form__input-wrapper'>
    <div class='label-wrapper'>
      <label :for='id' class='form__label'>
        {{ label }}
      </label>
      <span v-if='requiredVal' class='circle'></span>
    </div>
    <input :id='id'
           :value='value'
           type='text'
           :name='id'
           class='form__input'
           :placeholder='placeholder'
           @input="input($event)"/>
  </div>
</template>

<script>
export default {
  name: 'InputComponent.vue',
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
    },
    maskPrice: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      value:''
    }
  },
  methods: {
    input(e) {
      if(this.maskPrice) {
        const val = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        this.value = val
        this.$emit('input', val)
      } else {
        this.$emit('input', e.target.value)
      }

    }
  }

}
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/global/_color.scss";

.label-wrapper {
  display: flex;
  .circle {
    display: block;
    width: 4px;
    height: 4px;
    background: #FF8484;
    border-radius: 4px;
  }
}

.form {
  &__label {
    margin-bottom: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: $color-dark;

  }

  &__input {
    border: none;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: $color-dark;
    padding: 10px 16px 11px 16px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &-wrapper {
      margin-bottom: 16px;
    }
  }
}
</style>
