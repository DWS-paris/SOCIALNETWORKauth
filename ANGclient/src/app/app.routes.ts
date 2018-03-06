/*
Configuration de la route
*/
    // Import des interfaces
    import { ModuleWithProviders } from '@angular/core'
    import { Routes, RouterModule } from '@angular/router'


    // Créer une constante pour définir le comportement des routes
    const appRoutes: Routes = [
        /*
            Définir une route : Créer un objet avec path et component
        */
        {
            path: '',
            loadChildren: './components/homepage/module#HomepageModule'
        },
        {
            path: 'login',
            redirectTo: '',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            loadChildren: './components/dashboard/module#DashboardModule'
        },
        {
            path: 'profile',
            loadChildren: './components/profile/module#ProfileModule'
        }
    ]
//



/*
Export de la route
*/
    export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
//