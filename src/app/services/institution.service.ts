import { Injectable } from '@angular/core';
import { InstitutionModel } from '../models/institution.model';

@Injectable()
export class InstitutionService {
  private institutions$: InstitutionModel[] = [
    {
      id: "1",
      title: "NURSE PRACTITIONERS, REGISTERED NURSE, AND NURSING STUDENTS",
      subtitle: "E-learning modules that adapt to every individual and help you study for the NCLEX-RN more efficiently.",
      buttonText: "Learn More",
      imageUrl: "./assets/images/home/about_graphic_1.png",
    },
    {
      id: "2",
      title: "INSTITUTIONS",
      subtitle: "NCLEX ExpertAcademy provides a blended learning experience, allowing institutions to combine the benefits of adaptive e-learning with traditional classroom courses and practical lessons, helping students achieve their goals and improving their NCLEX-RN performance.",
      buttonText: "Learn More",
      imageUrl: "./assets/images/home/about_graphic_2.png",
    }
  ]

  constructor() { }

  getInstitutions(): InstitutionModel[] {
    return this.institutions$
  }
}
