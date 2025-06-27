import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Work } from '@/components/work';

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Work />
      <Projects />
    </main>
  );
}
