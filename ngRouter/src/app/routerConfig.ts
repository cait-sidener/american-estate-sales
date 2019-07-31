import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SalesComponent } from './components/sales/sales.component';
import { ServicesNavComponent } from './components/services-nav/services-nav.component';

const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: 'about',
    component: AboutComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'sales',
    component: SalesComponent
  },
  { path: 'services',
    component: ServicesNavComponent
  },
];

export default appRoutes;
