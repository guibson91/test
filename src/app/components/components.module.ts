import { BrMaskerModule } from 'br-mask';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePreLoaderDirective } from '../directives/image-preloader.directive';
import { IonicModule } from '@ionic/angular';
import { NanoHeaderComponent } from './nano-header/nano-header.component';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { NanoTitleComponent } from './nano-title/nano-title.component';
import { NanoAddressComponent } from './nano-address/nano-address.component';
import { NanoFormComponent } from './nano-form/nano-form.component';
import { NanoButtonsComponent } from './nano-form/nano-buttons/nano-buttons.component';
import { NanoLoadingComponent } from './nano-loading/nano-loading.component';
import { PreviewNextFooterComponent } from './preview-next-footer/preview-next-footer.component';

@NgModule({
  declarations: [
    ImagePreLoaderDirective,
    NanoHeaderComponent,
    NanoTitleComponent,
    NanoAddressComponent,
    NanoFormComponent,
    NanoButtonsComponent,
    NanoLoadingComponent,
    NanoTitleComponent,
    PreviewNextFooterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrMaskerModule,
    PipesModule,
  ],
  exports: [
    ImagePreLoaderDirective,
    NanoHeaderComponent,
    BrMaskerModule,
    NanoTitleComponent,
    NanoAddressComponent,
    NanoFormComponent,
    NanoButtonsComponent,
    NanoLoadingComponent,
    NanoTitleComponent,
    PreviewNextFooterComponent,
  ],
})
export class ComponentsModule {}
