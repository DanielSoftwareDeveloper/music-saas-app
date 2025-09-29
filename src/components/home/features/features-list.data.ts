import {
  AudioLines,
  CloudDownload,
  LetterText,
  AudioWaveform, // Icon for progress
} from "lucide-react";

export const featuresList = [
  {
    title: "Create amazing beats",
    color: "text-blue-200",
    description:
      "Generate unique instrumentals in seconds, from hip-hop to EDM and explore endless creative possibilities.",
    icon: AudioLines,
  },
  {
    title: "Create songs with voice",
    color: "text-emerald-200",
    description:
      "Add AI-generated vocals to your tracks and bring your songs to life with realistic voices.",
    icon: AudioWaveform,
  },
  {
    title: "Add your own lyrics",
    color: "text-purple-200",
    description:
      "Personalize your music by adding your own lyrics and make every track truly yours.",
    icon: LetterText,
  },
  {
    title: "Download songs",
    color: "text-rose-200",
    description:
      "Export your songs in WAV format and use them for videos, streams, personal projects or just for inspiration",
    icon: CloudDownload,
  },
];
