import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'
import { KeysComponent } from '../../login/keys/keys.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

  constructor(    
    private dialog: MatDialog,
    public authService: AuthService    
    ){}

  login(resp?: any){
    if( resp.test == 'envio')
    this.authService.session = {
      name: 'Jhovanny',
      email: 'jhovanny_tellez@hacienda.gob.mx'
    }
    
  }

  openDialog(){
    
    const dialogRef = this.dialog.open(KeysComponent,{
      width: '420px'
    });
    // this.dialog.open(KeysComponent);
    
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      this.login(result)
    })

  }
}
