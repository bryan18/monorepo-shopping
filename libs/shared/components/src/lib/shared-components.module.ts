import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedComponentsModule {}
