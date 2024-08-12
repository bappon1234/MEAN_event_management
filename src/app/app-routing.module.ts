import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EventDeleteComponent } from './components/event-delete/event-delete.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [
    {path:'event', component:EventListComponent},
    {path:'event/:id', component:EventDetailComponent},
    {path:'create', component:EventCreateComponent},
    {path:'edit/:id', component:EventEditComponent},
    {path: 'delete/:id', component:EventDeleteComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'', redirectTo:'register', pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes),
        CommonModule,
        BrowserModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports:[RouterModule]
})

export class AppRoutingModule { }
