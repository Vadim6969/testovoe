<template>
  <div class='select-wrapper'>
    <select v-model='selected'>
      <option v-for='option in options'
              :key='option.id'
              :value='option.id'>
        {{ option.name }}
      </option>

    </select>
    <div class='select-arrow'></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SelectComponent',

  data() {
    return {
      options: [],
      selected: 1
    }
  },
  computed: {
    ...mapGetters({
      getOptions: 'cardList/getSortOptions',
    })
  },
  watch: {
    selected(v) {
      this.sorted(v)
      console.log(v)

    }
  },
  mounted() {
    this.options = this.getOptions
  },
  methods: {
    ...mapActions({
      sorted: 'cardList/sorted'
    }),
  },



}
</script>

<style scoped lang='scss'>
.select-wrapper {
  width: auto;
  position: relative;
  height: 36px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.select-wrapper > select {
  cursor: pointer;
  padding: 10px 28px 11px 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  width: 100%;
  height: 37px;
  background: transparent;
  border: 0;
  appearance: none;
  z-index: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select-wrapper > select::-ms-expand {
  display: none;
}

.select-arrow {
  position: absolute;
  content: "";
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background-image: url("~@/assets/img/icons/select-arrow.svg");
  width: 10px;
  height: 5px;
  z-index: 1;
  background-repeat: no-repeat;
  object-fit: cover;

}

</style>
