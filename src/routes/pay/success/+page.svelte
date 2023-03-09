<script>
  import { goto } from '$app/navigation'
</script>

<div class="app card">
  <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
    <i class="checkmark">✓</i>
  </div>
  <h1>Success</h1>
  <p>Your payment was successful!</p>

  <button on:click={() => goto('/')}>Pay Again</button>
</div>

<style>
  h1 {
    color: #88b04b;
    font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: #404f5e;
    font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 0;
  }
  i {
    color: #9abc66;
    font-size: 100px;
    line-height: 200px;
    margin-left: -15px;
  }
  .card {
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #c8d0d8;
    display: inline-block;
    margin: 0 auto;
  }

  button {
    margin-top: 6px;
  }
</style>
