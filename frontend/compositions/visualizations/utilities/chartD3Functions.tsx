import { select } from "d3"
import { DataPoint } from "./chartTypes"

export function addLabel(d: DataPoint, i: number) {
  return select("#chart-root g")
    .append("text")
    .text(d.label)
    .attr("color", "grey")
    .attr("font-size", "1em")
    .attr("x", d.coord.x)
    .attr("y", d.coord.y)
    .attr("z-index", 1000)
}

export function subtractTimes(date1: Date, date2: Date) {
  return date2?.getTime() - date1?.getTime()
}