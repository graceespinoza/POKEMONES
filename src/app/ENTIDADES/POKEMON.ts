import { Categoria } from "./Categoria";

export interface POKEMON{
    codigo:number;
        nombre:string;
        estado:string;
        url:string;
        categoria: Categoria;
}