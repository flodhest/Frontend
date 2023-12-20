import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  sections: { title: string; content: string }[] = [
    { title: 'Sektion 1', content: 'Text för sektion 1 ...' },
    { title: 'Sektion 2', content: 'Text för sektion 2 ...' },
    { title: 'Sektion 3', content: 'Text för sektion 3 ...' },
  ];

  getSection(title: string) {
    return this.sections.find((section) => section.title === title);
  }
}
