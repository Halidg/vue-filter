<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      <div class="select">
        <Select @input="clean(variant)" v-model='variant' :placeholder="'выберите страну'" :options="items"></Select>
        <Select @input="clean(score)" class="select__position" v-model='score' :placeholder="'выберите по очкам'" :options="scores"></Select>
      </div>
      <Users :users="users"></Users>
    </v-row>
  </v-container>
</template>

<script>
import Users from '../Ui/Users.vue'
import Select from '../Ui/Select.vue'

  export default {
    name: 'ContentBlock',
    components: {
      Users,
      Select
    },
    data: () => ({
      variant: '',
      score: '',
      
    }),
    methods: {
      clean(field) {
        if (field === '> 20' || field === '< 10') {
          return this.variant = ''
        }
        return this.score = ''
      }
    },
    computed: {
      users() {
        const usersRussia = this.$store.getters.usersRussia
        const usersUsa = this.$store.getters.usersUsa
        const lowerScore = this.$store.getters.lowerScore
        const highScore = this.$store.getters.highScore
        
        if (this.variant === 'usa') {
          return usersUsa
        }

        if (this.variant === 'russia') {
          return usersRussia
        }
       
        if (this.score === '> 20') {

          return highScore
        }

        if(this.score === '< 10') {
          return lowerScore
        }
        return this.$store.getters.Users
      },
      items() {
        return this.$store.getters.Items
      },
      scores() {
        return this.$store.getters.scores
      },
    }
  }
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  &__position {
    margin-top: 55px;
  }
}
</style>