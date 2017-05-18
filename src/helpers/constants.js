import { css } from 'styled-components'

export const colors = {
  saphire: '#354ECE',
  carnation: '#FA4F5B',
  perano: '#A3AFEC',
  puertorico: '#3BBEA1',

  // UI Colors
  notBlack: '#242935',
  carkBrey: '#626262',
  concrete: '#DFE1E4',
  lightGrey: '#F8F8F8',
  wall: '#F9F9F9',
  white: '#FFFFFF'
};

export const gradients = {
  saphire: 'linear-gradient(135deg, rgba(31,30,138,1) 0%, rgba(71,116,230,1) 100%)'
};

export const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})