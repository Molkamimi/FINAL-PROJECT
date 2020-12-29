import React from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Add = () => {
  return (
    <Paper>
      <form autoComplete="off" noValidate>
        <Typography variant="h6"></Typography>

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
        />

        <TextField name="title" variant="outlined" label="Title" fullWidth />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
        />
        <div>
          <FileBase type="file" multiple={false} />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Add;
