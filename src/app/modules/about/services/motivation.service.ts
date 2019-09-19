import { Injectable } from '@angular/core';
import { MotivationModel } from '../models/motivation.model';

@Injectable()
export class MotivationService {
  private motivations$: MotivationModel[] = [
    {
      id: "1",
      title: "Stay Updated",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      imageUrl: "https://picsum.photos/500?1"
    },
    {
      id: "2",
      title: "Faster Learning and Increased Performance",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      imageUrl: "https://picsum.photos/500?2"
    }
  ]

  constructor() { }

  getMotivations(): MotivationModel[] {
    return this.motivations$
  }

}
