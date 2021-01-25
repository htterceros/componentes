import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemGroupPageRoutingModule } from './item-group-routing.module';

import { ItemGroupPage } from './item-group.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemGroupPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ItemGroupPage]
})
export class ItemGroupPageModule {}
