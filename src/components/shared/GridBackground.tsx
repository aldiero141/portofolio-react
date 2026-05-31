export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden bg-background">
      {/* 3D Perspective Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            transform: "rotateX(60deg) translateY(-10%)",
            transformOrigin: "center center",
          }}
        >
          {/* The Animated Grid */}
          <div
            className="absolute inset-0 h-[200%] w-full animate-[grid-move_2s_linear_infinite] opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--primary) 1px, transparent 1px),
                linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to top, black 20%, transparent 80%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 20%, transparent 80%)",
            }}
          />

          {/* Horizon Glow */}
          {/* <div
            className="absolute top-0 left-0 h-px w-full bg-primary shadow-[0_0_20px_var(--primary)]"
            style={{
              boxShadow: "0 0 40px 10px var(--secondary)",
              opacity: 0.6,
            }}
          /> */}
        </div>
      </div>

      {/* Ambient Neon Glows */}
      <div className="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-primary/20 opacity-30 blur-[120px]" />
      <div className="absolute -right-[10%] -bottom-[10%] h-[50%] w-[50%] rounded-full bg-primary/20 opacity-30 blur-[120px]" />
      <div className="absolute top-[20%] left-[-5%] h-[30%] w-[30%] rounded-full bg-yellow-400/10 opacity-30 blur-[100px]" />
      <div className="absolute right-[10%] -bottom-[10%] h-[30%] w-[30%] rounded-full bg-yellow-400/10 opacity-30 blur-[100px]" />

      {/* Vignette and Grain Overlay */}
      <div className="bg-radial-gradient absolute inset-0 from-transparent via-transparent to-background opacity-80" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65536' numOctaves='3' stitchTiling='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
