import React from 'react'
import styles from './styles.module.css'
import { wesanderson } from './colors.js'

export const Dvrg = ({ seed }) => {
  const svgheight = 100
  const svgwidth = 100

  const cellwidth = 20
  const cellheight = 20

  const hexcolors = wesanderson['Zissou1']

  const xs = [...Array(5).keys()]
  const ys = [...Array(5).keys()]

  const rects = xs.map((idx) => {
    return ys.map((idy) => {
      const rectStyle = {
        fill: hexcolors[idx],
        strokeWidth: 0,
        stroke: hexcolors[idy]
      }
      return (
        <rect
          key='{idx}-{idy}'
          width={cellwidth}
          height={cellheight}
          x={idx * cellwidth}
          y={idy * cellheight}
          style={rectStyle}
        />
      )
    })
  })

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
