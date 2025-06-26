import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Work } from '@/components/work';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <main>
          <About />
          <Skills />
          <Work />
          <Projects />
        </main>
      </div>
    </>
  );
}
