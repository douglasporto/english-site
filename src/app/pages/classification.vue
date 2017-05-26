<script>
import { orderBy } from 'lodash'
export default {
  data () {
    return {
      players: [],
      filtro: '',
      aproveitamento: [],
      caproveitamento: ''
    }
  },
  methods: {
    colorClass: function (pos) {
      if (pos < 6) {
        return 'light-green lighten-1'
      } else if (pos < 8) {
        return 'lime accent-2'
      } else {
        return 'red'
      }
    },
    colorAprov: function (jogador) {
      if (this.aproveitamento[jogador] > 50) {
        return 'width: ' + this.aproveitamento[jogador] + '%; background-color: #00695c'
      } else {
        return 'width: ' + this.aproveitamento[jogador] + '%; background-color: #d32f2f'
      }
    },
    Aproveitamento: function (jogador, jogos, pontos) {
      var tot = parseFloat(jogos) * 3
      var apr = (parseFloat(pontos) / tot) * 100
      this.aproveitamento[jogador] = apr.toFixed(2)
      return apr.toFixed(2)
    }
  },
  computed: {
    lista: function () {
      return orderBy(this.players, 'pontos', ['desc'])
    },
    filtroJogador: function () {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.players.filter(player => exp.test(player.name))
      } else {
        return this.players
      }
    }
  },
  created () {
    this.players = orderBy(this.$store.state.players, ['pontos', 'vitorias', 'sg'], ['desc', 'desc', 'desc'])
  }
}
</script>
<template>
    <section>
        <div class="row">
            <div class="col s12">
                <v-card>
                    <div class="v-card-content indigo-text text-darken-4">
                        <header class="center">
                            <h5><i class="material-icons">star_border</i>Classificação<i class="material-icons">star_border</i></h5>
                        </header>
                    </div>
                </v-card>
            </div>
            <div class="col s12">
                <v-card>
                    <div class="v-card-content">
                        <input type="search" class="filtro" id="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre o Jogador">
                        <table class="striped responsive-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Time</th>
                                    <th>Pontos</th>
                                    <th>Jogos</th>
                                    <th>V</th>
                                    <th>D</th>
                                    <th>E</th>
                                    <th>GP</th>
                                    <th>GC</th>
                                    <th>SG</th>
                                    <th>Aproveitamento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(player, index) in filtroJogador"  :key="player.num">
                                    <td class="left">
                                      <!-- <v-btn :class="colorClass(index)">Button</v-btn> -->
                                      <v-chip  :class="colorClass(index)" class="position">{{ index+1 }}</v-chip>
                                    </td>
                                    <td>
                                      <img :src="player.escudo" class="escudo"/>
                                    </td>
                                    <td>
                                      <b>{{ player.times }}</b>
                                      <br>
                                      <i class="player-name">{{ player.name }}</i>
                                    </td>
                                    <td class="center">{{ player.pontos }}</td>
                                    <td class="center">{{ player.jogos }}</td>
                                    <td class="center">{{ player.vitorias }}</td>
                                    <td class="center">{{ player.derrotas }}</td>
                                    <td class="center">{{ player.empates }}</td>
                                    <td class="center">{{ player.gp }}</td>
                                    <td class="center">{{ player.gc }}</td>
                                    <td class="center">{{ player.sg }}</td>
                                    <td class="center">
                                      {{ Aproveitamento(index, player.jogos, player.pontos) + '%' }}
                                      <div class="progress">
                                          <div class="determinate" :style='colorAprov(index)'></div>
                                      </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </v-card>
            </div>
        </div>
   </section>
</template>

<style lang="css">
    .v-card-content{
        padding: 10px;
    }
    i {
      padding-left: 10px;
    }
    .escudo {
      width: 30px;
      height: 30px;
    }
    .position {
      color: white;
      box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.5);
    }
    .player-name {
      font-size: 12px;
    }
</style>
