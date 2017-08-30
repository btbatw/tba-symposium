import { Component, OnInit } from '@angular/core';

import { TestAdminService } from './test-admin.service';

@Component({
	selector: 'app-test-admin',
	templateUrl: './test-admin.component.html',
	styleUrls: ['./test-admin.component.scss'],
	providers: [TestAdminService]
})
export class TestAdminComponent implements OnInit {
	channelsAndStreams;
	constructor(private testAdminService: TestAdminService) { }

	ngOnInit() {
		this.testAdminService.getUsers()
			.subscribe(result => {
				console.log(result);
				this.channelsAndStreams = result;
			});
	}

	addUser() {
		this.testAdminService.addUser()
			.subscribe(result => console.log(result));
	}

}
