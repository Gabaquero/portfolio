<script>
  import { onMount } from "svelte";
  let isExpanded = false;

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

<div class={`relative ${isExpanded ? "z-50 fixed inset-0 bg-black bg-opacity-50" : ""}`}>
  <button
    type="button"
    class={`card transition-transform duration-300 ease-in-out ${
      isExpanded ? "scale-100 fixed inset-0 bg-white p-8 overflow-auto" : ""
    }`}
    on:click={toggleExpand}
  aria-expanded={isExpanded}>
</button>
  <slot name="main" />
  {#if isExpanded}
    <div class="content">
      <slot name="expanded" />
    </div>
  {/if}
</div>

<style>
  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
