import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective) refDir:RefDirective;
  constructor() {
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

