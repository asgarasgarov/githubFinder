import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';

// Services
import { GithubService } from './services/github.service';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faInfoCircle, faMapMarkerAlt, faEnvelope, faGlobe, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faInfoCircle, faMapMarkerAlt, faEnvelope, faGlobe, faBuilding, faCalendarAlt);

// PrimeNG components
import { AutoCompleteModule } from 'primeng/autocomplete';

// LoaderCSS
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AutoCompleteModule,
    LoadersCssModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
