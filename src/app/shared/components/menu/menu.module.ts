import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';
import { ShowIfLoggedModule } from '../../directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [ MenuComponent ],
    imports: [ 
        CommonModule,
        ShowIfLoggedModule
    ],
    exports: [ MenuComponent ]
})
export class MenuModule {}