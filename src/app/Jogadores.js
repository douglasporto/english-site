export class Jogador {
  constructor (id, nome, nick, time, escudo) {
    this.id = id
    this.name = nome
    this.times = time
    this.nick = nick
    this.escudo = 'http://brainmind.com.br/uclleague2017/image/' + escudo + '.png'
    this.pontos = 0
    this.jogos = 0
    this.vitorias = 0
    this.derrotas = 0
    this.empates = 0
    this.sg = 0
    this.gp = 0
    this.gc = 0
  }
}
// class Jogador {
//   constructor (id, nome, time, nick) {
//     this.id = id
//     this.nome = nome
//     this.times = time
//     this.nick = nick
//     this.pontos = 0
//     this.jogos = 0
//     this.vitorias = 0
//     this.derrotas = 0
//     this.empates = 0
//     this.sg = 0
//     this.gp = 0
//     this.gc = 0
//   }
// }
// export default Jogador
