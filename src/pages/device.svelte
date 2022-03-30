<script>
    import {
        Page,
        Navbar,
        List,
        ListInput
    } from "framework7-svelte"
</script>

<Page name="device">
  <!-- Page Header -->
  <Navbar backLink></Navbar>
    <!-- Page Content -->
    <List inlineLabels inset>
      <ListInput
        label="Name"
        type="text"
        placeholder="Your name"
        clearButton
      />

      <ListInput
        label="Password"
        type="password"
        placeholder="Your password"
        clearButton
      />
    
      <ListInput
        type="email"
        placeholder="Your e-mail"
        clearButton
      />
    
      <ListInput
        type="url"
        placeholder="URL"
        clearButton
      />
    </List>
</Page>

<style>
  :global(input) {
    text-align: right;
    right: 24px;
  }
</style>