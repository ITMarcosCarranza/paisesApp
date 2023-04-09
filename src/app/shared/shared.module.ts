import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
