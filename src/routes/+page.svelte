<script>
  import { goto } from '$app/navigation'
  import { PUBLIC_PAYSTACK_KEY, PUBLIC_STANDARD_PLAN } from '$env/static/public'

  let name,
    amount,
    email = ''

  function payWithPaystack(e) {
    e.preventDefault()

    let handler = PaystackPop.setup({
      key: PUBLIC_PAYSTACK_KEY,
      email,
      amount: amount * 100,
      callback: function () {
        goto('/pay/success')
      }
    })

    handler.openIframe()
  }

  function subscribeWithPaystack(e) {
    e.preventDefault()

    let handler = PaystackPop.setup({
      key: PUBLIC_PAYSTACK_KEY,
      email,
      amount: amount * 100,
      plan: PUBLIC_STANDARD_PLAN,
      callback: function () {
        goto('/subscribe/success')
      }
    })

    handler.openIframe()
  }
</script>

<div class="item">
  <div class="overlay-effect" />
  <div class="item-details">
    <p class="item-details__title">Amount to Pay</p>
    <p class="item-details__amount">NGN {amount || 0}</p>
  </div>
</div>
<div class="checkout">
  <form class="checkout-form">
    <div class="checkout-field">
      <label for="amount">Amount</label>
      <input required type="number" bind:value={amount} />
    </div>
    <div class="checkout-field">
      <label for="name">Name</label>
      <input required type="text" bind:value={name} />
    </div>
    <div class="checkout-field">
      <label for="email">Email</label>
      <input required type="email" bind:value={email} />
    </div>
    <button type="submit" name="pay" value="pay" on:click={payWithPaystack}>Pay Once</button>
    <button type="submit" name="subscribe" value="subscribe" on:click={subscribeWithPaystack}
      >Subscribe</button>
  </form>
</div>
