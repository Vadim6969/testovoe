<template>
  <form class='form form-wrapper'
        @submit.prevent="formSubmit">
    <input-component
      id='name'
      v-model='form.title'
      placeholder='Введите наименование товара'
      label='Наименование товара'
      required-val/>
    <textarea-component
      id='textarea'
      v-model='form.text'
      placeholder='Введите описание товара'
      label='Описание товара'
    />
    <input-component
      id='link'
      v-model='form.img'
      placeholder='Введите ссылку'
      label='Ссылка на изображение товара'
      required-val/>
    <input-component
      id='price'
      v-model='form.price'
      placeholder='Введите цену'
      label='Цена товара'
      mask-price
      required-val/>
    <button-component :active='formValid' class='form__btn'>
      Добавить товар
    </button-component>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
import InputComponent from '~/components/formComponets/inputComponent'
import TextareaComponent from '~/components/formComponets/textareaComponent'
import ButtonComponent from '~/components/formComponets/buttonComponent'
export default {
  name: 'FormComponent',
  components: { ButtonComponent, TextareaComponent, InputComponent },
  data() {
    return {
      form: {
        id: Date.now(),
        title: "",
        text: "",
        img: "",
        price: "",
      },
      formValid: false
    }
  },
  watch: {
    form: {
      handler(val){
        this.formValid = !!(val.title && val.price && val.img);
      },
      deep: true
    }
  },
  methods: {
    ...mapActions({
      addCard: 'cardList/addCard'
    }),
    formSubmit(){
     this.addCard(this.form)
    }
  }

}
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/global/_color.scss";

.form {
  padding: 24px;
  max-width: 332px;
  width: 100%;
  height: 100%;
  max-height: 440px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__btn{
    margin-top: 8px;
  }
}
</style>
