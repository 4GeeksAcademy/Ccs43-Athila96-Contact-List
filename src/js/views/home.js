import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FormContact } from "../component/formContact.jsx";
import { FormUpdate } from "../component/formUpdate.jsx";
import { ListContact } from "../component/listContact.jsx";

export const Home = () => (
  <div className="text-center mt-5">
    <ListContact />
  </div>
);
