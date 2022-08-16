import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nano-title',
  templateUrl: './nano-title.component.html',
  styleUrls: ['./nano-title.component.scss'],
})
export class NanoTitleComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
