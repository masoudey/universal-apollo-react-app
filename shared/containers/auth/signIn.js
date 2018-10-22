import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import * as Cookies from "es-cookie";

import { Helmet } from "react-helmet";
import { SIGNIN_USER } from "../../queries/userQueries";