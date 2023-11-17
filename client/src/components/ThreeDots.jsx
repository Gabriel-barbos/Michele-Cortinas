function ThreeDots(props) {
    return (
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g data-name="20x20/three-dots--grey" transform="rotate(90 12 12)">
          <path fill="none" d="M0 0H24V24H0z" />
          <circle
            cx={1}
            cy={1}
            r={1}
            transform="translate(5 11)"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={0.5}
          />
          <circle
            data-name="Oval"
            cx={1}
            cy={1}
            r={1}
            transform="translate(11 11)"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={0.5}
          />
          <circle
            data-name="Oval"
            cx={1}
            cy={1}
            r={1}
            transform="translate(17 11)"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={0.5}
          />
        </g>
      </svg>
    )
  }
  
  export default ThreeDots