/** Keep scroll and decorative animation off on touch-sized and reduced-motion views. */
export function isMotionEnabled(): boolean {
    return window.matchMedia(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    ).matches;
}
