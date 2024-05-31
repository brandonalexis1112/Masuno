import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-phyton',
  standalone: true,
  imports: [HeaderComponent,GalleryComponent,FooterComponent],
  templateUrl: './phyton.component.html',
  styleUrl: './phyton.component.css'
})
export class PhytonComponent {

}
