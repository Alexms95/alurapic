import { NgModule } from '@angular/core';

import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    imports: [ 
        CommonModule,
        PhotoModule
    ],
    exports: [ PhotoDetailsComponent ],
    declarations: [ PhotoDetailsComponent ]
})
export class PhotoDetailsModule { }