<template>
  <div class="w3-modal w3-border w3-round">
    <div
      class="w3-modal-content w3-card-4 w3-animate-zoom"
      style="max-width:600px"
    >
      <div class="w3-center">
        <br />
        <span
          onclick="document.getElementById('login').style.display='none'"
          class="w3-button w3-xlarge w3-transparent w3-display-topright"
          title="Close Modal"
          >×</span
        >
        <img
          src="../components/assets/img_avatar.png"
          alt="Avatar"
          style="width:30%"
          class="w3-circle w3-margin-top"
        />
      </div>

      <form class="w3-container">
        <div class="w3-section">
          <label><b>Username</b></label>
          <input
            class="w3-input w3-border w3-margin-bottom"
            type="text"
            placeholder="Enter Username"
            name="usrname"
            v-model="username"
            required
          />
          <label><b>Password</b></label>
          <input
            class="w3-input w3-border"
            type="text"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button
            class="w3-button  w3-purple w3-section w3-padding"
            type="submit"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
