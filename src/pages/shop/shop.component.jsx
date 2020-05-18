import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collection-overview/collection-overview'
import CollectionPage from '../../pages/collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{

    state = {
        loading: true
    }
    
    componentDidMount(){
        
        this.setState({ loading: false})
    }
    
    render() {
        const { match } = this.props
        const { loading } = this.state
        return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
            <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)}/>
        </div>
        )
    }
}


  
  export default ShopPage