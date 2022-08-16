import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Injectable } from '@angular/core';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { SharedService } from './shared.service';

/**
 * Escolher a melhor forma de abrir links ou arquivos em cada plataforma (Android, iOS ou WEB)
 */
@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(
    private shared: SharedService,
    private previewAnyFile: PreviewAnyFile,
    private iab: InAppBrowser
  ) {}

  openLink(link) {
    if (!link) {
      return;
    }
    //ANDROID
    if (this.shared.platform.is('android')) {
      const ref = this.iab.create(link, '_blank', {
        hidenavigationbuttons: 'yes',
        hideurlbar: 'yes',
        hidden: 'yes',
        location: 'no',
        toolbar: 'no',
        zoom: 'no',
        fullscreen: 'yes',
      });
      ref.show();
    }
    //iOS
    else if (this.shared.platform.is('ios')) {
      const ref = this.iab.create(link, '_blank', {
        hidenavigationbuttons: 'yes',
        hideurlbar: 'no',
        hidden: 'yes',
        location: 'yes',
        toolbar: 'yes',
        zoom: 'no',
        fullscreen: 'yes',
      });
      ref.show();
    }
    //BROWSER
    else {
      this.openBrowserLink(link);
    }
  }

  openPDF(url) {
    if (
      this.shared.platform.is('cordova') ||
      this.shared.platform.is('capacitor')
    ) {
      this.openNativePDF(url);
    } else {
      this.openBrowserPDF(url);
    }
  }

  private openBrowserLink(url) {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.setAttribute('visibility', 'hidden');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  private openBrowserPDF(url) {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.setAttribute('visibility', 'hidden');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  private async openNativePDF(url) {
    const loading = await this.shared.loadingCtrl.create({});
    loading.present();
    this.previewAnyFile
      .preview(url)
      .then(() => {
        loading.dismiss();
      })
      .catch((error) => {
        console.error('Error: ', error);
        loading.dismiss();
      });
  }
}
