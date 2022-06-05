import React from "react";
import ReceipeForm from "./ReceipeForm";
import ReceipeList from "./ReceipeList";

export default function ReceipesPage() {
    return (
      <div id="receipe_page">
        <ReceipeForm />
        <hr></hr>
        <ReceipeList />
      </div>
    );
  }
