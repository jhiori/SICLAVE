import { Component } from '@angular/core';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-keys',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.sass'
})
export class KeysComponent {
  constructor(){}

  userFormControl = new FormControl('', [Validators.required, Validators.email])
  passFormControl = new FormControl('', [Validators.required])
}

// @Component({
//   selector:'app-keys-dialog',
//   templateUrl: './app-keys-dialog.html',
//   standalone: true,
//   imports: []
// })
// export class DialogElementKeys{}