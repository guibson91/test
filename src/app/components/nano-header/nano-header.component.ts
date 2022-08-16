import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedService } from 'src/app/services/shared.service';
import { SuperPage } from 'src/app/util/super';

@Component({
  selector: 'app-nano-header',
  templateUrl: './nano-header.component.html',
  styleUrls: ['./nano-header.component.scss'],
})
export class NanoHeaderComponent extends SuperPage implements OnInit {
  @Input() title: string;
  @Input() back = false;
  @Input() iconLeft: string;
  @Input() iconRight: string;
  @Input() badgeRight: number;
  @Output() rightClick = new EventEmitter();
  @Output() leftClick = new EventEmitter();
  @Output() backClick = new EventEmitter();
  constructor(public navCtrl: NavController, public shared: SharedService) {
    super(shared);
  }

  ngOnInit() {}

  backClicked() {
    if (this.backClick.observers && this.backClick.observers.length > 0) {
      this.backClick.emit();
    } else {
      this.goBack();
    }
  }
  clickRight() {
    this.rightClick.emit();
  }
  clickLeft() {
    this.leftClick.emit();
  }
}
