<script lang="ts">
  import { getColor, getInitials } from "./utils";

  export let fontColor: string = "#000000";
  export let name: string = "toto";

  // ajouter un fond blanc + fond transparent + texte couleur généré
</script>

<svelte:options tag="af-avatar-svg" />
<svg version="1.1" viewBox="0 0 50 50">
  <circle
    fill={getColor(name)}
    stroke="#fff"
    stroke-width="2"
    cx="25"
    cy="25"
    r="24"
    opacity="1" />
  <text x="17" y="30" text-anchor="middle" fill={fontColor}>
    {getInitials(name)}
  </text>
</svg>
