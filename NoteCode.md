# css nút active

```js
<button className="liquid-glass rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white whitespace-nowrap self-start">
  {"Let's Team Up Today"}
</button>
```

# BackgroundVideo tư chuyển động

```js
{
  /* Column 1 - Background */
}
<div className="relative rounded-2xl bg-black overflow-hidden flex flex-col min-h-[320px] md:min-h-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
      type="video/mp4"
    />
  </video>
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
    <div className="pt-2">
      <SectionLabel>Background</SectionLabel>
    </div>
    <div className="mt-auto space-y-2">
      <TimelineItem
        years="2023-Now"
        role="Freelance Creative"
        company="Solo Studio"
      />
      <TimelineItem
        years="2020-2023"
        role="Head of Brand Design"
        company="Rove Studio"
      />
      <TimelineItem
        years="2017-2020"
        role="Visual Stylist"
        company="Ember Works"
      />
    </div>
  </div>
</div>;
```

# BackgroundVideo tư chuyển động và giới thiệu bản thân

```js
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1">
  <p className="text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-3xl">
    I am a Fullstack Developer with experience in building modern web and mobile
    applications, specializing in React Native, Next.js, Kotlin, Swift and .NET.
    I have hands-on experience in UI/UX development, backend API architecture,
    database integration, and implementing features related to payment systems
    and cryptocurrency/token swaps. Throughout my career, I have contributed to
    multiple real-world projects, optimized application performance, and built
    scalable system architectures. Besides strong technical skills, I am a fast
    learner who actively explores new technologies and works effectively both
    independently and in team environments.
  </p>
  {/* Column 1 - Background */}
  <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col min-h-[320px] md:min-h-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
      <div className="pt-2">
        <SectionLabel>Background</SectionLabel>
      </div>
      <div className="mt-auto space-y-2">
        <TimelineItem
          years="2023-Now"
          role="Freelance Creative"
          company="Solo Studio"
        />
        <TimelineItem
          years="2020-2023"
          role="Head of Brand Design"
          company="Rove Studio"
        />
        <TimelineItem
          years="2017-2020"
          role="Visual Stylist"
          company="Ember Works"
        />
      </div>
    </div>
  </div>
</div>
```

# giao diện 2 cột

```js
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
  {/* Left Column */}
  <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
    <h2 className="text-xl font-semibold text-white">About Me</h2>

    <p className="mt-4 text-sm leading-7 text-white/70">
      Fullstack Developer with experience in React Native, Next.js, Kotlin and
      Spring Boot.
    </p>
  </div>

  {/* Right Column */}
  <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
    <h2 className="text-xl font-semibold text-white">Experience</h2>

    <div className="mt-4 space-y-4">
      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
        <p className="text-sm font-medium text-white">React Native Developer</p>

        <p className="mt-1 text-xs text-white/50">Mobile App Development</p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
        <p className="text-sm font-medium text-white">Spring Boot API</p>

        <p className="mt-1 text-xs text-white/50">
          Backend & Database Architecture
        </p>
      </div>
    </div>
  </div>
</div>
```

```js
{
  /* 10M+ */
}
<div className="relative rounded-2xl bg-black overflow-hidden flex flex-col items-center justify-center min-h-[200px] flex-1">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
      type="video/mp4"
    />
  </video>
  <div className="absolute inset-0 bg-black/30" />
  <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-tight drop-shadow-lg">
      10M+
    </span>
    <span className="text-sm text-white/85 mt-2">Raised for startups</span>
  </div>
</div>;
```
