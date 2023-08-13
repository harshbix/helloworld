import React from "react"

const classes = 'text-decoration-none mx-2 h3 border-bottom border-danger';

function translatorBtns() {
  return ( <div className="text-center">
    <a href="/en" className={classes}>EN</a>
    <a href="/es"  className={classes}>ES</a>
  </div>)
}

export default translatorBtns;
