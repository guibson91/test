import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nano-loading',
  templateUrl: './nano-loading.component.html',
  styleUrls: ['./nano-loading.component.scss'],
})
export class NanoLoadingComponent implements OnInit {
  @Input() title: string;
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
