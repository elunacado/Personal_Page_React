import React from 'react'

export class Card extends React.Component {
    render(){
        return (
            <div className="cardFather">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Cryptocurrencies</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Bitcoin</h6>
                        <p class="card-text">Right Now Bitcoin's Price is:</p>
                        <h6 class="card-subtitle mb-2 text-muted">Ethereum</h6>
                        <p class="card-text">Right Now Ethereum's Price is:</p>
                        <h6 class="card-subtitle mb-2 text-muted">Twitter Tendencies</h6>
                        <p class="card-text">Today in Mexico the number 1 trend is:</p>
                    </div>
                </div>
            </div>
        )
}
}
export default Card;
