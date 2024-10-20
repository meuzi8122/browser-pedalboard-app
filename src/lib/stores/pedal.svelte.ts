import type { Pedal, PedalParameters, PedalType } from "$lib/types/pedal";

export function createPedals() {
  let pedals = $state<Pedal[]>([]);

  function addPedal(pedalType: PedalType) {
    pedals.push({ id: crypto.randomUUID(), type: pedalType, parameters: initPedalParameters(pedalType) });
  }

  function deletePedal(id: string) {
    pedals = [...pedals.filter((pedal) => pedal.id != id)];
    pedals = pedals;
  }

  function initPedalParameters(pedalType: PedalType): PedalParameters {
    switch (pedalType) {
      case "delay":
        return { delayTime: 0, maxDelay: 0 };
      case "distortion":
        return { distortion: 0, oversample: 0 };
    }
  }

  return {
    pedals,
    addPedal,
    deletePedal,
  };
}
