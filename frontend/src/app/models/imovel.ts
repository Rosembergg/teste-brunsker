import { Endereco } from "./endereco";
import { TipoImovel } from "./enum/tipoImovel.enum";

export interface Imovel {
    id: number;
    nome: string;
    tipo: TipoImovel;
    valor: number;
    condominio: number;
    quartos: number;
    banheiros: number;
    mobiliado: boolean;
    area: number;
    venda: boolean;
    aluguel: boolean;
    dataAnuncio?: any;
    endereco:Endereco;
    proprietarioId: number;
}