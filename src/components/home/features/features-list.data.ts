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
      "Access a wide range of carefully curated courses designed by industry experts",
    icon: AudioLines,
  },
  {
    title: "Create songs with voice",
    color: "text-emerald-200",
    description:
      "Engage with interactive content, quizzes and assignments to enhance your learning experience.",
    icon: AudioWaveform,
  },
  {
    title: "Add your own lyrics",
    color: "text-purple-200",
    description:
      "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
    icon: LetterText,
  },
  {
    title: "Download songs",
    color: "text-rose-200",
    description:
      "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: CloudDownload,
  },
];
