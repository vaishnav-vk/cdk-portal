import { Component, signal,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Popup } from './popup/popup';
import { CdkPortalOutlet,ComponentPortal } from '@angular/cdk/portal';

@Component({
  imports: [RouterOutlet,CdkPortalOutlet,Popup],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cdk-portal-demo');
  @ViewChild(CdkPortalOutlet)
  outlet!:CdkPortalOutlet

  showPopup(){
    if(!this.outlet.hasAttached()){
      this.outlet.attach(new ComponentPortal(Popup))
    }
  }
  closePopup(){
    this.outlet.detach()
  }
}
