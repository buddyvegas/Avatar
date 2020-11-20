import { Component, Prop, h } from '@stencil/core';
import { getColor, getInitials } from "../../utils/utils";

@Component({
  tag: 'af-avatar',
  shadow: true
})
export class Avatar {
  @Prop() name: string;
  @Prop() size: number = 60;

  render() {
    return <svg version="1.1" viewBox="0 0 50 50" width={this.size} height={this.size}>
      <circle
        fill={getColor(this.name)}
        stroke="#fff"
        stroke-width="2"
        cx="25"
        cy="25"
        r="24"
        opacity="1" />
      <text x="25" y="30" text-anchor="middle" fill="#000" opacity="0.8">
        {getInitials(this.name)}
      </text>
    </svg>
  }
}