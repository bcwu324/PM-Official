import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCoffee = faCoffee;
  topnavTo: boolean = false;
  navInfoTo: boolean = false;
  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any
  tab4: any
  tab5: any
  tab6: any
  Clicked: boolean
  navToggle() {
    this.topnavTo = !this.topnavTo;
    this.navInfoTo = !this.navInfoTo;
  };
  refresh(): void {

    setTimeout(() => {
      location.reload();
    }, 100);
  }
  onClick(check) {
    //    console.log(check);
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else if (check == 4) {
      this.tab = 'tab4';
    } else if (check == 5) {
      this.tab = 'tab5';
    } else if (check == 6) {
      this.tab = 'tab6';
    }
    this.topnavTo = false;
    this.navInfoTo = false;
  }


}
