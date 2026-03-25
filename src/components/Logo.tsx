export default function Logo() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-mark"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="jeevikaGradient" x1="10" y1="6" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f6c766" />
          <stop offset="45%" stopColor="#8fd3a2" />
          <stop offset="100%" stopColor="#2d8b57" />
        </linearGradient>
      </defs>

      <circle className="logo-ring logo-ring-outer" cx="26" cy="26" r="22" />
      <circle className="logo-ring logo-ring-inner" cx="26" cy="26" r="17.5" />
      <circle cx="26" cy="26" r="15.5" fill="url(#jeevikaGradient)" />

      <path
        d="M30 16V28.5C30 34.299 26.194 38 20.85 38C18.385 38 16.171 37.211 14.5 35.639"
        stroke="white"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6 30.2C15.8 32.5 17.8 33.9 20.5 33.9C23.7 33.9 25.2 31.8 25.2 28.6V16"
        stroke="#F7FFFB"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  )
}
