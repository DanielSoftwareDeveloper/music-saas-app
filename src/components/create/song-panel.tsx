"use client";

import { useState } from "react";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2, Music } from "lucide-react";
import { Switch } from "../ui/switch";
import { toast } from "sonner";
import { generateSong, type GenerateRequest } from "~/actions/generation";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "../ui/separator";

// 🎵 Tags predefinidos
const styleTags = [
  "Deep Bass",
  "Electronic Beats",
  "Guitar Riffs",
  "Vocal Harmonies",
  "Synth Pads",
  "Percussive Elements",
  "Bright Pop Synths",
  "Layered Vocals",
  "Catchy Hooks",
  "Danceable Rhythm",
  "Power Chords",
  "Double Bass Drums",
  "Distorted Guitar",
];

// ✅ Esquema Zod
const songSchema = z
  .object({
    description: z.string().min(1, "Please describe your song."),
    styleInput: z.string().min(1, "Please add at least one style."),
    instrumental: z.boolean(),
    addLyrics: z.boolean(),
    lyrics: z.string().optional(),
    lyricsMode: z.enum(["write", "auto"]),
  })
  .refine((data) => data.instrumental || data.addLyrics, {
    message: "Please select a song type",
  })
  .refine(
    (data) => !data.addLyrics || (data.lyrics && data.lyrics.trim().length > 0),
    { message: "Please add or describe your lyrics." },
  );

function Step({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-col gap-2">
      {title && <span className="text-sm font-semibold">{title}</span>}
      {children}
    </div>
  );
}

export function SongPanel() {
  const [description, setDescription] = useState("");
  const [instrumental, setInstrumental] = useState(true);
  const [addLyrics, setAddLyrics] = useState(false);
  const [lyricsMode, setLyricsMode] = useState<"write" | "auto">("write");
  const [lyrics, setLyrics] = useState("");
  const [styleInput, setStyleInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStyleInputTagClick = (tag: string) => {
    const currentTags = styleInput
      .split(", ")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!currentTags.includes(tag)) {
      setStyleInput(currentTags.concat(tag).join(", "));
    }
  };

  const handleCreate = async () => {
    const validation = songSchema.safeParse({
      description,
      styleInput,
      instrumental,
      addLyrics,
      lyrics,
      lyricsMode,
    });

    // ✅ Tipado seguro
    if (!validation.success) {
      const message = validation.error.errors[0]?.message ?? "Invalid input.";
      toast.error(message);
      return;
    }

    // ✅ Usamos const porque no se reasigna
    const finalDescription = `${description} Style: ${styleInput}`;
    let requestBody: GenerateRequest = {
      fullDescribedSong: finalDescription,
      instrumental,
    };

    if (addLyrics) {
      requestBody =
        lyricsMode === "write"
          ? { ...requestBody, lyrics }
          : { ...requestBody, describedLyrics: lyrics };
    }

    try {
      setLoading(true);
      await generateSong(requestBody);
      toast.success("Song created successfully!");
      // Reset de formulario
      setDescription("");
      setLyrics("");
      setStyleInput("");
      setAddLyrics(false);
      setInstrumental(false);
      setLyricsMode("write");
    } catch {
      toast.error("Failed to generate song");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-muted/30 flex w-full flex-col border-r lg:w-80">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {/* Describe song */}
        <Step title="Song Description">
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A dreamy lofi hip hop song, perfect for studying or relaxing"
            className="min-h-[120px] resize-none text-sm"
          />
        </Step>

        <Separator />

        {/* Song Type */}
        <Step title="Song Type">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Switch
                checked={instrumental}
                onCheckedChange={(checked) => {
                  setInstrumental(checked);
                  if (checked) setAddLyrics(false);
                }}
              />
              <span className="text-xs font-medium">Instrumental</span>
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <Switch
                checked={addLyrics}
                onCheckedChange={(checked) => {
                  setAddLyrics(checked);
                  if (checked) setInstrumental(false);
                }}
              />
              <span className="text-xs font-medium">With Lyrics</span>
            </div>
          </div>
        </Step>

        <Separator />

        {/* Lyrics */}
        <AnimatePresence>
          {addLyrics && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Step title="Lyrics">
                <div className="mb-2 flex items-center gap-2">
                  <Button
                    variant={lyricsMode === "write" ? "secondary" : "outline"}
                    size="sm"
                    className="text-xs"
                    onClick={() => setLyricsMode("write")}
                  >
                    Write
                  </Button>
                  <Button
                    variant={lyricsMode === "auto" ? "secondary" : "outline"}
                    size="sm"
                    className="text-xs"
                    onClick={() => setLyricsMode("auto")}
                  >
                    Auto
                  </Button>
                </div>
                <Textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  placeholder={
                    lyricsMode === "write"
                      ? "Add your own lyrics here"
                      : "Describe your lyrics, e.g., a sad song about lost love"
                  }
                  className="min-h-[100px] resize-none text-sm"
                />
              </Step>
            </motion.div>
          )}
        </AnimatePresence>

        <Separator />

        {/* Styles */}
        <Step title="Song Style">
          <Textarea
            value={styleInput}
            onChange={(e) => setStyleInput(e.target.value)}
            placeholder="Enter your style or select a style tag"
            className="min-h-[60px] resize-none text-sm"
          />
          <div className="mt-2 w-full overflow-x-auto whitespace-nowrap">
            <div className="flex gap-2 pb-2">
              {styleTags.map((tag) => (
                <Button
                  key={tag}
                  size="sm"
                  variant="outline"
                  className="h-7 flex-shrink-0 text-xs"
                  onClick={() => handleStyleInputTagClick(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </Step>
      </div>

      {/* Submit button */}
      <div className="border-t p-4">
        <Button
          onClick={handleCreate}
          disabled={loading}
          className="w-full cursor-pointer bg-emerald-400 font-semibold hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="mr-2 animate-spin" />
          ) : (
            <Music className="mr-2" />
          )}
          {loading ? "Creating..." : "Create Song"}
        </Button>
      </div>
    </div>
  );
}
