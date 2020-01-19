import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchProviderComponent } from './switch-provider/switch-provider.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageProfileComponent } from './my-profile/manage-profile/manage-profile.component';
import { LinkProviderComponent } from './my-profile/manage-profile/link-provider/link-provider.component';
import { DefaultProviderComponent } from './my-profile/manage-profile/default-provider/default-provider.component';
import { DelinkProviderComponent } from './my-profile/manage-profile/delink-provider/delink-provider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProviderService} from './switch-provider/switch-provider.service'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SwitchProviderComponent,
    MyProfileComponent,
    ManageProfileComponent,
    LinkProviderComponent,
    DefaultProviderComponent,
    DelinkProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
