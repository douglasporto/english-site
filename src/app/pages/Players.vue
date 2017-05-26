<template>
    <section>
        <div class="row">
            <div class="col s12">
                <v-card>
                    <div class="v-card-content indigo-text text-darken-4">
                        <header class="center">
                            <h5><i class="material-icons">person_outline</i>Jogadores<i class="material-icons">person_outline</i></h5>
                        </header>
                    </div>
                </v-card>
            </div>
            <div class="col s12">
                <v-card>
                    <div class="v-card-content">
                        <table class="highlight responsive-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nome</th>
                                    <th></th>
                                    <th>Time</th>
                                    <th>Psn Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="player in players">
                                    <td>{{ player.id }}</td>
                                    <td>{{ player.name}}</td>
                                    <td><img :src="player.escudo" class="escudo"></td>
                                    <td>{{ player.times}}</td>
                                    <td>{{ player.nick}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </v-card>
            </div>
        </div>
   </section>
</template>

<script>
export default {
  data () {
    return {
      players: this.$store.state.players
    }
  }
}
</script>

<style lang="css">
    .v-card-content{
        padding: 10px;
    }
</style>
