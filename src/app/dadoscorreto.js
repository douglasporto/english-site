export const createDados = {
  'site': {
    'name': 'UCL League',
    'slug': 'uclleague',
    'pages': [
      { 'name': 'Classificação', 'url': '/table' },
      { 'name': 'Jogos', 'url': '/games' },
      { 'name': 'Jogadores', 'url': '/players' }
    ]
  },
  'players': [
      { 'id': '1', 'name': 'Alex Silva', 'nick': 'Alex_Silva15', 'times': 'Juventus', 'pontos': '1', 'jogos': '1', 'sg': '0', 'vitorias': '0', 'empates': '1', 'derrotas': '0' },
      { 'id': '2', 'name': 'Denilson Takeda', 'nick': 'Lokobielse', 'times': 'Atlético de Madrid', 'pontos': '1', 'jogos': '1', 'sg': '0', 'vitorias': '0', 'empates': '1', 'derrotas': '0' },
      { 'id': '3', 'name': 'Douglas Porto', 'nick': 'dgsapenas', 'times': 'Paris Saint German', 'pontos': '0', 'jogos': '1', 'sg': '-1', 'vitorias': '0', 'empates': '1', 'derrotas': '0' },
      { 'id': '4', 'name': 'Guilherme Rodrigues', 'nick': 'guigschan', 'times': 'Manchester City', 'pontos': '1', 'jogos': '1', 'sg': '0', 'vitorias': '0', 'empates': '1', 'derrotas': '0' },
      { 'id': '5', 'name': 'Jason Santos', 'nick': 'matheuscatossi', 'times': 'Chelsea', 'pontos': '1', 'jogos': '2', 'sg': '-1', 'vitorias': '0', 'empates': '1', 'derrotas': '1' },
      { 'id': '6', 'name': 'Marcos Noda', 'nick': 'xnodagamer', 'times': 'Bosussia Dortmund', 'pontos': '4', 'jogos': '2', 'sg': '3', 'vitorias': '1', 'empates': '1', 'derrotas': '0' },
      { 'id': '7', 'name': 'Raphael Sposato', 'nick': 'rk_sposato', 'times': 'Real Madrid', 'pontos': '1', 'jogos': '1', 'sg': '0', 'vitorias': '0', 'empates': '1', 'derrotas': '0' },
      { 'id': '8', 'name': 'Rodrigo Lemos', 'nick': 'lemosr', 'times': 'Manchester United', 'pontos': '4', 'jogos': '3', 'sg': '0', 'vitorias': '1', 'empates': '1', 'derrotas': '1' },
      { 'id': '9', 'name': 'William Mendes', 'nick': '', 'times': 'Barcelona', 'pontos': '3', 'jogos': '2', 'sg': '-2', 'vitorias': '1', 'empates': '0', 'derrotas': '1' },
      { 'id': '10', 'name': 'William Miyamoto', 'nick': 'William_miyamoto', 'times': 'Bayern Munchen', 'pontos': '4', 'jogos': '2', 'sg': '1', 'vitorias': '1', 'empates': '1', 'derrotas': '0' }
  ],
  'times': [
      { 'id_player': '1', 'times': 'Juventus' },
      { 'id_player': '2', 'times': 'Atlético de Madrid' },
      { 'id_player': '3', 'times': 'Paris Saint German' },
      { 'id_player': '4', 'times': 'Manchester City' },
      { 'id_player': '5', 'times': 'Chealse' },
      { 'id_player': '6', 'times': 'Bosussia Dortmund' },
      { 'id_player': '7', 'times': 'Real Madrid' },
      { 'id_player': '8', 'times': 'Manchester United' },
      { 'id_player': '9', 'times': 'Barcelona' },
      { 'id_player': '10', 'times': 'Bayern Munchen' }
  ],
  'games': [
    {
      'semana1': [
        { 'data': '15/05/2017', 'home': '1', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '16/05/2017', 'home': '4', 'visit': '5', 'gol_home': '0', 'gol_visit': '0', 'status': 'Realizado' },
        { 'data': '17/05/2017', 'home': '8', 'visit': '6', 'gol_home': '0', 'gol_visit': '0', 'status': 'Realizado' },
        { 'data': '18/05/2017', 'home': '7', 'visit': '10', 'gol_home': '1', 'gol_visit': '1', 'status': 'Realizado' },
        { 'data': '19/05/2017', 'home': '2', 'visit': '3', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '15/05/2017', 'home': '8', 'visit': '3', 'gol_home': '1', 'gol_visit': '0', 'status': 'Realizado' },
        { 'data': '16/05/2017', 'home': '6', 'visit': '9', 'gol_home': '4', 'gol_visit': '1', 'status': 'Realizado' },
        { 'data': '17/05/2017', 'home': '10', 'visit': '5', 'gol_home': '2', 'gol_visit': '1', 'status': 'Realizado' },
        { 'data': '18/05/2017', 'home': '1', 'visit': '2', 'gol_home': '2', 'gol_visit': '2', 'status': 'Realizado' },
        { 'data': '19/05/2017', 'home': '4', 'visit': '7', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' }
      ],
      'semana2': [
        { 'data': '22/05/2017', 'home': '2', 'visit': '10', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '23/05/2017', 'home': '8', 'visit': '9', 'gol_home': '1', 'gol_visit': '2', 'status': 'Realizado' },
        { 'data': '24/05/2017', 'home': '1', 'visit': '4', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '25/05/2017', 'home': '6', 'visit': '5', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '26/05/2017', 'home': '7', 'visit': '3', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '22/05/2017', 'home': '3', 'visit': '5', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '23/05/2017', 'home': '7', 'visit': '1', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '24/05/2017', 'home': '9', 'visit': '10', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '25/05/2017', 'home': '2', 'visit': '8', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '26/05/2017', 'home': '4', 'visit': '6', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' }
      ],
      'semana3': [
        { 'data': '29/05/2017', 'home': '5', 'visit': '7', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '30/05/2017', 'home': '1', 'visit': '8', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '31/05/2017', 'home': '10', 'visit': '3', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '01/06/2017', 'home': '2', 'visit': '6', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '02/06/2017', 'home': '4', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '29/05/2017', 'home': '8', 'visit': '4', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '30/05/2017', 'home': '6', 'visit': '10', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '31/05/2017', 'home': '2', 'visit': '7', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '01/06/2017', 'home': '5', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '02/06/2017', 'home': '3', 'visit': '1', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' }
      ],
      'semana4': [
        { 'data': '05/06/2017', 'home': '3', 'visit': '4', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '06/06/2017', 'home': '7', 'visit': '8', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '07/06/2017', 'home': '1', 'visit': '6', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '08/06/2017', 'home': '2', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '09/06/2017', 'home': '10', 'visit': '8', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '05/06/2017', 'home': '7', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '06/06/2017', 'home': '4', 'visit': '10', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '07/06/2017', 'home': '2', 'visit': '7', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '08/06/2017', 'home': '5', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '09/06/2017', 'home': '6', 'visit': '1', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' }
      ],
      'semana5': [
        { 'data': '12/06/2017', 'home': '2', 'visit': '4', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '13/06/2017', 'home': '5', 'visit': '8', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '14/06/2017', 'home': '1', 'visit': '10', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '12/06/2017', 'home': '6', 'visit': '7', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' },
        { 'data': '13/06/2017', 'home': '3', 'visit': '9', 'gol_home': '0', 'gol_visit': '0', 'status': 'Pendente' }
      ]
    }
  ]
}

export default createDados
