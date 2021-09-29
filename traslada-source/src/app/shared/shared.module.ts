import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./material/materia.module";

const components = [
    NavbarComponent, 
    LayoutComponent, 
]

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [
        MaterialModule,
        RouterModule,
        FlexLayoutModule
    ]
})
export class SharedModule {}