/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */
import { ChangeDetectorRef, Directive, Input, OnInit } from '@angular/core';

/**
 * Diretiva responsável por mostrar gif de carregando enquanto a imagem não é renderizada
 * Basta trocar "src" por "img" nas tags de img
 *
 * @example: <img img="assets/images/example.png" />
 */
@Directive({
  selector: '[img]',
  host: {
    '[attr.src]': 'finalImage',
  },
})
@Directive({
  selector: '[appImagePreloader]',
})
export class ImagePreLoaderDirective implements OnInit {
  @Input('img') targetSource: string;
  defaultImage = 'assets/gifs/loading.gif';
  downloadingImage: any;
  finalImage: any;
  oldImage: any;
  constructor(public ref: ChangeDetectorRef) {}
  ngOnInit() {
    this.handleImage();
  }
  handleImage() {
    this.finalImage = this.defaultImage;
    if (!this.targetSource) {
      this.finalImage = 'assets/images/placeholder.png';
      this.oldImage = this.finalImage;
      this.ref.detectChanges();
    }
    this.downloadingImage = new Image();
    this.downloadingImage.onload = () => {
      this.finalImage = this.targetSource;
      this.oldImage = this.finalImage;
      this.ref.detectChanges();
    };
    this.downloadingImage.onerror = (err) => {
      console.error('Error: ', err);
      this.finalImage = 'assets/images/placeholder.png';
      this.oldImage = this.finalImage;
      this.ref.detectChanges();
    };
    this.downloadingImage.src = this.targetSource;
  }
}
