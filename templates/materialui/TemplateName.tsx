/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/pages/TemplateName/TemplateName.tsx

Created with;
$ npx generate-react-cli component TemplateName --type=materialui

*/

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.background.default
    },
  }),
);

export default function TemplateName(/* props: ITemplateNameProp */) {
  const classes = useStyles()
  const [state, setState] = React.useState(false)
  const handleOpen = () => {
    setState(true);
  }
  return (
    <>
      <button type="button" onClick={handleOpen} className={classes.button}>
        my button
      </button>
    </>
  )
}

interface ITemplateNameProp {
  // TODO
}