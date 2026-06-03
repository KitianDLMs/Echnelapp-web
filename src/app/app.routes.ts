import { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { RespaldoInformacionComponent } from "./pages/blog/articles/respaldo-informacion/respaldo-informacion.component";
import { MantenimientoPcComponent } from "./pages/blog/articles/mantenimiento-pc/mantenimiento-pc.component";
import { CamarasSeguridadComponent } from "./pages/blog/articles/camaras-seguridad/camaras-seguridad.component";
import { TransformacionDigitalComponent } from "./pages/blog/articles/transformacion-digital/transformacion-digital.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactComponent },

  { path: 'respaldo-informacion', component: RespaldoInformacionComponent },
  { path: 'mantenimiento-pc', component: MantenimientoPcComponent },
  { path: 'camaras-seguridad', component: CamarasSeguridadComponent },
  { path: 'transformacion-digital', component: TransformacionDigitalComponent }
];