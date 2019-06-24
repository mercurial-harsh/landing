import React from 'react';
import './PageCards.css'

const PageCards=() => {
    return (
        <div class="row containerFlex">
        <div class="col s12">
          <div class="card-panel teal cardContainer">
            <span class="white-text">
                <span className="welcomeText">Hi! Welcome to Xe-bid..</span> <br></br>
                <span className="cardText">Your ultimate platform to "showcase thy forecasting abilities".</span>
            </span>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="card-panel teal cardContainer">
            <span class="white-text">
                <span className="welcomeText">Here are a few instructions for you: </span> <br></br>
                <span className="cardText">1- <br></br> 2- <br></br> 3- <br></br> 4- <br></br></span>
            </span>
          </div>
        </div>
      </div>
    )
}

export default PageCards;