<script lang="ts">
  import { getColor, getInitials } from "./utils";

  export let name: string = "toto";
  export let size: number = 60;

  // ajouter un fond blanc + fond transparent + texte couleur généré
</script>

<svelte:options tag="af-avatar-svg" />
<svg version="1.1" viewBox="0 0 50 50" width={size} height={size}>
  <circle
    fill={getColor(name)}
    stroke="#fff"
    stroke-width="2"
    cx="25"
    cy="25"
    r="24"
    opacity="1" />
  <text x="25" y="30" text-anchor="middle" fill="#000" opacity="0.8">
    {getInitials(name)}
  </text>
</svg>
