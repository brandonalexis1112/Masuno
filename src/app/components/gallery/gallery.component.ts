import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../../models/gallery-image.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  @Input() images: GalleryImage[] = [];
  currentIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      const routePath = url[0]?.path;
      this.updateImages(routePath);
    });
  }

  updateImages(routePath: string): void {
    switch (routePath) {
      case 'php':
        this.images = [
          {
            src: 'https://s3-alpha-sig.figma.com/img/caaf/cc93/3a8dfa7b077754771a34fd9f780125bb?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfGz5uZufkVA17AmfLFuKMbfzdYaoohGICLz7bJeYYryYWuOqD-Zv-NiFzU~U2zUDHlGipJ69sl2qTZ9ToVBJhD3e61qWVlQTQlTHEKNTRfWv0ChTPo-Uas31uLPDUw9JHtyJ5Pt5engjJSt4fs6KNcWv1LAO-hFbHVw6jQpwDWteRaJXR6AZJnW3wEXVMHBsAPqgUF5sRRDhCEDN-LQgQAi5xnEiSX7gfBMaqnhdMBuK~yt8pMQh0dDZ499ixo6P4oGVAOwIAfmSvqaAG2qh6bX0IKLdFqvdf4PJJQqTtAk6iG--419TODG~JiKWmHMU3uWC2v2896z5xWSUUVPbg__',
            alt: 'PHP Image 1',
          },
          { src: 'https://picsum.photos/200/300', alt: 'PHP Image 2' },
          {
            src: 'https://s3-alpha-sig.figma.com/img/0083/5090/b4eda564728bb2896340b28ef1f11480?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~gkp1b8kaJ8XPVXTAvl7PVm7iZ6c12WfXDWhm7l8r2ctnL~Kp1XyybfrzzSiqlCR8Rt6S0TPClr7pPe14e~qnTGd2QxwXrIJffwL2I118m8fugDRAtSzHTKJMMB5dO9sB3JQHhPx39u9vnQFnglJ9O7t0rJHs-LmE7J9KXl44K81N7uj065hrWI~zeaNWDX4yzrCSZTTw~8zo94Kju0PjiVQtIK5RAJbGcic2he5NTWNFPlGspxaDm2Wxs1eKDFDQidjCzfhEPCU0KBEc22F8IU7Uj3M-7efRPQZQN~KRCZe9P3WTuuZ9j0UsBx5y4pSj94tgTncXmkF3P4OTr3EQ__',
            alt: 'PHP Image 3',
          },
          { src: 'https://picsum.photos/200/300', alt: 'PHP Image 4' },
        ];
        break;
      case 'python':
        this.images = [
          {
            src: 'https://s3-alpha-sig.figma.com/img/445e/8ad7/aca5e95ca1c98d906d6d724fa63b5ec0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fRkvF8tXDTzCUe-KGl6PDAOZ6f51eaKNEN48ePtVYv2MBh7t3hWCcK9JAtuIwhjuVBedmNvASpE67vVuB1tN9OlCkCyjw7hP1jyzC02XvUTgmcr0EQ84xLy~AhfLJhGWxTZbYeQGQmF4mOT5YLL1N5Y8iGeaHxgA54iWp5TEsh5COkFZVGwxbbVXF1s4WxwN4mmkLeOv~5sJms3iZ6fLbxZ9bSyQX7C34rrrRano-Wkx3vIN4cBweEjLXS857uq8i-fOSvogNqZeVLbEtGdwu~OQ~z2aLmEpygZfSMxADvDJrS2a09jGO75vhyCqXA6NHx7zpeYBaw3GDbNztD2~qg__',
            alt: 'Python Image 1',
          },
          { src: 'https://picsum.photos/200/300', alt: 'Python Image 2' },
          {
            src: 'https://s3-alpha-sig.figma.com/img/f37a/0b6e/cc51d2bde758852995089075f5689f23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lnvkJxHT-kiye5bm6hfhcXpH0eLwaJ-7cXdQIifgY1lT5wfFL1FkSfUiu0meJO9LSuaQo9J-1HrCLFuQpM1Mmd-OrxTVQSPKZnzTh4UHfUOOFoWnGSmlGiFZbqUo1bLKRjC9z7YAlGTY794XlwUei-63lJrVsHjBOyUuBcRIchSBnIE88XdBYJd4JVkIn0aUCzJocxnCvplFWh1DyeVYSLmcSnBKnKkNgW5z28H4BPFOCgD1eiHFLmcglCZwE9kp2iYm6rRzeynr1cGWpFayK3XHru-4ZdJOJcXGXvAFvmnaEtNCjqcVDP1VQrxTId~ifo6vAzwXX~5I8KqnSEzhoQ__',
            alt: 'Python Image 3',
          },
          { src: 'https://picsum.photos/200/300', alt: 'Python Image 4' },
        ];
        break;
      case 'ux':
        this.images = [
          {
            src: 'https://s3-alpha-sig.figma.com/img/2b2b/ce5a/f821a10d2b4af2f9431f8ea1648cf97f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNPMh-hqSwW~MH1sWDVM~qyl4TCQPsDYiGmK2Cb0-t~PHbFzMxZfNN-pSiad6IRGKA8MgcqSJl-Jy2864X95lVclqEttamlEDDU1wXx0CXJjWkLzbc7RWl68jkwCWrqOUNdV4eQYAA-XP-Texo~glIqvqGqIWQbN~KASVhu4xMyrWlpPemzfCcKjJjohM4HyDFtwr0H5kQ5EVPaogCMQNbkO68AmVaMWRLynzSuaugpwM14iX9TOMptFeveg1jiA~6ItABhGt-ClrJ8hURSpolwohhfG0-ertaX~0SJBS70krIk5mSnhKW~2miDExDohgxg4h14UJaNYtqGFICbt1A__',
            alt: 'UX Image 1',
          },
          {
            src: 'https://picsum.photos/200/300',
            alt: 'UX Image 2',
          },
          {
            src: 'https://s3-alpha-sig.figma.com/img/539f/416a/b8b26acbdf85160207943d81bad1e933?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EncTKEogzfzlpWKHvhZowPJGBbogrOIdsniHandXS6doSLL5glfDZ5gQ0cZacq1lheq86P8ljsJ-xQXDAl79fJQemdRn8PKHGQyPSIriDRnKK931MTHkux~uOnQj-ZoHJ6FQQ15QNjUZlDU8a-OF4k7THUT6ei8eVVJnX2qG2DyBT-sFKvzr1LfFpcYn~43KfVYoAyi4tmNfvI8SkTTgraAsAUcpRz1tlUnVsPPbZlglQ3DE8GWSeUsIxCQ4S1HAkLY66mCjAKDgCXS5SQTKpBF6r1oow6quWMUT7r3U4pcfx3uRW3v9F4H5TKsolLGC4JEWb1x2UB1w0greOLD7yw__',
            alt: 'UX Image 3',
          },
          { src: 'https://picsum.photos/200/300', alt: 'UX Image 4' },
        ];
        break;
      default:
        this.images = [];
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
