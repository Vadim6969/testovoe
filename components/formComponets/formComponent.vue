<template>
  <form class='form form-wrapper'>
    <input-component
      id='name'
      placeholder='Введите наименование товара'
      label='Наименование товара'
      required-val/>
    <textarea-component
      placeholder='Введите описание товара'
      id='textarea'
      label='Описание товара'/>
    <input-component
      id='name'
      placeholder='Введите ссылку'
      label='Ссылка на изображение товара'
      required-val/>
    <input-component
      id='name'
      placeholder='Введите цену'
      label='Цена товара'
      required-val/>
    <button-component class='form__btn'>
      Добавить товар
    </button-component>

  </form>
</template>

<script>
import InputComponent from '~/components/formComponets/inputComponent'
import TextareaComponent from '~/components/formComponets/textareaComponent'
import ButtonComponent from '~/components/formComponets/buttonComponent'
export default {
  name: 'FormComponent',
  components: { ButtonComponent, TextareaComponent, InputComponent }
}
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/global/_color.scss";

.form {
  padding: 24px;
  max-width: 332px;
  width: 100%;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__btn{
    margin-top: 8px;
  }
}
</style>
