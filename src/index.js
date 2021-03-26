import React from 'react'
import styles from './styles.module.css'

export const Dvrg = ({ seed }) => {
  const svgheight = 100
  const svgwidth = 100

  const cellwidth = 10
  const cellheight = 10

  const rectStyle = {
    fill: 'red',
    strokeWidth: 0,
    stroke: 'red'
  }

  const xs = [...Array(10).keys()]
  const ys = [...Array(10).keys()]

  const rects = xs.map((idx) =>
    ys.map((idy) => (
      <rect
        key='{idx}-{idy}'
        width='10'
        height='10'
        x={idx * cellwidth}
        y={idy * cellheight}
        style={rectStyle}
      />
    ))
  )

  return (
    <div className={styles.test}>
      <svg
        height={svgheight}
        width={svgwidth}
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='50'
          cy='50'
          r='40'
          stroke='black'
          strokeWidth='3'
          fill='red'
        />
        {rects}
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  )
}
