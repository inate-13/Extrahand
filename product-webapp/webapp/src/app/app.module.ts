import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgxPaginationModule } from 'ngx-pagination';

import {MatRippleModule} from '@angular/material/core';
import { UpdateComponent } from './update/update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatTabsModule} from '@angular/material/tabs';
import { ServiceselectionComponent } from './servicesvendorsui/serviceselection/serviceselection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubServiceSelectionComponent } from './servicesvendorsui/sub-service-selection/sub-service-selection.component';
import { VendorSelectionComponent } from './servicesvendorsui/vendor-selection/vendor-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './user-login-registration-ui/login/login.component';
import { RegisterationComponent } from './user-login-registration-ui/registeration/registeration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompalintServiceComponent } from './compalint-service/compalint-service.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { VendorDescriptionComponent } from './servicesvendorsui/vendor-description/vendor-description.component';
import { ChatBoatServiceComponent } from './chat-boat-service/chat-boat-service.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import {LayoutModule} from '@angular/cdk/layout';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { LocationTrackingComponent } from './location-tracking/location-tracking.component';
import { VendorServicesComponent } from './vendor-services/vendor-services.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from './footer/footer.component';
import { NavbarVendorComponent } from './navbar-vendor/navbar-vendor.component';
import { VendorServiceListUiComponent } from './vendor-service-list-ui/vendor-service-list-ui.component';
import { BlogsComponent } from './blogs/blogs.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReadblogsComponent } from './blogs/readblogs/readblogs.component';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
 
export function HttpLoaderFactory(http :HttpClient){
  return new TranslateHttpLoader(http)
}
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './appointment/update-appointment/update-appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
//import { AppointmentService } from './appointment/service/appointment.service';
//import { DataTablesModule } from 'angular-datatables';
import { DataTablesModule } from 'angular-datatables';
import { AppointmentListVendorComponent } from './appointment/appointment-list-vendor/appointment-list-vendor.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { VendorsuggestionComponent } from './vendorsuggestion/vendorsuggestion.component';
import { ServiceProviderUserUiComponent } from './service-provider-user-ui/service-provider-user-ui.component';
import { AppointmentNavComponent } from './appointment/appointment-nav/appointment-nav.component';
import {MatBadgeModule} from '@angular/material/badge';




@NgModule({
  declarations: [
    AppComponent,
    SuggestionsComponent,
    UpdateComponent,
    ServiceselectionComponent,
    LoginComponent,
    RegisterationComponent,
    SubServiceSelectionComponent,
    VendorSelectionComponent,
    CompalintServiceComponent,
    NavBarComponent,
    FeedbackComponent,
    PaymentComponent,
    ChatBoatServiceComponent,
    VendorDescriptionComponent,
    VendorUpdateComponent,
    ChatComponent,
    LocationTrackingComponent,
    VendorServicesComponent,

    VendorServiceListUiComponent,
    BlogsComponent,
    ReadblogsComponent,
    FooterComponent,
    NavbarVendorComponent,
    VendorServiceListUiComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    AppointmentListComponent,
    TransactionhistoryComponent,
    AppointmentListVendorComponent,





    ServiceProviderUserUiComponent,
    VendorsuggestionComponent,
    
    TransactionhistoryComponent,
    AppointmentListVendorComponent,
    VendorsuggestionComponent,

    LocationTrackingComponent,

    LocationTrackingComponent,
    AppointmentNavComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    NgxPaginationModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MaterialFileInputModule,
    NgbModule,
    HttpClientModule,
    LayoutModule,
    MatTooltipModule,
    MatChipsModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    DataTablesModule,
    MatBadgeModule,
    MatSortModule,
    TranslateModule.forRoot({
        loader:{
          provide:TranslateLoader,
          useFactory:HttpLoaderFactory,
          deps:[HttpClient]
        }
    }),
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
