import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
      },
      {
        path:'',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
      },
      {
        path:'page-not-found',
        pathMatch: 'full',
        component: PageNotFoundComponent
      },
      {
        path:'**',
        redirectTo:'page-not-found'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
