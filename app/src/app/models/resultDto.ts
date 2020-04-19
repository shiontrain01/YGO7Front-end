import { Card } from './card';

export class ResultDto
{
    codigo : string;
    sucesso : boolean;
    mensagem : string;
    campo : string;
    mensagens : string;
    data : Card;
    validationResult : string;
}