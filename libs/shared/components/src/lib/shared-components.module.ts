// Angular
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// ngx-perfect-scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Components custom
import { HeaderComponent } from './header/header.component';

// Layouts custom
import { MainLayoutComponent } from './layouts';
import { NavbarHorizontalComponent } from './navbar-horizontal/navbar-horizontal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

    // ng-bootstrap
    NgbModule,

    // ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // ngx-perfect-scrollbar
    PerfectScrollbarModule,
  ],
  declarations: [
    HeaderComponent,
    NavbarHorizontalComponent,

    // Layouts
    MainLayoutComponent
  ],
  exports: [
    HeaderComponent,
    NavbarHorizontalComponent,
    TranslateModule,

    // Layouts
    MainLayoutComponent,
  ]
})
export class SharedComponentsModule {}
