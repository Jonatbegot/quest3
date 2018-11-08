import { Component, OnInit } from '@angular/core';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  nom = 'Bob';
  imageSrc = 'https://via.placeholder.com/350x150';

  constructor() { }

  ngOnInit() {
  }
direBonjour() {
  console.log('Bonjour');
}
}
