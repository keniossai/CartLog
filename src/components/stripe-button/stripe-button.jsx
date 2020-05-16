import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_8nqr7ZuGwpjw9J6G1vyfQLpp00lEpdVDHX'


    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CartLog Online Shop Ltd.'
            billingAddress
            shippingAddress
            image='https://www.svgrepo.com/show/270272/shopping-cart-cart.svg'
            description={`Your total is \u20A6${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton

