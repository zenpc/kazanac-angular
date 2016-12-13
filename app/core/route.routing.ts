import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from '../component/dashboard/dashboard.component';
import {MenuComponent}      from '../component/menu/menu.component';
import {FooterComponent}  from '../Component/footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'menu', component: MenuComponent},
 // {path: 'footer', component: FooterComponent}
];


export const RoutesModule = RouterModule.forRoot(routes);

