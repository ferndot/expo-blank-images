import React from "react"
import Svg, { Path, Circle } from 'react-native-svg';

export default class Logo extends React.Component {
  render() {
    return (
      <Svg viewBox="0 0 250 250" {...this.props}>
        <Circle
          cx={125}
          cy={125}
          r={125}
          fill="#ffffff"
          stroke="#ffffff"
        />
      </Svg>
    )
  }
}
