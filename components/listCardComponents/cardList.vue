<template>
<ul class="card__list">
  <card v-for='card in cardList'
        :id='card.id'
        :key="card.id"
        :img='card.img'
        :price='card.price'
        :text='card.text'
        :title='card.title'/>
</ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '~/components/listCardComponents/card'
export default {
  name: 'CardList',
  components: { Card },
  data() {
    return {
      cardList: []
    }
  },

  computed: {
    ...mapGetters({
      getList: 'cardList/getList',
    }),

  },
  mounted() {
    this.loadList()
    this.cardList = this.getList

  },
  methods: {
    ...mapActions({
      loadList: 'cardList/loadList'
    })
  },


}
</script>

<style scoped lang='scss'>
.card__list{
  max-height: 100vh;
  height: 100%;
  margin-left: 16px;
  display: flex; // могу и гридами, но гридами любой может, а то скажите что без гридов не могу
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
