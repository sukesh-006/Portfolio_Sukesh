import { useEffect, useState } from 'react';
import { CalendarDays, ExternalLink, Github, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/Reveal';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

const exploringTopics = [
  'LLM Agents',
  'Vector Databases',
  'MLOps',
  'AI Product Design',
];

const formatUpdatedDate = (value: string) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const CurrentlyLearningSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sukesh-006/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error(`GitHub API request failed: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('GitHub API did not return a valid array');
        }

        if (isMounted) {
          setRepos(data.filter((repo) => !repo.fork).slice(0, 6));
        }
      } catch (error) {
        console.warn('GitHub repos could not be loaded:', error);
        if (isMounted) {
          setRepos([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="currently-learning" className="relative overflow-hidden border-y border-slate-800 bg-slate-950 py-24 text-slate-100 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24rem] text-cyan-300">Current Focus</span>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Currently Learning</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
        </Reveal>

        <Reveal className="mb-12" delay={80}>
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.2)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Currently exploring</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {exploringTopics.map((topic, index) => (
                <Badge
                  key={topic}
                  variant="outline"
                  className={`border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-medium text-slate-200 ${
                    index % 2 === 0 ? 'border-cyan-500/25 text-cyan-300' : index % 3 === 0 ? 'border-indigo-500/25 text-indigo-300' : 'border-purple-500/25 text-purple-300'
                  }`}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-6 flex items-center justify-between gap-3" delay={120}>
          <div className="flex items-center gap-3">
            <Github className="h-6 w-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Recent GitHub Activity</h3>
          </div>
        </Reveal>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-[220px] animate-pulse rounded-[28px] border border-slate-800 bg-slate-900/60" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center text-slate-300">
            GitHub repositories are temporarily unavailable. Check back shortly.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo, index) => (
              <Reveal key={repo.id} delay={index * 80}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-[28px] border border-slate-800 bg-slate-900/80 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_26px_80px_rgba(34,211,238,0.12)]"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Github className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Repository</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
                  </div>

                  <h4 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-300">{repo.name}</h4>
                  <p className="mb-4 min-h-[48px] text-sm leading-relaxed text-slate-300">
                    {repo.description || 'Public project exploring practical, AI-driven product and engineering ideas.'}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {repo.language ? (
                      <Badge variant="outline" className="border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[10px] text-slate-200">
                        {repo.language}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[10px] text-slate-200">
                        Multi-language
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-amber-400" />
                      <span className="font-medium text-slate-300">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-slate-500" />
                      <span>Updated {formatUpdatedDate(repo.updated_at)}</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentlyLearningSection;
