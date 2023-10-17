export interface LotteryResponse {
  acumulou: boolean;
  concurso: number;
  data: string;
  dataProximoConcurso: string;
  dezenas: [string];
  dezenasOrdemSorteio: [string];
  estadosPremiados: [];
  local: string;
  localGanhadores: [
    {
      ganhadores: number;
      municipio: string;
      nomeFatansiaUL: string;
      posicao: number;
      serie: string;
      uf: string;
    }
  ];
  loteria: string;
  mesSorte: string;
  observacao: string;
  premiacoes: [
    {
      descricao: string;
      faixa: number;
      ganhadores: number;
      valorPremio: number;
    }
  ];
  proximoConcurso: number;
  timeCoracao: string;
  trevos: [string];
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoProximoConcurso: number;
  valorArrecadado: number;
  valorEstimadoProximoConcurso: number;
}
