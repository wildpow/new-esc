import loadable from 'loadable-components'

export const BrandsComponent = loadable(() => import('./Components/Brands/Brands'));
export const AdjustableComponent = loadable(() => import('./Components/Adjustable/Adjustable'));
export const AccessoriesCompoent = loadable(() => import('./Components/Accessories/Accessories'));
export const FinancingComponent = loadable(() => import('./Components/Financing/Financing'));
export const BlogComponent = loadable(() => import('./Components/Blog/Blog'));
export const AboutComponent = loadable(() => import('./Components/About/About'));
// export const HomeComponent = loadable(() => import('./Components/Home/Home'));

export const SingleBase = loadable(() => import('./Components/Adjustable/SingleBase'));
export const SingleMattress = loadable(() => import('./Components/SingleMattress/SingleMattress'));
export const Post = loadable(() => import('./Components/Blog/Post/Post'));
export const Sealy = loadable(() => import('./Components/MattressList/Sealy'));
export const Tempur = loadable(() => import('./Components/MattressList/Tempur'));
export const Stearns = loadable(() => import('./Components/MattressList/Stearns'));
export const Panda404 = loadable(() => import('./Components/Panda404/Panda404'));





// HomeComponent.load()

