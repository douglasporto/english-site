<script>
export default {
  data () {
    return {
      e1: 0,
      qtdAsk: 0,
      typeForm: []
    }
  }
}
</script>
<template>
  <v-stepper v-model="e1">
    <v-stepper-header  class="">
      <v-stepper-step step="1" :complete="e1 > 1">Perguntas</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 2">Forma do Verbo</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Começar</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container fluid>
          <v-layout row>
            <v-flex xs8>
              <v-subheader class="black--text">Quantas Perguntas?</v-subheader>
            </v-flex>
            <v-flex xs4 >
              <v-text-field
                v-model="qtdAsk"
                clearable
                type='number'
                name="input-1"
                label="10"
                id="testing"
                required
                persistent-hint
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      <v-btn color="primary" @click.native="e1 = 2">Próximo</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-subheader>Quais as formas quer treinar?</v-subheader>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-checkbox
                v-model="typeForm"
                value='base'
                label='Base'
              ></v-checkbox>
            </v-flex>
            <v-flex xs4>
              <v-checkbox
                v-model="typeForm"
                value='past'
                label='Past'
              ></v-checkbox>
            </v-flex>
            <v-flex xs4>
              <v-checkbox
                v-model="typeForm"
                value='participle'
                label='Past Participle'
              ></v-checkbox>
            </v-flex>
          </v-layout>
          {{typeForm}}
        </v-container>
        <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat @click.native="e1 = 1">voltar</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <p> Você irá responder {{ qtdAsk }}.</p>
        <p> Vamos Começar.</p>
        
        <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
        <v-btn flat @click.native="e1 = 2">Voltar</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
