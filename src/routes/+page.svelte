<script lang="ts">
  import * as Tone from "tone";
  import Button from "$lib/components/ui/Button/Button.svelte";
  import { createPedals } from "$lib/stores/pedal.svelte";
  import { PEDAL_TYPES } from "$lib/constants/pedal";
  import type { PedalType } from "$lib/types/pedal";

  const { pedals, addPedal, deletePedal } = createPedals();

  async function onClick() {
    const player = new Tone.Player("sample.wav").toDestination();
    const reverb = new Tone.Distortion(0.3);
    player.connect(reverb.toDestination());
    player.connect(new Tone.Delay(0.5).toDestination());
    await Tone.loaded();
    player.start();
  }
</script>

{#each pedals as { id, parameters }}
  <div>
    {id}
    {#each Object.entries(parameters) as [name, value]}
      {name}: <input type="text" bind:value />
    {/each}
    <Button on:click={() => deletePedal(id)}>delete</Button>
  </div>
{/each}

{#each Object.entries(PEDAL_TYPES) as [pedalType, label]}
  <Button on:click={() => addPedal(pedalType as PedalType)}>{label}</Button>
{/each}
<Button on:click={onClick}>Play</Button>
