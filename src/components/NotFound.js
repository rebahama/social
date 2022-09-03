import React from 'react'
import NoResults from "../assets/no-results.png";
import NotFoundStyles from "../styles/NotFound.module.css"
import Asset from "../components/Asset"

const NotFound = () => {
  return (
    <div className={NotFoundStyles}>
        <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist"/>
    </div>
  )
}

export default NotFound