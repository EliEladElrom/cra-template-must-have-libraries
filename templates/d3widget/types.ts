/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/TemplateName/types.ts

Created with;
$ npx generate-react-cli component TemplateName --type=d3Widget

*/

export namespace Types {
  export type Data = {
    value1?: number,
    value2?: number
  }
  export type Dimensions = {
    width: number
    height: number
    margin: {
      left: number
      right: number
      top: number
      bottom: number
    }
    boundedWidth: number
    boundedHeight: number
  }
}