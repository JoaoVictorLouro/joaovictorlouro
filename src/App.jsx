import { Hero } from "./frames/Hero.jsx";
import { Metrics } from "./frames/Metrics.jsx";
import { Optics } from "./frames/Optics.jsx";
import { Portrait } from "./frames/Portrait.jsx";
import { Stack } from "./frames/Stack.jsx";

export function App() {
  return (
    <main className="stage">
      <p className="stage-note">
        FRAME_STUDIO // preview stage is outside the capture
      </p>
      <Hero />
      <Portrait />
      <Optics />
      <Metrics />
      <Stack />
    </main>
  );
}
