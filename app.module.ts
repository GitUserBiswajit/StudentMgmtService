import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './components/students/services/auth/auth.service';
import { UserService } from './components/students/services/user/user.service';
import { StudentService } from './components/students/services/student/student.service';
import { StudentAddComponent } from './components/students/add/add.component';
import { StudentDetailsComponent } from './components/students/details/details.component';
import { homeChildRoutes, HomeComponent } from './components/home/home.component';



// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
	declarations: [
	AppComponent,
	StudentAddComponent,
	StudentDetailsComponent,
	StudentAddComponent,
	LoginComponent,
	HomeComponent
	],
	imports: [
	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	],
	providers: [AuthService,UserService,StudentService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }