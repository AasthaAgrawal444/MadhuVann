import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

const cardStyle = {
  backgroundColor: "#F2EFDC",
  minWidth: 300,
  minHeight: 150,
  margin: "10px",
  border: "5px solid #365945",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow
};

const CardComponent = () => {
  return (
    <Grid container spacing={2}>
      {/* Laptop screens */}
      <Grid item md={3} sm={6} xs={12}>
        <Card style={cardStyle}>
          <CardContent>{/* Your card content goes here */}</CardContent>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card style={cardStyle}>
          <CardContent>{/* Your card content goes here */}</CardContent>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card style={cardStyle}>
          <CardContent>{/* Your card content goes here */}</CardContent>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card style={cardStyle}>
          <CardContent>{/* Your card content goes here */}</CardContent>
        </Card>
      </Grid>

      {/* Mobile screens */}
      <Grid item xs={12}>
        <Card style={cardStyle}>
          <CardContent>{/* Your card content goes here */}</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card style={cardStyle}>
          <CardContent>{/* Your card content goes here */}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
