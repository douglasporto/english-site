<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      players: [],
      games: [],
      semana1: [],
      semana2: [],
      semana3: [],
      semana4: [],
      semana5: [],
      filtro: ''
    }
  },
  methods: {
    colorClass: function (status) {
      if (status === 'Realizado') {
        return 'green white-text'
      } else {
        return 'red white-text'
      }
    },
    ordenacao: function (game) {
      return orderBy(game, 'data', ['asc'])
    }
  },
  created () {
    this.players = this.$store.state.players
    this.games = this.$store.state.games
    this.semana1 = this.$store.state.games[0].semana1
    this.semana2 = this.$store.state.games[0].semana2
    this.semana3 = this.$store.state.games[0].semana3
    this.semana4 = this.$store.state.games[0].semana4
    this.semana5 = this.$store.state.games[0].semana5
  }
}
</script>
<template>
    <section>
        <div class="row">
          <div class="col s12">
              <v-card>
                  <div class="v-card-content">
                      <header>
                          <h5 class="center">Fase de Grupo</h5>
                      </header>
                      <v-tabs>
                          <v-tab target="#semana1">Semana 1</v-tab>
                          <v-tab target="#semana2">Semana 2</v-tab>
                          <v-tab target="#semana3">Semana 3</v-tab>
                          <v-tab target="#semana4">Semana 4</v-tab>
                          <v-tab target="#semana5">Semana 5</v-tab>
                      </v-tabs>
                  </div>
              </v-card>
          </div>
          <div class="col s12" v-for="(obj, index) in games[0]" :id="index">
              <v-card>
                  <div class="v-card-content">
                      <table class="centered">
                        <thead>
                          <tr>
                              <th>Data</th>
                              <th>Casa</th>
                              <th>Resultados</th>
                              <th>Visitante</th>
                              <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="g in ordenacao(obj)">
                            <td>{{ g.data }}</td>
                            <td>
                              <v-chip class="indigo lighten-4 left"><img :src="players[(g.home-1)].escudo" class="escudo-jogos"/>{{ players[(g.home-1)].times }}</v-chip>
                              <font class="right">{{ players[(g.home-1)].name }}</font>
                            </td>
                            <td>{{ g.gol_home }} X {{ g.gol_visit }}</td>
                            <td>
                              <font class="left">{{ players[(g.visit-1)].name }}</font>
                              <v-chip class="indigo lighten-4 right">{{ players[(g.visit-1)].times }}<img :src="players[(g.visit-1)].escudo" class="escudo-jogos"/></v-chip>
                            </td>
                            <td>
                              <v-chip :class="colorClass(g.status)">{{g.status}}</v-chip>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
              </v-card>
          </div>
      </div>
      <div class="row">

      </div>
  </section>
</template>
<style lang="css">
    .tabs .tab a {
        color: #5c6bc0;
    }
    .tabs .tab a:hover {
        color: #000;
    }
    .tabs .indicator {
        background-color: #c5cae9;
    }
    .escudo-jogos {
      width: 20px;
      height: 20px;
    }
</style>
