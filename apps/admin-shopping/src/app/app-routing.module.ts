// @angular
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// Layouts
import { MainLayoutComponent } from '@shopping-app/components';

export const routes: Route[] = [
    {
        // Root page
        path: 'home',
        component: MainLayoutComponent,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}