import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
	{ path: '', redirectTo: 'website', pathMatch: 'full' },
	{ path: '**', redirectTo: 'website', pathMatch: 'full' }
	// http://www.backalleycoder.com/2016/05/13/sghpa-the-single-page-app-hack-for-github-pages/
	// { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
	// { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
