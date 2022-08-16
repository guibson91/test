import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-preview-next-footer',
  templateUrl: './preview-next-footer.component.html',
  styleUrls: ['./preview-next-footer.component.scss'],
})
export class PreviewNextFooterComponent implements OnInit {
  @Input() showPrevious = false;
  @Input() showNext= false;
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickPrevious() {
    this.previous.emit();
  }

  clickNext() {
    this.next.emit();
  }
}
