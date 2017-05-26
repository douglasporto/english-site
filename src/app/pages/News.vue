<template>
  <div>
  <v-card>
        <div class="v-card-content">
          <header class="blue-text text-darken-3">
            <h4><v-icon>subtitles</v-icon>Marcão News
            <img src="http://brainmind.com.br/uclleague2017/image/marcao_new.JPG" alt="Marcão News" class="avatar circle z-depth-4">
            </h4>
          </header>
            <p>
                A sua divertida coluna diária que só encontra aqui na UCL.
            </p>
        </div>
    </v-card>
    <v-card>
      <div class="v-card-content">
        <div class="news" v-for="o in news">
          <header class="blue-text text-darken-3">
            <v-chip  class="blue darken-3 white-text chip">{{ o.data }}</v-chip>
            <b>{{ o.title }}</b><v-icon>chat</v-icon>
          </header>
          <img :src="o.img" alt="Marcão News" class="img-new left">
          <p v-html='o.text'></p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: []
    }
  },
  created () {
    this.news = this.$store.state.news
  }
}
</script>
<style>
  .news {
    padding: 20px;
    padding-bottom: 5px;
    border-bottom:  dotted 1px #c5c5c5;
  }
  .chip {
    margin-right: 20px;
  }
  .news header {
    padding-bottom: 30px;
  }
  .img-new {
    padding-right: 30px;
    max-width: 150px;
    max-height: 150px;
  }
</style>
