


import Stripe from 'stripe';
import { Elements } from '@stripe/react-stripe-js';
const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);
function donate() {
  <Elements stripe={stripe}>
  <form onSubmit={this.handleSubmit}>
    <label>
      Donation amount:
      <input
        type="number"
        value={this.state.amount}
        onChange={this.handleAmountChange}
      />
    </label>
    <br />
    <label>
      Credit card:
      <CardElement ref={this.cardElement} />
    </label>
    <br />
    <button type="submit">Donate</button>
  </form>
</Elements>
handleSubmit = async (event) => {
  event.preventDefault();

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: 'card',
    card: this.cardElement.current,
  });

  if (error) {
    console.log(error);
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: this.state.amount * 100,
      currency: 'usd',
      description: 'Donation'
    });

    console.log(paymentIntent);
  }
}}



export default donate;
