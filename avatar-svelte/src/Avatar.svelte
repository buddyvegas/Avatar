<script>
  export let fontColor = "#000000";
  export let name = "toto";

  const getInitials = (name) =>
    name
			? name
					.toUpperCase()
          .split(/[-\s]/g)
          .map((x) => x.charAt(0))
          .join("")
          .substring(0, 3)
      : "";

  const getColor = (name) => {
    const saturation = 100;
    const lightness = 55;

    const hash = name
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);

    const hue = Math.abs(hash % 360);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	};
	
	// ajouter un fond blanc + fond transparent + texte couleur généré
</script>

<svg version="1.1" viewBox="0 0 50 50">
  <circle
    fill={getColor(name)}
    stroke="#fff"
    strokeWidth="2"
    cx="25"
    cy="25"
    r="24"
    opacity="1" />
  <text x="25" y="26" dy="0.35em" textAnchor="middle" fill={fontColor}>
    {getInitials(name)}
  </text>
</svg>
