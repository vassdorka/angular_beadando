import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'list', component: ListComponent, canActivate: [IsLoggedInGuard] },
  {
    path: 'details/:id',
    component: UpdateComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [IsLoggedInGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
