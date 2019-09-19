import { Injectable } from '@angular/core';
import { WorkModel } from '../models/work.model';

@Injectable()
export class WorkService {
  private title: string = "Find out how ExpertAcademy Works!"
  private subtitle: string = `Create a customizable, collaborative learning environment that enhances NCLEX-RN preparation by involving students, deans, and program directors throughout the learning process.`
  private works: WorkModel[] = [
    {
      id: "1",
      title: "Nursing students and professionals can answer thousands of questions to prepare for the NCLEX-RN",
      description: `NCLEX ExpertAcademy provides access to questions, and detailed answers which are combined to create a customized learning experience. Our technology can help accelerate learning and improve testing performance on important exams. \n
        Faculty members can take advantage of NCLEX-RN ExpertAcademy by assigning our exam to their students, allowing your staff to determine the effectiveness of their teaching methods in class.
      `,
      imageUrl: "https://picsum.photos/400?1"
    },
    {
      id: "2",
      title: `Your staf will be able to understand students' performance better.`,
      description: `Determine your student's performance on exams and keep an eye on their improvement as they complete the practice NCLEX-RN exam on our platform.`,
      imageUrl: "https://picsum.photos/400?2"
    },
    {
      id: "3",
      title: "Help your students and physicians improve their test scores and class average by determining your curriculum's weak spots and students who need additional training.",
      description: "Complete more practice exams on NCLEX ExpertAcademy to make sure you do your best on exam day. Our platform provides scientifically proven technologies which can help improve your performance on the NCLEX-RN. We use an evidence-based approach to develop our exam, and our results prove it!",
      imageUrl: "https://picsum.photos/400?3"
    }
  ]

  constructor() { }

  getTitle(): string {
    return this.title
  }

  getSubtitle(): string {
    return this.subtitle
  }

  getWorks(): WorkModel[] {
    return this.works
  }
}
