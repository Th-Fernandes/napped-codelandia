import pallet from "../../config.json"

const mainStyle = `
  transition: background-color 1.2s, transform 0.85s;
  cursor: pointer;
  user-select: none; 
`

const hoverStyle = `
  transform: scale(1.1);
  background-color: ${pallet.colors.primary["purple-light"]};
  background-blend-mode: multiply;
`

export default {
  mainStyle,
  hoverStyle,
}