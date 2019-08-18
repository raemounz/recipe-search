import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule {}
