import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';
import { ListPageRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListPageRoutingModule,
  ],
  declarations: [ListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListPageModule {}
