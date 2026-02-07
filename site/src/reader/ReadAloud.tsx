import { useMemo } from "react";
import { useSpeech } from "./useSpeech";

function pickDefaultVoice(voices: SpeechSynthesisVoice[]) {
  return (
    voices.find((v) => /en-/i.test(v.lang) && /Siri|Google|Microsoft/i.test(v.name)) ??
    voices.find((v) => /en-/i.test(v.lang)) ??
    voices[0] ??
    null
  );
}

export function ReadAloud({
  text,
  label = "Read aloud",
  defaultRate = 0.85,
}: {
  text: string;
  label?: string;
  defaultRate?: number;
}) {
  const { voices, speaking, paused, speak, pause, resume, stop } = useSpeech();
  const defaultVoice = useMemo(() => pickDefaultVoice(voices), [voices]);

  const onStart = () => {
    // ✅ correct: pass rate when creating utterance
    speak(text, { voice: defaultVoice, rate: defaultRate });
  };

  return (
    <div className="reader-tts">
      {!speaking ? (
        <button type="button" onClick={onStart}>
          ▶︎ {label}
        </button>
      ) : paused ? (
        <button type="button" onClick={resume}>
          ▶︎ Resume
        </button>
      ) : (
        <button type="button" onClick={pause}>
          ⏸ Pause
        </button>
      )}

      <button type="button" onClick={stop} disabled={!speaking}>
        ⏹ Stop
      </button>
    </div>
  );
}
