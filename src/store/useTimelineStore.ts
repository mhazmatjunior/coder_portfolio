import { create } from 'zustand';

interface TimelineState {
    currentChapter: number;
    totalChapters: number;
    isPlaying: boolean;
    nextChapter: () => void;
    prevChapter: () => void;
    setChapter: (index: number) => void;
    play: () => void;
    pause: () => void;
}

export const useTimelineStore = create<TimelineState>((set) => ({
    currentChapter: 0,
    // 0: Opening
    // 1: Foundation (HTML)
    // 2: Styling (CSS)
    // 3: Interactivity (JS)
    // 4: Optimization (Perf)
    // 5: Security
    // 6: Deployment
    // 7: Grand Reveal
    totalChapters: 8,
    isPlaying: true,

    nextChapter: () => set((state) => ({
        currentChapter: Math.min(state.currentChapter + 1, state.totalChapters - 1)
    })),

    prevChapter: () => set((state) => ({
        currentChapter: Math.max(state.currentChapter - 1, 0)
    })),

    setChapter: (index) => set({ currentChapter: index }),

    play: () => set({ isPlaying: true }),
    pause: () => set({ isPlaying: false }),
}));
