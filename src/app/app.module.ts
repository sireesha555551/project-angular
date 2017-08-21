import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NgformsComponent } from './ngforms/ngforms.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent} from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NgformsComponent,
    LoginComponent,
    ContactusComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'/home' ,pathMatch:'full'
      },
      {
        path: 'signup',
        component: NgformsComponent
      },
      {
       path:'login',
       component:LoginComponent
      },
      {
        path:'contactus',
        component:ContactusComponent
      },
      {
        path:'home',
        component:BodyComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
