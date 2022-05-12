import React from "react";

export function StatColor(statName) {
    if (statName !== null) {
        switch (statName) {
            case 'hp':
                return "#FF5959"
            case 'attack':
                return "#F5AC78"
            case 'defense':
                return "#FAE078"
            case 'special-attack':
                return "#9DB7F5"
            case 'special-defense':
                return "#A7DB8D"
            case 'speed':
                return "#FA92B2"
        }
    }
}