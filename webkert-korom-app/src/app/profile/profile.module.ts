import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { ProfileTextComponent } from './profile-text/profile-text.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { UpdatePopupComponent } from './update-popup/update-popup.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTextComponent,
    ProfileFormComponent,
    DeletePopupComponent,
    UpdatePopupComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class ProfileModule { }
