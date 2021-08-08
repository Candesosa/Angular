import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  //Titulo = "Titulo h1"
  //Subtitulo = "Subtitulo h1"

  @Input() title = 'Contenido';
  @Input() subtitle?: string; 

  ngOnInit(): void {
  }

}
