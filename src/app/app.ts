import type { BaseComponent } from '@components/base-component';

import { PageWrapper } from './page';

class App {
  constructor(
    private pageWrapper: BaseComponent,
    private root: HTMLElement,
  ) {}

  // public stop(): void {
  //   console.log('stop')
  //   this.root.append(this.pageWrapper.getNode());
  // }

  public start(): void {
    console.log('start');
    this.root.append(this.pageWrapper.getNode());
  }

  // public pause(): void {
  //   console.log('pause')
  //   this.root.append(this.pageWrapper.getNode());
  // }
}
const app = new App(PageWrapper(), document.querySelector<HTMLDivElement>('#app')!);

app.start();
// app.stop();
// app.pause();
// app.stop();
