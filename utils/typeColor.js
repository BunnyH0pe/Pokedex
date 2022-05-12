import React from "react";

export function TypeColor(typeName) {
  if (typeName !== null) {
    switch (typeName) {
      case 'bug':
        return "#1D4A29"
      case 'dark':
        return "#1f1f1f"
      case 'dragon':
        return "#448B95"
      case 'electric':
        return "#E3E332"
      case 'fairy':
        return "#971944"
      case 'fighting':
        return "#994025"
      case 'fire':
        return "#AB2022"
      case 'flying':
        return "#4E6477"
      case 'ghost':
        return "#33336B"
      case 'grass':
        return "#147B3D"
      case 'ground':
        return "#A9702C"
      case 'ice':
        return "#86D2F5"
      case 'normal':
        return "#75515B"
      case 'poison':
        return "#5E2D88"
      case 'psychic':
        return "#A42A6C"
      case 'rock':
        return "#48180B"
      case 'steel':
        return "#5F756D"
      case 'water':
        return "#1552E2"
    }
  }
}