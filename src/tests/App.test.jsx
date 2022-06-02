/* eslint-disable prettier/prettier */
/**
 * @jest-environment jsdom
 */

import React from "react"
import { render } from "@testing-library/react"
import App from "../App.jsx"

it("App renders without crashing", () => {
  render(<App />)
})
