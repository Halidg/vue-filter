<template>
  <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
          <v-list three-line>
            <template v-for="(item, index) in users">
              <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
              ></v-subheader>

              <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
              ></v-divider>

              <v-list-item
                  v-else
                  :key="item.title"
              >
                <v-list-item-avatar>
                  <v-img class="t" @click="switchToggle(item.id)" :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content  v-if="curT === item.id">
                  <h2 class="t"  v-html="item.info"></h2>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
</template>

<script>
  export default {
  name: 'Users',
  props: {
    users: {
      type: Array,
    },
  },  
  data() {
    return {
      curT: null
    }
  },
  methods: {
    switchToggle(id) {
      this.curT = this.curT === id ? null : id
    }
  },
}
</script>

<style lang="scss">
.t{
  :hover{
    cursor: pointer;
  }
}
</style>