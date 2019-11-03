import { NgModule } from '@angular/core';

import { ShowIfLoggedDirective } from './show-if-logged.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule ],
    exports: [ ShowIfLoggedDirective ],
    declarations: [ ShowIfLoggedDirective ],
    providers: [],
})
export class ShowIfLoggedModule { }