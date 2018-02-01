import React from 'react';
import { Route } from 'react-router-dom'

export default (
  <Route>
    <Route path="/" component={HomeComponent} exact/>
            <Route path="/adjustable" component={AdjustableComponent} exact/>
            <Route path="/Accessories" component={AccessoriesCompoent} exact/>
            <Route path="/financing" component={FinancingComponent} exact/>
            <Route path="/blog" component={BlogComponent} exact/>
            <Route path="/about" component={AboutComponent} exact/>
            <Route path="/brands" component={BrandsComponent} exact/>

            <Route path="/brands/sealy" component={Sealy} exact/>
            <Route path="/brands/stearns" component={Stearns} exact/>
            <Route path="/brands/tempurpedic" component={Tempur} exact/>
            
            <Route path="/adjustable/:uri" component={SingleBase}/>
            <Route path="/brands/tempurpedic/:uri" component={SingleMattress}/>
            <Route path="/brands/sealy/:uri" component={SingleMattress}/>
            <Route path="/brands/stearns/:uri" component={SingleMattress}/>
            <Route component={Panda404}/>
            </Route>
)
