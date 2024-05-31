import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-ux',
  standalone: true,
  imports: [HeaderComponent,GalleryComponent,FooterComponent],
  templateUrl: './ux.component.html',
  styleUrl: './ux.component.css'
})
export class UxComponent {

}
