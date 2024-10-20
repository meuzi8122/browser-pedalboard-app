<script lang="ts">
  import * as Tone from "tone";

  async function onClick() {
    const player = new Tone.Player("sample.wav").toDestination();
    const reverb = new Tone.Distortion(0.3);
    player.connect(reverb.toDestination());
    player.connect(new Tone.Delay(0.5).toDestination());
    await Tone.loaded();
    player.start();
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={onClick}>Play</button>
