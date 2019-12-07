import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

export default function PublisherInfo(props) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 600,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
      bottom: 0,
      left: 0,
      margin: "-150px 50px"
    }
  }))(Tooltip);

  const buttonStyle = { padding: "6px 0px" };

  return (
    <span>
      <Box
        kkey={props.publisher.id}
        component="span"
        mb={3}
        borderColor="transparent"
        className="mr-1"
      >
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography component="span" className="ml-2">
                {props.publisher.description}
              </Typography>
            </React.Fragment>
          }
        >
          <Button style={buttonStyle}>
            <Typography component="span">{props.publisher.name} |</Typography>
          </Button>
        </HtmlTooltip>
      </Box>
    </span>
  );
}
