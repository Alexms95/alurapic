import { NgModule } from '@angular/core';

import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
    imports: [ 
        CommonModule,
        PhotoModule
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ]
})
export class PhotoDetailsModule { }