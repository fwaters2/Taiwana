import React from "react";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  TextField,
  SvgIcon,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

export default function HelpPlayer(props) {
  
  const {handleChange, player, values, handleGender, handleNewbie, langStrings} = props
  const name= "name"+player
  const gender= "gender"+player
  const newbie = "newbie"+player
  return (
    <Grid container alignItems='center' justify='space-between'>
      <Grid item xs={12} sm={6}>
        <TextField
        fullWidth
        variant='outlined'
          label={langStrings.Name}
          value={values[name]}
          onChange={(e)=>handleChange(e, name)}
        />
      </Grid>
      <Grid container justify='center' item xs={6} sm={3}>
        <ToggleButtonGroup
          value={values[gender]}
          exclusive
          onChange={handleGender}
          size="small"
        >
          <ToggleButton value="Female">
            <SvgIcon color="secondary">
              <path d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z" />
            </SvgIcon>
          </ToggleButton>
          <ToggleButton value="Male">
            <SvgIcon color="primary">
              <path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" />
            </SvgIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={6} sm={3}>
      <FormControlLabel
        control={
          <Checkbox checked={values[newbie]} onChange={handleNewbie} value="checkedA" />
        }
        label={langStrings.NewToUltimate}
      />
      </Grid>
    </Grid>
  );
}
