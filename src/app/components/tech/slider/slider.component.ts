import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Slide } from '../../../models/slide.model';
import { DotsComponent } from './dots/dots.component';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideComponent, DotsComponent, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  slides: Slide[] = [
    {
      content: 'PHP',
      image:
        'https://s3-alpha-sig.figma.com/img/2949/59af/0ea11c7bcd4ed6749f221b53bf3910b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDXr5d~f5tPrk2qQbcnImc8OyVKH7VtPx~mMT6B0vdS7~5H7MnKdebHWRG2aPnxOoHvfr5ryjZFIU4QKSkmbiYGRWNUW3daY9-KAZagQyJBx2SxgqNU4ErbJIfJp8Y0OuVOdyHGhjL9oe1ZmBBqYELZQSImekS5S0l72luaeh1ba5z3-sU1GjlHeaLCRbtooE2KUHIbkGOsNRS53CJwmrOG3vkpmVdYW13~148jPEaBnx79uGd8YhINcn8h66ySYh0qPvKIrZcxu5pPGD7oGz8dAkmn-7z~85nyKC45ICCASAhTB65RkbQEWg6fFBdOsDq1kREHRN8kBq9BW-VLvPQ__',
      route: '/php',
    },
    {
      content: 'Python',
      image:
        'https://s3-alpha-sig.figma.com/img/9df6/6706/8db91dfaba55e2eb83e5c636b500b6fc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njzrl65wYujlkIHX~6hcBAqt-WtmfIztVeIr9Eggy1RL7uNb~9Fe3UraaceBAPYSA9QILI0NzTC8OJxX~FE3Le~6uZonnZX-WcOMt6wReAzwz4oV0rZU948eWe89~HIQPLm88RhEuNwzrfT6uY1TYldFja30zBQfVtz9dHbMXcTKWIyrAcO~BMqk21PNUr0twLZgiOHnUUjupC4JHiZBAlCTWXdF95X1ljw0qWvRiJ8QLmExhpo~YiXQcWCZigz0eFxwho5AGISqgSvT5iXlGOWzd1IaWyf65YT6PYxSiNaMk~xYYfjncWmxwBIglGFbL~WOGyd1KNBwyQYT0in9Qg__',
      route: '/python',
    },
    {
      content: 'UX/UI',
      image:
        'https://s3-alpha-sig.figma.com/img/b691/6f8a/7ee42a5a0873bfabbd14cbcb5a2dd39d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlK9nj2W48kdWWTpKLVIKDeQT4YOG-lsMfJCgCasc57CwjqW6rD2rIG0wR0jGiaQ3MCa5mHgHbKxfqoOR3qs3i9w1uqg00JkBapT51sIjN1NAj8UQAVFzhn3mILfU~GIeHfrbk62IipG4N9jODXC-K1mQlz0wIY8~y673pZcwdbrdOzoi31cTnuPw319FXEQCzLdILLqz1l-x5jGauMCGatDUO18idfW-rDDkxXvkzZWSyN~WT4NbiA6cGgnDVhe2HaJg5I70-U60J3ba8oep-WPXV1Jb9cPihSLFiZywqcmedXbb8HnWB31GaKZ8X0FVYwYh6betXsHDgPDGVY0LQ__',
      route: '/ux',
    },
  ];
  currentSlideIndex = 0;

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
