import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { POKEMON } from '../../ENTIDADES/POKEMON';
import { Categoria } from '../../ENTIDADES/Categoria';
import { SericePokemonService } from '../../SERVICE/serice-pokemon.service';
import { CategoryServiceService } from '../../SERVICE/category-service.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class POKEMONComponent implements OnInit{

  pokemonForm!: FormGroup;
  categorias: Categoria[] = [];
  poke: any;
  constructor(
    public fb: FormBuilder,
    public pokemonService: SericePokemonService,
    public categoryService: CategoryServiceService
  ) {
    this.cargarCategorias();
  }
  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      estado: ['', Validators.required],
      url: ['', Validators.required],
      categoria: ['', Validators.required]
    });;

    this.pokemonService.obtener().subscribe(resp => {
      this.poke = resp;
      console.log(resp);
    },
      error => { console.error(error) }

    )
  }
  cargarCategorias() {
    this.categoryService.create().subscribe(resp => {
      this.categorias = resp;
    }, error => {
      console.error(error)
    })
  }

  guardar(): void {
    const pokemon : POKEMON = this.pokemonForm.value;
    console.log( this.pokemonForm.value)
    this.pokemonService.save(this.pokemonForm.value).subscribe(resp => {
    this.pokemonForm.reset();
    this.poke.push(resp);
    },
      error => {
        console.error(error)
      }
    )
  }
  
  update(pokemon:any){
   this.pokemonForm.patchValue({
    codigo: pokemon.codigo,
      nombre: pokemon.nombre,
      estado: pokemon.estado,
      url: pokemon.url,
      categoria: pokemon.categoria,
   })
  }
  delete(pokemon: any) {
    this.pokemonService.delete(pokemon.codigo).subscribe(resp => {
      console.log(resp)
      if (resp === true) {
        this.poke.pop(pokemon)
      }
    })
  }
}
