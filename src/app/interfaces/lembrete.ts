type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembrete {
    Id: number;
    Conteudo: string;
    //arquivado: boolean;
    Prioridade: prioridade;
    //modificado: number;
}
