import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentDetailsTask';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Ryan",
		last_name : "Britto",
		email : "ryanbritto3@gmail.com",
		phone : 9004568904,
		department : "MCA"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
