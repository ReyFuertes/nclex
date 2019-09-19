import { Injectable } from '@angular/core';
import { TestimonialModel } from '../models/testimonial.model';

@Injectable()
export class TestimonialService {
  private title$: string = "EVERY DAY, MORE NURSING PROFESSIONALS AND STUDENTS ARE RELYING ON NCLEX EXPERTACADEMY. THESE ARE THEIR STORES:"
  private testimonials$: TestimonialModel[] = [
    {
      id: "1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      avatarUrl: "https://picsum.photos/80?avatar-1",
      fullName: "JOY VASQUEZ",
      position: "Chief Executive Assistant",
      company: "ExpertCollege BV",
    },
    {
      id: "2",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      avatarUrl: "https://picsum.photos/80?avatar-2",
      fullName: "JOEL RAY PELLERIN",
      position: "Art Director",
      company: "ExpertCollege BV",
    },
    {
      id: "3",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      avatarUrl: "https://picsum.photos/80?avatar-3",
      fullName: "ANNE DOE",
      position: "Chief Executive Assistant",
      company: "ExpertCollege BV",
    },
    {
      id: "4",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      avatarUrl: "https://picsum.photos/80?avatar-4",
      fullName: "JESSIE RIN",
      position: "Art Director",
      company: "ExpertCollege BV",
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title$
  }

  getTestimonials(): TestimonialModel[] {
    return this.testimonials$
  }

}
