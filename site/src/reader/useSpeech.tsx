import { useEffect, useMemo, useRef, useState } from "react";

export function useSpeech() {
  const synth = useMemo(() => window.speechSynthesis, []);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!synth) return;

    const load = () => setVoices(synth.getVoices());
    load();
    // Some browsers populate voices async
    synth.addEventListener?.("voiceschanged", load);
    return () => synth.removeEventListener?.("voiceschanged", load);
  }, [synth]);

  function stop() {
    synth.cancel();
    utterRef.current = null;
    setSpeaking(false);
    setPaused(false);
  }

  function speak(text: string, opts?: {
    voice?: SpeechSynthesisVoice | null;
    rate?: number;
    pitch?: number;
    volume?: number;
  }) {
    if (!text?.trim()) return;

    stop(); // cancel any prior reading

    const u = new SpeechSynthesisUtterance(text);
    utterRef.current = u;

    if (opts?.voice) u.voice = opts.voice;
    if (opts?.rate) u.rate = opts.rate;
    if (opts?.pitch) u.pitch = opts.pitch;
    if (opts?.volume) u.volume = opts.volume;

    u.onstart = () => { setSpeaking(true); setPaused(false); };
    u.onend = () => { setSpeaking(false); setPaused(false); };
    u.onerror = () => { setSpeaking(false); setPaused(false); };

    synth.speak(u);
  }

  function pause() {
    if (!speaking) return;
    synth.pause();
    setPaused(true);
  }

  function resume() {
    if (!speaking) return;
    synth.resume();
    setPaused(false);
  }

  // Stop when component unmounts (important)
  useEffect(() => stop, []);

  return { voices, speaking, paused, speak, pause, resume, stop };
}