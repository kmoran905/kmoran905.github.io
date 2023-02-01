import React from 'react';

export default function Clothes() {
    return (
        <><h1>Clothes</h1>

        <div class="list">
            <div class="item">
                <h2>Black Jeans</h2>
                <img src={require("../images/blackjeans.jpg")} alt="blackjeans" width="200" height="200"/>
                <span>$57.99</span>
            </div>
            <div class="item">
                <h2> Blue Jeans</h2>
                <img src={require("../images/bluejeans.jpg")} alt="bluejeans" width="200" height="200"/>
                <span>$59.99</span>
            </div>
            <div class="item">
                <h2>Red Shirt</h2>
                <img src={require("../images/redshirt.jpg")} alt="redshirt" width="200" height="200"/>
                <span>$45.99</span>
            </div>
            <div class="item">
                <h2>White Sweater</h2>
                <img src={require("../images/whitesweater.jpg")} alt="whitesweater" width="200" height="200"/>
                <span>$80.99</span>
            </div>
        </div>
        </>
    )
}