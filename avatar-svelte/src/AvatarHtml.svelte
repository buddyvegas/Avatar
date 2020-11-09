<script lang="ts">
  import { getInitials } from "./utils";

  // export let fontColor: string = "#000000";
  export let name: string = "toto";

  // ajouter un fond blanc + fond transparent + texte couleur généré
</script>

<svelte:options tag="af-avatar-html" />
<div>{getInitials(name)}</div>
