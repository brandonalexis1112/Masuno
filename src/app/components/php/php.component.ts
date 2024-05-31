import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-php',
  standalone: true,
  imports: [HeaderComponent,GalleryComponent,FooterComponent],
  templateUrl: './php.component.html',
  styleUrl: './php.component.css'
})
export class PhpComponent {

}
