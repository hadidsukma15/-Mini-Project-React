export function LogoMark({ className = 'h-[17px] w-[17px]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1.5c.72 4.63 4.37 8.28 9 9-4.63.72-8.28 4.37-9 9-.72-4.63-4.37-8.28-9-9 4.63-.72 8.28-4.37 9-9Z" />
    </svg>
  )
}

export function FeatureIcon({ name }) {
  if (name === 'book') {
    return (
      <svg
        className="h-[22px] w-[22px] text-[#262b31]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 6.4C10.4 5.17 8.24 4.5 5.6 4.5H3.9A1.4 1.4 0 0 0 2.5 5.9v11.3a1.4 1.4 0 0 0 1.4 1.4h1.7c2.64 0 4.8.66 6.4 1.9 1.6-1.24 3.76-1.9 6.4-1.9h1.7a1.4 1.4 0 0 0 1.4-1.4V5.9a1.4 1.4 0 0 0-1.4-1.4h-1.7c-2.64 0-4.8.67-6.4 1.9Z" />
        <path d="M12 6.4v14.1" />
      </svg>
    )
  }

  if (name === 'document') {
    return (
      <svg
        className="h-[22px] w-[22px] text-[#262b31]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2.75H7A1.75 1.75 0 0 0 5.25 4.5v15A1.75 1.75 0 0 0 7 21.25h10a1.75 1.75 0 0 0 1.75-1.75V7.5L14 2.75Z" />
        <path d="M14 2.75V7.5h4.75" />
        <path d="M8.75 12h6.5M8.75 15.5h6.5M8.75 8.5h2" />
      </svg>
    )
  }

  return (
    <svg
      className="h-[22px] w-[22px] text-[#262b31]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.25 2.75h11.5A1.5 1.5 0 0 1 19.25 4.25v9.5a1.5 1.5 0 0 1-1.5 1.5H6.25a1.5 1.5 0 0 1-1.5-1.5v-9.5a1.5 1.5 0 0 1 1.5-1.5Z" />
      <path d="M8.5 7.25h7M8.5 10.5h4.25" />
      <path d="M9 15.25v4l3-1.7 3 1.7v-4" />
    </svg>
  )
}

export function HeroIllustration() {
  return (
    <svg
      className="absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 1200 440"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f9a82" />
          <stop offset="0.55" stopColor="#98a08a" />
          <stop offset="1" stopColor="#8a9480" />
        </linearGradient>
      </defs>

      <rect width="1200" height="440" fill="url(#hero-bg)" />

      <g fill="#a7b099" opacity="0.55">
        <ellipse cx="150" cy="80" rx="120" ry="34" />
        <ellipse cx="1050" cy="70" rx="150" ry="40" />
        <ellipse cx="980" cy="380" rx="200" ry="50" />
      </g>

      <g stroke="#7b8770" strokeWidth="4" fill="none" opacity="0.7">
        <path d="M1005 340C1020 250 1060 190 1145 150" />
        <path d="M1035 320C1085 300 1130 300 1185 315" />
        <path d="M1050 270C1015 235 1005 205 1010 165" />
      </g>
      <g fill="#7d8a72" opacity="0.85">
        <ellipse cx="1112" cy="197" rx="42" ry="16" transform="rotate(-28 1112 197)" />
        <ellipse cx="1165" cy="145" rx="36" ry="14" transform="rotate(-12 1165 145)" />
        <ellipse cx="1128" cy="296" rx="38" ry="14" transform="rotate(8 1128 296)" />
        <ellipse cx="1008" cy="183" rx="34" ry="13" transform="rotate(58 1008 183)" />
      </g>

      <path
        d="M92 396C60 330 58 260 96 208c28-39 74-51 112-31 31 16 47 44 68 71 34 44 87 55 118 27 24-22 25-59 12-88l52-20c27 56 21 119-18 165-45 53-123 65-181 28-31-20-52-52-76-80-19-22-45-28-64-14-22 16-27 50-16 88 8 29 22 52 39 70l-50 28Z"
        fill="#d9cfb8"
      />
      <path
        d="M118 384c-22-54-21-108 6-143 22-29 55-38 84-22 25 13 38 36 55 58 38 49 104 67 150 38 30-19 39-55 30-91l72-11c16 65 0 127-48 163-60 45-148 47-207 2-28-22-44-52-67-78-12-13-27-17-41-7-19 13-20 44-9 79 6 21 17 39 30 52l-55 60Z"
        fill="#d2c6ab"
        opacity="0.55"
      />

      <g>
        <circle cx="410" cy="152" r="40" fill="#3f4f43" />
        <path d="M394 137c9-13 31-16 43-6 12 11 13 26 6 34-3-16-18-24-32-20-7 2-12 6-16 11-5-6-4-14-1-19Z" fill="#334238" />
        <path
          d="M356 323c-9-49 14-96 55-108 43-12 85 14 99 54 8 23 4 47-10 64l-138 20c-3-10-5-20-6-30Z"
          fill="#46554a"
        />
        <path
          d="M347 323c-12-52 12-110 64-130 54-21 110 10 124 64 6 24 1 47-12 64l-168 16c-4-9-6-18-8-14Z"
          fill="#3d4c42"
          opacity="0.65"
        />
        <path
          d="M485 233c31 6 61 2 86-12 15-8 28-2 31 14 4 20-9 34-30 34h-74c-9 0-15-6-15-15 0-9 0-16 2-21Z"
          fill="#4a5a4e"
        />
        <path
          d="M488 214c35-16 62-14 82 6 8 8 7 18-3 22-19 8-50 6-88-2l9-26Z"
          fill="#526256"
        />
        <path
          d="M393 291c19-9 40-13 61-11 17 2 28 11 27 23-1 13-14 21-33 22-24 2-46-6-60-17l5-17Z"
          fill="#e9dfc7"
        />
        <path d="M413 295c13-4 27-4 39 0M407 306c14-3 30-2 42 2" stroke="#c2b596" strokeWidth="2" fill="none" />
        <path
          d="M366 327c-10 28-13 55-10 79l36 5c6-25 17-48 32-67l-58-17Z"
          fill="#3a483e"
        />
        <path
          d="M438 328c4 28 14 53 30 73l35-9c-13-22-21-46-24-70l-41 6Z"
          fill="#3a483e"
        />
        <path d="M354 397c-1 8 3 14 12 14h27c7 0 11-5 10-12l-2-9-47 7Z" fill="#2f3b33" />
        <path d="M463 390c9-4 15 1 17 9l4 13c2 7-2 12-9 12h-16l4-34Z" fill="#2f3b33" />
      </g>

      <g>
        <path
          d="M947 386c-10-42-4-84 19-120 8-13 20-24 36-28 22-6 45 4 57 22 15 23 17 64 5 96-9 24-27 40-52 45l-65-15Z"
          fill="#35463c"
        />
        <path d="M1000 244c-2-46 8-78 31-99" stroke="#425246" strokeWidth="5" fill="none" />
        <path d="M1010 205c-22-15-46-17-66-4" stroke="#425246" strokeWidth="5" fill="none" />
        <path d="M1008 174c18-18 43-24 66-15" stroke="#425246" strokeWidth="5" fill="none" />
        <ellipse cx="941" cy="199" rx="27" ry="11" transform="rotate(-28 941 199)" fill="#425246" />
        <ellipse cx="1077" cy="156" rx="31" ry="12" transform="rotate(-32 1077 156)" fill="#425246" />
        <ellipse cx="1027" cy="140" rx="25" ry="10" transform="rotate(61 1027 140)" fill="#425246" />
      </g>

      <path
        d="M280 405c118-22 260-31 411-26 136 5 253 22 329 43H248l32-17Z"
        fill="#cbbfa3"
        opacity="0.9"
      />
      <path
        d="M330 419c134-18 280-24 421-17 83 4 157 13 217 26H301l29-9Z"
        fill="#d8cdb4"
        opacity="0.7"
      />
    </svg>
  )
}

export function CourseThumbnail({ variant }) {
  if (variant === 'web') {
    return (
      <svg
        className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="400" height="240" fill="#4e998a" />
        <path d="M0 196c58-21 118-25 182-11 68 15 137 14 218-5v60H0v-44Z" fill="#5fa695" />
        <path d="M0 211c67-16 130-17 190-3 66 15 135 12 210-9v41H0v-29Z" fill="#6bae9e" />
        <g fill="#d5e5dd">
          <ellipse cx="52" cy="63" rx="29" ry="18" />
          <ellipse cx="76" cy="52" rx="21" ry="15" />
          <ellipse cx="30" cy="54" rx="17" ry="13" />
        </g>
        <path d="M305 62c9-19 33-31 54-27 5-13 27-18 38-7 9 9 8 24-2 31h-90v3Z" fill="#c2dbd2" />
        <g>
          <rect x="28" y="93" width="5" height="63" rx="2.5" fill="#3c6f5f" />
          <g fill="#cfe3d7">
            <circle cx="45" cy="103" r="18" />
            <circle cx="24" cy="117" r="14" />
            <circle cx="52" cy="122" r="15" />
            <circle cx="35" cy="86" r="13" />
          </g>
        </g>
        <g fill="#f4f8f5" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif">
          <text x="200" y="106" fontSize="30" fontWeight="800" letterSpacing="1">WEBB</text>
          <text x="200" y="137" fontSize="24" fontWeight="800" letterSpacing="1">DEVELOPMENT</text>
        </g>
        <g transform="translate(165 158)">
          <circle cx="16" cy="16" r="16" fill="#e9efe9" />
          <text x="16" y="21" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="800" fill="#4e998a">DS</text>
        </g>
        <g fill="#c5ddd3">
          <path d="M353 190c-4-19 5-35 22-43-1 17-7 31-22 43Z" />
          <path d="M358 190c11-13 25-19 41-14-9 12-24 17-41 14Z" />
        </g>
      </svg>
    )
  }

  if (variant === 'javascript') {
    return (
      <svg
        className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="400" height="240" fill="#dfe5d6" />
        <rect x="22" y="18" width="356" height="14" rx="7" fill="#d2dac7" />
        <rect x="22" y="18" width="64" height="14" rx="7" fill="#c3ceb6" />
        <rect x="22" y="44" width="58" height="17" rx="4" fill="#404b3d" />
        <text x="51" y="56" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="700" fill="#f4f6ef">JavaScript</text>
        <g fill="#b3c1a8">
          <rect x="22" y="75" width="34" height="4" rx="2" />
          <rect x="62" y="75" width="81" height="4" rx="2" />
          <rect x="149" y="75" width="37" height="4" rx="2" />
          <rect x="192" y="75" width="95" height="4" rx="2" />
          <rect x="292" y="75" width="22" height="4" rx="2" />
          <rect x="60" y="88" width="53" height="4" rx="2" />
          <rect x="119" y="88" width="98" height="4" rx="2" />
          <rect x="223" y="88" width="34" height="4" rx="2" />
          <rect x="263" y="88" width="71" height="4" rx="2" />
          <rect x="34" y="101" width="26" height="4" rx="2" />
          <rect x="66" y="101" width="63" height="4" rx="2" />
          <rect x="135" y="101" width="44" height="4" rx="2" />
          <rect x="185" y="101" width="112" height="4" rx="2" />
          <rect x="303" y="101" width="44" height="4" rx="2" />
          <rect x="60" y="114" width="41" height="4" rx="2" />
          <rect x="107" y="114" width="22" height="4" rx="2" />
          <rect x="135" y="114" width="83" height="4" rx="2" />
          <rect x="224" y="114" width="55" height="4" rx="2" />
          <rect x="285" y="114" width="34" height="4" rx="2" />
          <rect x="34" y="127" width="48" height="4" rx="2" />
          <rect x="88" y="127" width="97" height="4" rx="2" />
          <rect x="191" y="127" width="29" height="4" rx="2" />
          <rect x="226" y="127" width="76" height="4" rx="2" />
          <rect x="60" y="140" width="67" height="4" rx="2" />
          <rect x="133" y="140" width="35" height="4" rx="2" />
          <rect x="174" y="140" width="103" height="4" rx="2" />
          <rect x="283" y="140" width="45" height="4" rx="2" />
          <rect x="34" y="153" width="31" height="4" rx="2" />
          <rect x="71" y="153" width="61" height="4" rx="2" />
          <rect x="138" y="153" width="98" height="4" rx="2" />
          <rect x="242" y="153" width="23" height="4" rx="2" />
          <rect x="271" y="153" width="57" height="4" rx="2" />
          <rect x="60" y="166" width="52" height="4" rx="2" />
          <rect x="118" y="166" width="87" height="4" rx="2" />
          <rect x="211" y="166" width="40" height="4" rx="2" />
          <rect x="257" y="166" width="69" height="4" rx="2" />
          <rect x="34" y="179" width="41" height="4" rx="2" />
          <rect x="81" y="179" width="73" height="4" rx="2" />
          <rect x="160" y="179" width="47" height="4" rx="2" />
          <rect x="213" y="179" width="96" height="4" rx="2" />
          <rect x="60" y="192" width="65" height="4" rx="2" />
          <rect x="131" y="192" width="38" height="4" rx="2" />
          <rect x="175" y="192" width="88" height="4" rx="2" />
          <rect x="269" y="192" width="52" height="4" rx="2" />
        </g>
      </svg>
    )
  }

  return (
    <svg
      className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="400" height="240" fill="#f4f2ec" />
      <g stroke="#d6d3ca" strokeWidth="2" fill="none" opacity="0.8">
        <path d="M340 40c-16 17-24 38-24 65" />
        <path d="M342 55c13 4 24 13 31 27" />
      </g>
      <g fill="#c8c4b8">
        <ellipse cx="331" cy="108" rx="15" ry="6" transform="rotate(30 331 108)" />
        <ellipse cx="363" cy="78" rx="14" ry="6" transform="rotate(-24 363 78)" />
      </g>
      <ellipse cx="200" cy="196" rx="112" ry="16" fill="#e7e3da" />
      <circle cx="200" cy="150" r="74" fill="#eeeac2" opacity="0.55" />
      <circle cx="200" cy="148" r="62" fill="#fbf9f2" />
      <circle cx="200" cy="148" r="54" fill="#f6f3ea" />
      <g fill="#5f7d55">
        <ellipse cx="200" cy="120" rx="11" ry="27" />
        <ellipse cx="181" cy="132" rx="10" ry="24" transform="rotate(-35 181 132)" />
        <ellipse cx="219" cy="132" rx="10" ry="24" transform="rotate(35 219 132)" />
        <ellipse cx="168" cy="150" rx="9" ry="20" transform="rotate(-65 168 150)" />
        <ellipse cx="232" cy="150" rx="9" ry="20" transform="rotate(65 232 150)" />
      </g>
      <g fill="#7f9a72">
        <ellipse cx="200" cy="124" rx="7" ry="20" />
        <ellipse cx="184" cy="134" rx="6" ry="17" transform="rotate(-35 184 134)" />
        <ellipse cx="216" cy="134" rx="6" ry="17" transform="rotate(35 216 134)" />
        <ellipse cx="172" cy="149" rx="5" ry="14" transform="rotate(-65 172 149)" />
        <ellipse cx="228" cy="149" rx="5" ry="14" transform="rotate(65 228 149)" />
        <ellipse cx="200" cy="158" rx="15" ry="6" />
      </g>
      <rect x="191" y="169" width="18" height="10" rx="3" fill="#4c6446" />
      <path d="M187 177h26l-4 14h-18l-4-14Z" fill="#d9d4c6" />
      <path d="M300 205c22-4 43-2 63 7" stroke="#c9c4b6" strokeWidth="3" fill="none" />
    </svg>
  )
}
