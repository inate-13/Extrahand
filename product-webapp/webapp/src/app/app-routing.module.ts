import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoatServiceComponent } from './chat-boat-service/chat-boat-service.component';
import { ChatComponent } from './chat/chat.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationTrackingComponent } from './location-tracking/location-tracking.component';
import { ServiceselectionComponent } from './servicesvendorsui/serviceselection/serviceselection.component';
import { SubServiceSelectionComponent } from './servicesvendorsui/sub-service-selection/sub-service-selection.component';
import { VendorDescriptionComponent } from './servicesvendorsui/vendor-description/vendor-description.component';
import { VendorSelectionComponent } from './servicesvendorsui/vendor-selection/vendor-selection.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './user-login-registration-ui/login/login.component';
import { RegisterationComponent } from './user-login-registration-ui/registeration/registeration.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { CompalintServiceComponent } from './compalint-service/compalint-service.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CreateAppointmentComponent } from './appointment/create-appointment/create-appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { UpdateAppointmentComponent } from './appointment/update-appointment/update-appointment.component';
import { VendorServicesComponent } from './vendor-services/vendor-services.component';

import { PaymentComponent } from './payment/payment.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';

import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { VendorServiceListUiComponent } from './vendor-service-list-ui/vendor-service-list-ui.component';
import { AppointmentListVendorComponent } from './appointment/appointment-list-vendor/appointment-list-vendor.component';
import { ServiceProviderUserUiComponent } from './service-provider-user-ui/service-provider-user-ui.component';
import { VendorsuggestionComponent } from './vendorsuggestion/vendorsuggestion.component';
import { VendorDescriptionServiceProviderComponent } from './vendor-description-service-provider/vendor-description-service-provider.component';


import { UserGuard } from './guard/user.guard';

import { AppointmentNavComponent } from './appointment/appointment-nav/appointment-nav.component';






const routes: Routes = [
  {path:"registeration", component:RegisterationComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:ServiceselectionComponent},
  {path:"sub-services",component:SubServiceSelectionComponent},
  {path:"vendors",component:VendorSelectionComponent},
  {path:"chat-bot",component:ChatBoatServiceComponent},
  {path:"suggest",component:SuggestionsComponent},

  {path:"update",component:UpdateComponent,canActivate:[AuthGuard,UserGuard]},
  {path:"vendor-update",component:VendorUpdateComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:"feedback",component:FeedbackComponent,canActivate:[AuthGuard,UserGuard]},
  {path: "payment", component: PaymentComponent,canActivate:[AuthGuard,UserGuard]} ,
  {path: "transactionhistory", component: TransactionhistoryComponent,canActivate:[AuthGuard,UserGuard]},

  {path:"vendor-details",component:VendorDescriptionComponent},
  {path:"location",component:LocationTrackingComponent},
  {path:"chat",component:ChatComponent,canActivate:[AuthGuard]},
  {path:'complaint',component:CompalintServiceComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'blog',component:BlogsComponent,canActivate:[AuthGuard]},
  {path:'create-appointment',component:CreateAppointmentComponent},
  {path:'appointments',component:AppointmentListComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'appointments-vendor',component:AppointmentListVendorComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'update/:appointmentId',component:UpdateAppointmentComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'my-services',component:VendorServiceListUiComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'post-new-service',component:VendorServicesComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'user-view-serviceprovider-service',component:ServiceProviderUserUiComponent},
  {path:'vendor-suggest',component:VendorsuggestionComponent},
  {path:'vendor-details-serviceprovider',component:VendorDescriptionServiceProviderComponent},
  {path:'appoint_nav',component:AppointmentNavComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }