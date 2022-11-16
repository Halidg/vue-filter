import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users:  [
      { header: 'List' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        country: 'russia',
        id: 1,
        info: 'random addres',
        score: 24,
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        country: 'russia',
        score: 21,
        id: 3,
        info: 'adsasd addres',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        country: 'russia',
        score: 23,
        id: 5,
        info: 'ranytrtyrdom addres',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        country: 'usa',
        score: 4,
        info: 'jhgjhgjgj addres',
        id: 7,
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        country: 'usa',
        score: 4,
        id: 9,
        info: 'ujyujyjyj addres',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
    items: [
      'russia',
      'usa'
    ],
    scores: [
        '> 20',
        '< 10'
      ,
    ]
  },
  getters: {
    Users(state) {
      return state.users
    },
    usersRussia(state) {
      return state.users.filter(el => el.country === 'russia')  
    },
    usersUsa(state) {
      return state.users.filter(el => el.country === 'usa')  
    },  
    Items(state) {
      return state.items
    },
    scores(state) {
      return state.scores
    },
    lowerScore(state) {
      return state.users.filter(el => el.score < 10)
    },
    highScore(state) {
      return state.users.filter(el => el.score > 20)
    },
  },
});