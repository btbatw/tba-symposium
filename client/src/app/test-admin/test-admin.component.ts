import { Component, OnInit } from '@angular/core';

import { TestAdminService } from './test-admin.service';

@Component({
	selector: 'app-test-admin',
	templateUrl: './test-admin.component.html',
	styleUrls: ['./test-admin.component.scss'],
	providers: [TestAdminService]
})
export class TestAdminComponent implements OnInit {
	symposium;
	constructor(private testAdminService: TestAdminService) { }

	ngOnInit() {
		this.testAdminService.getSymposium()
			.subscribe(result => this.symposium = result[0]);
	}

	addUser() {
		this.testAdminService.addUser()
			.subscribe(result => console.log(result));
	}

	keysOfObj(obj) {
		return Object.keys(obj);
	}

	showPageLink(identifier, key, obj) {
		return !obj[key][identifier] ? false : obj[key][identifier];
	}

	getSpeakers(schedules) {
		schedules.forEach(schedule => {

		});
		// return schedules.reduce((prev, curr) =>
		// 	[...prev, ...curr.speakers],
		// 	[]
		// ).filter(element => element.name);
	}

	getTalks(schedules) {
		let output =  schedules
			.filter(element => element.speakers[0])
			.filter(element => element.speakers[0].name)
			.map(element => {
				let schedule = { ...element };
				delete schedule.speakers;
				return element.speakers.map(element =>
					element = { ...element, ...schedule}
				);
			})
			.reduce((prev, curr) => [...prev, ...curr], []);
		return output;
	}



}
