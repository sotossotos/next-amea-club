import { CSSObject } from 'theme-ui'

export const global: CSSObject = {
  html: {
    height:'100%',
    width: '100%',
    display: 'flex',
    flexDirection:'column'
  },
  body: {
    margin: 0,
    display:'flex',
    flexDirection:'column',
    color: '#F1F1F1',
    textRendering: 'auto',
    overflowX: 'hidden',
    backgroundColor:'#252932',
    fontFamily:'Open Sans',
    width: '100%',
    height:'100%'
  },
}