// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular/forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// angular/common/http
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
import { NavbarHorizontalComponent } from './navbar-horizontal/navbar-horizontal.component';

// Layouts custom
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    HeaderComponent,
    NavbarHorizontalComponent,
    MainLayoutComponent
  ],
  exports: [
    HeaderComponent,
    NavbarHorizontalComponent,
    TranslateModule,
    MainLayoutComponent,
  ]
})
export class SharedComponentsModule {}
