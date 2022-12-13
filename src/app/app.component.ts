import {Component, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective) refDir:RefDirective;
  constructor(
    private title: Title,
    private meta: Meta) {
    title.setTitle('app component page');
    meta.addTags([
      {name: 'keywords', content: 'angular'},
      {name: 'description', content: 'this is app component'}
    ])
  }
  showModal() {
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(ModalComponent);

    component.instance.title = 'Dynamic title';
    component.instance.close.subscribe(()=>{
      this.refDir.containerRef.clear();
    });
  }
}

