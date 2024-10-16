import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
  idade:number = 40;
  nome:string = "Thiago Barroso";
  profissao:[...Array<string>] = ["Marido","Pai","Estudante","Desenvolvedor"];


}
