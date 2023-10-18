import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5",
            eraserMode: false,
        };
    }

    changeColor(params) {
        this.setState({
            color: params.target.value,
            eraserMode: false, // Turn off eraser mode when changing the color
        });
    }

    changeSize(params) {
        this.setState({
            size: params.target.value,
        });
    }

    clearCanvas() {
        const canvas = document.querySelector('#board');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    toggleEraser() {
        this.setState((prevState) => ({
            eraserMode: !prevState.eraserMode,
            color: prevState.eraserMode ? "#000000" : "#ffffff", // Toggle brush color
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="tools-section">
                    <div className="top-section">
                        <div className="color-picker-container">
                            Select Brush Color : &nbsp;
                            <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)} />
                        </div>

                        <div className="brushsize-container">
                            Select Brush Size : &nbsp;
                            <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                        </div>

                        <button className="eraser-button" onClick={this.toggleEraser.bind(this)}>Eraser</button>
                        <button className="clean-button" onClick={this.clearCanvas.bind(this)}>Clear All</button>
                   
                    </div>
                </div>
                <div className="board-container">
                    <Board color={this.state.color} size={this.state.size} eraserMode={this.state.eraserMode} />
                </div>
            </div>
        );
    }
}

export default Container;
