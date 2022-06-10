type LocationPinProps = {
  count?: string | number;
};

export const LocationPinCount: React.FC<LocationPinProps> = ({ count }) => (
  <svg role="img" width="40" height="40" viewBox="0 0 781.94 781.94">
    <g>
      <path
        fill="#a5afb3"
        d="M380.47 731.85c39.02,18.91 228.88,-264.7 250.1,-348.5 40.82,-156.67 -80.32,-358.09 -250.1,-339.64 -181.94,-2.44 -296.03,196.18 -250.09,339.64 21.23,83.8 211.08,367.41 250.09,348.5z"
      />
      {count && (
        <text
          x="50%"
          y="50%"
          fill="white"
          dominantBaseline="middle"
          textAnchor="middle"
          fontWeight="bold"
          fontSize="300px"
          fontFamily="Arial"
        >
          {count}
        </text>
      )}
    </g>
  </svg>
);
