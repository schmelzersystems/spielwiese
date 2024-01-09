import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogActions} from '@angular/material/dialog';
import {MatDialogClose} from '@angular/material/dialog';
import {MatDialogTitle} from '@angular/material/dialog';
import {MatDialogContent} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSlideToggleModule,
    RouterOutlet,
    RouterLink
  ]
})

export class AppComponent {
  toggle: boolean = false;

  onItemClick(e: any) {
    if (e.itemData.text) {
      console.log(e.itemData.text + ' has been clicked!');
    } else if (e.itemData.icon) {
      console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
    }
  }
  onLoginClick() {
    console.log("Login attempt");
  }
  onValueChanged(e: any) {
    this.toggle = e.value;
  }
}
